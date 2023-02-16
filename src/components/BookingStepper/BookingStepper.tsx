import React, { FC, useContext, useEffect, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import RestaurantScheme from 'components/RestaurantScheme';
import Calendar from 'react-calendar';
import './Calendar.css';
import { AppContext } from 'store/store';
import ButtonBlack from 'components/ButtonBlack';
import getCalendarDate from 'utils/functions/getCalendarDate';
import setTimeIntervals from 'utils/functions/setTimeIntervals';
import { ICreateBooking, IRestaurant } from 'types';
import { isConstructorDeclaration } from 'typescript';
import { content } from 'utils/content';
import { createBooking, getRestaurant, getUser } from 'api/api';
import { emptyStepper } from 'utils/constants';
import checkActiveTime from 'utils/functions/checkActiveTime';

const steps = {
    en: ['Select date', 'Select time', 'Select table', 'Guest info', 'Finish booking'],
    ru: ['Дата', 'Время', 'Стол', 'О госте', 'Бронь'],
};

type BookingStepperProps = {
    restaurant: IRestaurant;
    setRestaurant: (data: IRestaurant) => void;
    closeBookingModal: () => void;
    // date: Date;
    // setDate: (data: Date) => void;
    // setTableId: (data: string) => void;
};

const BookingStepper: FC<BookingStepperProps> = ({ restaurant, closeBookingModal, setRestaurant }) => {
    const { state, dispatch } = useContext(AppContext);
    const [activeStep, setActiveStep] = useState(0);
    const [isStepEnd, setIsStepEnd] = useState(false);
    const [stepperState, setStepperState] = useState(emptyStepper);
    // setStepperState(prev => {...prev, stepTwo: '9:00')

    // states
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [guestAmount, setGuestAmount] = useState(1);
    const [tableId, setTableId] = useState('');

    const timeIntervals = setTimeIntervals(restaurant.workTimeStart, restaurant.workTimeEnd - 2);
    // console.log('time', timeIntervals);

    const checkStepFour = () => {
        if (stepperState.stepFour.name.length > 2 && stepperState.stepFour.phone.length > 9) {
            console.log('12412');
            setStepperState((prev) => {
                return {
                    ...prev,
                    stepsFinished: prev.stepsFinished.map((el) => (el = true)),
                };
            });
        }
    };

    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        console.log('name', target.value);
        // setName(target.value);
        setStepperState((prev) => {
            return {
                ...prev,
                stepFour: { ...prev.stepFour, name: target.value },
            };
        });
    };
    const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        console.log('phone', target.value);
        // setPhone(target.value);
        setStepperState((prev) => {
            return {
                ...prev,
                stepFour: { ...prev.stepFour, phone: target.value },
            };
        });
    };
    const guestAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        console.log('guestAmount', target.value);
        // setGuestAmount(Number(target.value));
        setStepperState((prev) => {
            return {
                ...prev,
                stepThree: { ...prev.stepThree, guestNumber: Number(target.value) },
            };
        });
    };

    const handleNext = () => {
        if (activeStep >= 0 && activeStep < steps[state.language].length) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            // setIsStepEnd(false);
        }
        console.log(activeStep);
        if (activeStep === steps[state.language].length - 1) {
            console.log('Завершили бронь');
            const dateOfBooking = new Date(`${stepperState.stepOne.toDateString()} ${stepperState.stepTwo}:00:00`);
            console.log(dateOfBooking);
            const bookingBody = {
                clientId: state.user.id,
                cafeId: restaurant.id,
                tableId: Number(stepperState.stepThree.tableId),
                date: dateOfBooking,
                duration: 1,
                guestName: stepperState.stepFour.name,
                guestPhone: stepperState.stepFour.phone,
                guestsAmount: stepperState.stepThree.guestNumber,
            };
            console.log('bookingBody', bookingBody);
            makeReservation(bookingBody);
            // обнуляем данные.
            setTimeout(() => {
                console.log('close modal');
                closeBookingModal();
                handleReset();
            }, 1000);
        }
    };

    const handleBack = () => {
        console.log('back', stepperState.stepsFinished, activeStep);
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
            // console.log(new Date(booking.date).getTime() - dateOfBooking.getTime());
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
            };
        });
        console.log(stepperState.stepsFinished);
    };

    const makeReservation = (body: ICreateBooking) => {
        createBooking(body).then(() => {
            getUser(state.user.id).then((updatedUser) => {
                console.log('NEWUSER', updatedUser);
                dispatch({
                    type: 'updateUser',
                    payload: updatedUser,
                });
            });
            getRestaurant(restaurant.id).then((restaurant) => {
                console.log('NEWrestaurant', restaurant);
                restaurant.parsedTranslation = JSON.parse(restaurant.translation);
                setRestaurant(restaurant);
                // dispatch({
                //     type: 'getRestaurant',
                //     payload: restaurant,
                // });
            });
        });
    };

    return {
        ...(activeStep === steps[state.language].length ? (
            <div className='py-6 text-4xl'>{content.bookingModal.finishBooking[state.language]}</div>
        ) : (
            <div className='flex flex-col w-full min-h-[560px] min-[400px]:min-h-[640px] justify-between p-2'>
                <div className='flex flex-col gap-5'>
                    <div className='text-center text-4xl'>
                        {activeStep === 0 && steps[state.language][0]}
                        {activeStep === 1 && steps[state.language][1]}
                        {activeStep === 2 && steps[state.language][2]}
                        {activeStep === 3 && steps[state.language][3]}
                        {activeStep === 4 && steps[state.language][4]}
                    </div>
                    <Stepper activeStep={activeStep} alternativeLabel>
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
                                <div className='flex gap-1'>
                                    <label className='whitespace-nowrap' htmlFor='guestsNum'>
                                        {content.bookingModal.guestsNumber[state.language]}
                                    </label>
                                    <input
                                        className='w-10 text-center text-zinc-800 border border-zinc-800 rounded focus:border-corall focus:outline-none'
                                        type='number'
                                        id='guestsNum'
                                        value={stepperState.stepThree.guestNumber}
                                        min={1}
                                        max={4}
                                        maxLength={9}
                                        onChange={guestAmountHandler}
                                    />
                                </div>
                                <p className='text-zinc-400 text-sm'>
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
                            <div className='flex flex-col'>
                                <p className='font-semibold'>{content.bookingModal.name[state.language]}</p>
                                <input
                                    className='w-full pl-1 text-zinc-800 border border-zinc-800 rounded focus:border-corall focus:outline-none'
                                    type='text'
                                    value={stepperState.stepFour.name}
                                    placeholder={content.bookingModal.namePlaceholder[state.language]}
                                    onChange={(event) => {
                                        nameHandler(event);
                                        checkStepFour();
                                    }}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-semibold'>{content.bookingModal.phone[state.language]}</p>
                                <input
                                    className='w-full pl-1 text-zinc-800 border border-zinc-800 rounded focus:border-corall focus:outline-none'
                                    type='text'
                                    value={stepperState.stepFour.phone}
                                    placeholder={content.bookingModal.phonePlaceholder[state.language]}
                                    onChange={(event) => {
                                        phoneHandler(event);
                                        checkStepFour();
                                    }}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-semibold'>{content.bookingModal.comment[state.language]}</p>
                                <textarea
                                    className='text-zinc-800 border border-zinc-800 dark:border-smoke-gray rounded pl-1 focus:border-corall focus:outline-none resize-none '
                                    name='textarea'
                                    id='comment'
                                    placeholder={content.bookingModal.commentPlaceholder[state.language]}
                                    defaultValue={''}
                                    cols={10}
                                    rows={8}
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
                        width='w-32'
                        height='h-10'
                        fontsize='text-lg'
                        buttonText={content.bookingModal.btnPrev[state.language]}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    />
                    <ButtonBlack
                        width='w-32'
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
