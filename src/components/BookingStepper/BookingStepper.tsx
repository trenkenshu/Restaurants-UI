import React, { FC, useContext, useEffect, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import RestaurantScheme from 'components/RestaurantScheme';
import Calendar from 'react-calendar';
import { AppContext } from 'store/store';
import ButtonBlack from 'components/ButtonBlack';
import getCalendarDate from 'utils/functions/getCalendarDate';
import setTimeIntervals from 'utils/functions/setTimeIntervals';
import { ICreateBooking, IRestaurant } from 'types';
import { content } from 'utils/content';
import { createBooking, getRestaurant, getUser } from 'api/api';
import { emptyStepper, nameRegexp, phoneRegexp } from 'utils/constants';
import checkActiveTime from 'utils/functions/checkActiveTime';
import setParsedTranslation from 'utils/functions/setParsedTranslation';
import './Calendar.css';

const steps = {
    en: ['Select date', 'Select time', 'Select table', 'Guest info', 'Finish booking'],
    ru: ['Дата', 'Время', 'Стол', 'Инфо', 'Бронь'],
};

type BookingStepperProps = {
    restaurant: IRestaurant;
    setRestaurant: (data: IRestaurant) => void;
    closeBookingModal: () => void;
};

const BookingStepper: FC<BookingStepperProps> = ({ restaurant, closeBookingModal, setRestaurant }) => {
    const { state, dispatch } = useContext(AppContext);
    const [activeStep, setActiveStep] = useState(0);
    const [stepperState, setStepperState] = useState(emptyStepper);
    // for inputs
    const [nameFocus, setNameFocus] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const timeIntervals = setTimeIntervals(restaurant.workTimeStart, restaurant.workTimeEnd - 2);

    useEffect(() => {
        if (isNameValid && stepperState.stepFour.name.length && isPhoneValid && stepperState.stepFour.phone.length) {
            setStepperState((prev) => {
                return {
                    ...prev,
                    stepsFinished: prev.stepsFinished.map((el) => (el = true)),
                };
            });
            // setStepperState((prev) => {
            //     return {
            //         ...prev,
            //         stepsFinished: prev.stepsFinished.map((el) => {
            //             let newEl = el;
            //             newEl = true;
            //             return newEl;
            //         }),
            //     };
            // });
        } else {
            console.log('step4 false', activeStep);
            setStepperState((prev) => {
                return {
                    ...prev,
                    stepsFinished: prev.stepsFinished.map((el, index) => index === 3 && (el = false)),
                };
            });
        }
    }, [isNameValid, isPhoneValid, stepperState.stepFour.name, stepperState.stepFour.phone]);

    // Inputs functions
    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^A-Za-zА-Яа-я\s]/g, '');

        setStepperState((prev) => {
            return {
                ...prev,
                stepFour: { ...prev.stepFour, name: value },
            };
        });

        if (value.length > 1 && nameRegexp.test(value)) {
            console.log('validate name hanlder', value.match(nameRegexp), value);
            console.log('name hanlder', nameRegexp.test(value));
            setIsNameValid(true);
        } else {
            setIsNameValid(false);
        }
    };

    const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^\d+]/g, '');

        setStepperState((prev) => {
            return {
                ...prev,
                stepFour: { ...prev.stepFour, phone: value },
            };
        });

        if (value.length > 9 && phoneRegexp.test(value)) {
            console.log('validate phone hanlder inside');
            console.log('validate phone hanlder', phoneRegexp.test(value), value);
            setIsPhoneValid(true);
        } else {
            setIsPhoneValid(false);
        }
    };

    // const guestAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     let value = event.target.value;

    //     if (Number(value) < 1) {
    //         value = '1';
    //     }
    //     if (Number(value) > 4) {
    //         value = '4';
    //     }
    //     if (value.length < 2) {
    //         setStepperState((prev) => {
    //             return {
    //                 ...prev,
    //                 stepThree: { ...prev.stepThree, guestNumber: Number(value) },
    //             };
    //         });
    //     } else {
    //         value = value.slice(0, -1);
    //     }
    // };
    // const disableKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    //     event.preventDefault();
    //     console.log('disableKeyDown');
    // };

    const increaseGuestAmount = () => {
        if (stepperState.stepThree.guestNumber + 1 > 0 && stepperState.stepThree.guestNumber + 1 < 5) {
            setStepperState((prev) => {
                return {
                    ...prev,
                    stepThree: { ...prev.stepThree, guestNumber: prev.stepThree.guestNumber + 1 },
                };
            });
            // console.log('+', stepperState.stepThree.guestNumber);
        }
    };
    const decreaseGuestAmount = () => {
        if (stepperState.stepThree.guestNumber > 1) {
            setStepperState((prev) => {
                return {
                    ...prev,
                    stepThree: { ...prev.stepThree, guestNumber: prev.stepThree.guestNumber - 1 },
                };
            });
            // console.log('+', stepperState.stepThree.guestNumber);
        }
    };

    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const { target } = event;
        switch (target.name) {
            case 'bookingName':
                setNameFocus(true);
                break;
            case 'bookingPhone':
                setPhoneFocus(true);
                break;
        }
    };

    const handleNext = () => {
        if (activeStep >= 0 && activeStep < steps[state.language].length) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }

        if (activeStep === steps[state.language].length - 1) {
            console.log('Завершили бронь');
            const dateOfBooking = new Date(`${stepperState.stepOne.toDateString()} ${stepperState.stepTwo}:00:00`);
            const bookingBody = {
                clientId: state.user.id,
                cafeId: restaurant.id,
                tableId: Number(stepperState.stepThree.tableId),
                date: dateOfBooking,
                duration: 1,
                guestName: stepperState.stepFour.name,
                guestPhone: stepperState.stepFour.phone,
                guestAmount: stepperState.stepThree.guestNumber,
            };
            console.log('bookingBody', bookingBody);
            makeReservation(bookingBody);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setStepperState(emptyStepper);
    };

    const chooseTime = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.currentTarget;
        console.log(target.dataset.time);
        document.querySelectorAll('.timeblock').forEach((el) => el.classList.remove('active'));
        target.classList.add('active');
        // target.dataset.time && setTime(target.dataset.time);
        console.log('restnbookings', restaurant.bookings);
        const reservedTables: string[] = [];
        restaurant.bookings.forEach((booking) => {
            const dateOfBooking = new Date(`${stepperState.stepOne.toDateString()} ${target.dataset.time}:00:00`);
            if (new Date(booking.date).getTime() === dateOfBooking.getTime()) {
                reservedTables.push(String(booking.tableId));
            }
        });

        setStepperState((prev) => {
            return {
                ...prev,
                stepsFinished: prev.stepsFinished.map((el, index) => (index <= 1 ? (el = true) : (el = false))),
                stepTwo: target.dataset.time ? target.dataset.time : '',
                reservedTables: reservedTables,
                stepThree: { ...prev.stepThree, tableId: '' },
            };
        });
        console.log('choose time', stepperState.stepsFinished);
    };

    const makeReservation = (body: ICreateBooking) => {
        createBooking(body).then(() => {
            getUser(state.user.id).then((updatedUser) => {
                setParsedTranslation(updatedUser);
                console.log('NEWUSER', updatedUser);
                dispatch({
                    type: 'updateUser',
                    payload: updatedUser,
                });
                closeBookingModal();
                handleReset();
            });
            getRestaurant(restaurant.id).then((restaurant) => {
                console.log('NEWrestaurant', restaurant);
                restaurant.parsedTranslation = JSON.parse(restaurant.translation);
                setRestaurant(restaurant);
            });
        });
    };

    return {
        ...(activeStep === steps[state.language].length ? (
            <div className='py-6 text-4xl text-center'>{content.bookingModal.finishBooking[state.language]}</div>
        ) : (
            <div className='flex flex-col w-full min-h-[560px] min-[400px]:min-h-[660px] justify-between p-2 gap-2'>
                <div className='flex flex-col gap-5'>
                    <div className='text-center text-4xl'>
                        {activeStep === 0 && steps[state.language][0]}
                        {activeStep === 1 && steps[state.language][1]}
                        {activeStep === 2 && steps[state.language][2]}
                        {activeStep === 3 && steps[state.language][3]}
                        {activeStep === 4 && steps[state.language][4]}
                    </div>
                    <Stepper
                        activeStep={activeStep}
                        alternativeLabel
                        sx={{
                            '& .MuiStepLabel-root .Mui-completed': {
                                color: 'black', // circle color (COMPLETED)
                            },
                            '.dark & .MuiStepLabel-root .Mui-completed': {
                                color: '#F0F0F0', // dark theme circle color (COMPLETED)
                            },
                            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
                                color: 'black', // Just text label (COMPLETED)
                            },
                            '& .MuiStepLabel-root .Mui-active': {
                                color: '#ff5f49', // circle color (ACTIVE)
                            },
                            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
                                color: '#ff5f49', // Just text label (ACTIVE)
                            },
                            '.dark & .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
                                color: '#ff5f49', // Just text label (ACTIVE)
                            },
                            '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
                                color: 'black', // Just text label light theme
                            },
                            '.dark & .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
                                color: '#F0F0F0', // Just text label dark theme
                            },
                            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                fill: 'white', // text in circle (ACTIVE)
                            },
                            '.dark & .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                fill: 'white', // text in circle dark theme (ACTIVE)
                            },
                            '.dark & .MuiStepLabel-root .MuiStepIcon-text': {
                                fill: 'black', // text in circle
                            },
                            '& .Mui-disabled .MuiStepIcon-root': {
                                color: 'black', // non-active circles color
                            },
                            '.dark & .Mui-disabled .MuiStepIcon-root': {
                                color: '#F0F0F0', // non-active circles color dark theme
                            },
                        }}
                    >
                        {steps[state.language].map((label) => {
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </div>
                <div className='flex flex-col gap-2 justify-between items-center min-h-full'>
                    {activeStep === 0 && (
                        <div className='flex flex-col gap-4 items-center text-zinc-800'>
                            <Calendar
                                value={stepperState.stepOne}
                                onChange={(value: Date) =>
                                    setStepperState((prev) => {
                                        return {
                                            ...prev,
                                            stepOne: value,
                                        };
                                    })
                                }
                                minDate={new Date()}
                                locale={state.language}
                                onClickDay={() => {
                                    setStepperState((prev) => {
                                        return {
                                            ...prev,
                                            stepsFinished: prev.stepsFinished.map((el, index) =>
                                                index === 0 ? (el = true) : (el = false),
                                            ),
                                        };
                                    });
                                    console.log(stepperState.stepsFinished);
                                }}
                            />
                            <div className='flex flex-col min-[400px]:flex-row gap-1 text-center'>
                                <p className='font-bold'>{content.bookingModal.selectedDate[state.language]}:</p>
                                <p>{getCalendarDate(stepperState.stepOne, state.language)}</p>
                            </div>
                        </div>
                    )}
                    {activeStep === 1 && (
                        <div className='flex flex-col items-center gap-3'>
                            <div className='font-bold'>{content.bookingModal.bookingTime[state.language]}</div>
                            <div className='flex gap-1 justify-center flex-wrap w-full min-[480px]:w-10/12 sm:w-8/12'>
                                {timeIntervals.map((el, index) => (
                                    <button
                                        className={`timeblock w-16 h-16 min-[400px]:w-20 min-[400px]:h-20 min-[680px]:w-24  min-[680px]:h-24 rounded bg-gray-400 flex items-center justify-center cursor-pointer
                                        disabled:bg-zinc-700 disabled:cursor-default ${
                                            stepperState.stepTwo === String(el) && 'active'
                                        }`}
                                        disabled={!checkActiveTime(stepperState.stepOne, el)}
                                        key={index}
                                        data-time={el}
                                        onClick={chooseTime}
                                    >
                                        {el}.00
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeStep === 2 && (
                        <>
                            <div className=''>
                                <div className='flex gap-2 items-center'>
                                    <div className='whitespace-nowrap'>
                                        {content.bookingModal.guestsNumber[state.language]}:
                                    </div>
                                    <div className='flex items-center'>
                                        <button
                                            className='bg-minus bg-cover bg-center bg-no-repeat w-6 h-6 border border-zinc-800 rounded hover:bg-gray-300 transition duration-300 dark:bg-smoke-gray dark:hover:bg-gray-300'
                                            onClick={decreaseGuestAmount}
                                        ></button>
                                        <div className='w-7 text-center'>{stepperState.stepThree.guestNumber}</div>
                                        <button
                                            className='bg-plus bg-cover bg-center bg-no-repeat w-6 h-6 border border-zinc-800 rounded hover:bg-gray-300 transition duration-300 dark:bg-smoke-gray dark:hover:bg-gray-300'
                                            onClick={increaseGuestAmount}
                                        ></button>
                                    </div>
                                </div>
                                <p className='text-zinc-400 text-center text-sm'>
                                    {content.bookingModal.guestsPerTable[state.language]}
                                </p>
                            </div>
                            <RestaurantScheme
                                restaurant={restaurant}
                                stepperState={stepperState}
                                setStepperState={setStepperState}
                            />
                        </>
                    )}
                    {activeStep === 3 && (
                        <div className='flex w-8/12 flex-col gap-3'>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2 justify-between'>
                                    <p className='font-semibold'>{content.bookingModal.name[state.language]}</p>
                                    {nameFocus && !isNameValid && <p className='text-red-500 font-semibold'>Error</p>}
                                </div>

                                <input
                                    className={`w-full pl-1 text-zinc-800 border rounded focus:outline-none ${
                                        nameFocus && isNameValid ? 'border-green-500' : 'border-zinc-800'
                                    }`}
                                    type='text'
                                    name='bookingName'
                                    value={stepperState.stepFour.name}
                                    placeholder={content.bookingModal.namePlaceholder[state.language]}
                                    onBlur={(event) => blurHandler(event)}
                                    onChange={(event) => nameHandler(event)}
                                />
                                <p className='w-fit p-1 bg-zinc-300 text-zinc-800 text-sm rounded'>
                                    {content.bookingModal.nameText[state.language]}
                                </p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2 justify-between'>
                                    <p className='font-semibold'>{content.bookingModal.phone[state.language]}</p>
                                    {phoneFocus && !isPhoneValid && <p className='text-red-500 font-semibold'>Error</p>}
                                </div>
                                <input
                                    className={`w-full pl-1 text-zinc-800 border  rounded focus:outline-none ${
                                        phoneFocus && isPhoneValid ? 'border-green-500' : 'border-zinc-800'
                                    }`}
                                    type='text'
                                    name='bookingPhone'
                                    value={stepperState.stepFour.phone}
                                    placeholder={content.bookingModal.phonePlaceholder[state.language]}
                                    onBlur={(event) => blurHandler(event)}
                                    onChange={(event) => phoneHandler(event)}
                                />
                                <p className='w-fit p-1 bg-zinc-300 text-zinc-800 text-sm rounded'>
                                    {content.bookingModal.phoneText[state.language]}
                                </p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-semibold'>
                                    {content.bookingModal.comment[state.language]} (
                                    {content.bookingModal.optional[state.language]})
                                </p>
                                <textarea
                                    className='text-zinc-800 border border-zinc-800 dark:border-smoke-gray rounded pl-1 focus:outline-none resize-none '
                                    name='textarea'
                                    id='comment'
                                    placeholder={content.bookingModal.commentPlaceholder[state.language]}
                                    defaultValue={''}
                                    cols={8}
                                    rows={6}
                                ></textarea>
                            </div>
                        </div>
                    )}
                    {activeStep === 4 && (
                        <div className='flex flex-col w-11/12 sm:w-8/12 gap-3'>
                            <div className='w-full flex justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.name[state.language]}:</p>
                                <p className='font-semibold'>{stepperState.stepFour.name}</p>
                            </div>
                            <div className='w-full flex justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.phone[state.language]}: </p>
                                <p className='font-semibold'>{stepperState.stepFour.phone}</p>
                            </div>
                            <div className='w-full flex flex-col min-[400px]:flex-row justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.date[state.language]}:</p>
                                <p className='font-semibold self-end min-[400px]:self-auto'>
                                    {getCalendarDate(stepperState.stepOne, state.language)}
                                </p>
                            </div>
                            <div className='w-full flex justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.time[state.language]}:</p>
                                <p className='font-semibold'>{stepperState.stepTwo}.00</p>
                            </div>
                            <div className='w-full flex justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.table[state.language]}:</p>
                                <p className='font-semibold'>{stepperState.stepThree.tableId}</p>
                            </div>
                            <div className='w-full flex justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.guestsNumber[state.language]}:</p>
                                <p className='font-semibold'>{stepperState.stepThree.guestNumber}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex justify-center gap-3 p-2'>
                    <ButtonBlack
                        width='w-36'
                        height='h-10'
                        fontsize='text-lg'
                        buttonText={content.bookingModal.btnPrev[state.language]}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    />
                    <ButtonBlack
                        width='w-36'
                        height='h-10'
                        fontsize='text-lg'
                        disabled={!stepperState.stepsFinished[activeStep]}
                        onClick={handleNext}
                        buttonText={
                            activeStep === steps[state.language].length - 1
                                ? content.bookingModal.btnBook[state.language]
                                : content.bookingModal.btnNext[state.language]
                        }
                    />
                </div>
            </div>
        )),
    };
};

export default BookingStepper;
