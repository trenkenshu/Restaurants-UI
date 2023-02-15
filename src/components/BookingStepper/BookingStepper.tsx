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
import { IRestaurant } from 'types';
import { isConstructorDeclaration } from 'typescript';
import { content } from 'utils/content';

const steps = {
    en: ['Select date', 'Select time', 'Select table', 'Guest info', 'Finish booking'],
    ru: ['Дата', 'Время', 'Стол', 'О госте', 'Бронь'],
};

type BookingStepperProps = {
    restaurant: IRestaurant;
    closeBookingModal: () => void;
    // date: Date;
    // setDate: (data: Date) => void;
    // setTableId: (data: string) => void;
};

const BookingStepper: FC<BookingStepperProps> = ({ restaurant, closeBookingModal }) => {
    const { state } = useContext(AppContext);
    const [activeStep, setActiveStep] = useState(0);
    const [isStepEnd, setIsStepEnd] = useState(false);

    // states
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [guestAmount, setGuestAmount] = useState(1);
    const [tableId, setTableId] = useState('');

    const timeIntervals = setTimeIntervals(restaurant.workTimeStart, restaurant.workTimeEnd - 2);
    // console.log('time', timeIntervals);

    useEffect(() => {
        if (guestAmount > 0 && tableId.length > 0) {
            setIsStepEnd(true);
        }
    }, [guestAmount, tableId]);

    useEffect(() => {
        if (name.length > 0 && phone.length > 0) {
            setIsStepEnd(true);
        }
    }, [name, phone]);

    useEffect(() => {
        if (activeStep !== steps[state.language].length - 1) {
            setIsStepEnd(false);
        }
    }, [activeStep]);

    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        console.log('name', target.value);
        setName(target.value);
    };
    const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        console.log('phone', target.value);
        setPhone(target.value);
    };
    const guestAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        console.log('guestAmount', target.value);
        setGuestAmount(Number(target.value));
    };

    const handleNext = () => {
        if (activeStep >= 0 && activeStep < steps[state.language].length) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            // setIsStepEnd(false);
        }
        console.log(activeStep);
        if (activeStep === steps[state.language].length - 1) {
            console.log('Завершили бронь');
            // обнуляем данные.
            setTimeout(() => {
                console.log('close modal');
                closeBookingModal();
                handleReset();
            }, 2000);
        }
    };

    const handleBack = () => {
        console.log(activeStep);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setDate(new Date());
        setTime('');
        setPhone('');
        setGuestAmount(1);
        setTableId('');
    };
    // const chooseDate = () => {
    //     setDate;
    // };
    const chooseTime = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        console.log(target.dataset.time);
        document.querySelectorAll('.timeblock').forEach((el) => el.classList.remove('active'));
        target.classList.add('active');
        target.dataset.time && setTime(target.dataset.time);
        setIsStepEnd(true);
    };

    // const checkGuestsAmountAndTable = () => {
    //     if (guestAmount > 0 && tableId.length > 0) {
    //         setIsStepEnd(true);
    //     }
    // };

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
                                value={date}
                                onChange={setDate}
                                minDate={new Date()}
                                locale={state.language}
                                onClickDay={() => setIsStepEnd(true)}
                            />
                            <div className='flex flex-col min-[400px]:flex-row gap-1 text-center'>
                                <p className='font-bold'>{content.bookingModal.selectedDate[state.language]}:</p>
                                <p>{getCalendarDate(date, state.language)}</p>
                            </div>
                        </div>
                    )}
                    {activeStep === 1 && (
                        <div className='flex flex-col items-center gap-3'>
                            <div className='font-bold'>{content.bookingModal.bookingTime[state.language]}</div>
                            <div className='flex gap-1 justify-center flex-wrap w-full min-[480px]:w-10/12 sm:w-8/12'>
                                {timeIntervals.map((el, index) => (
                                    <div
                                        className='timeblock w-16 h-16 min-[400px]:w-20 min-[400px]:h-20 min-[680px]:w-24  min-[680px]:h-24 rounded bg-gray-400 flex items-center justify-center cursor-pointer'
                                        key={index}
                                        data-time={`${el}.00`}
                                        onClick={chooseTime}
                                    >
                                        {el}.00
                                    </div>
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
                                        className='w-10 text-center border border-zinc-800 rounded'
                                        type='number'
                                        id='guestsNum'
                                        value={guestAmount}
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
                            <RestaurantScheme setTableId={setTableId} />
                        </>
                    )}
                    {activeStep === 3 && (
                        <div className='flex w-8/12 flex-col gap-3'>
                            <div className='flex flex-col'>
                                <p className='font-semibold'>{content.bookingModal.name[state.language]}</p>
                                <input
                                    className='w-full pl-1 border border-zinc-800 rounded'
                                    type='text'
                                    onChange={nameHandler}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-semibold'>{content.bookingModal.phone[state.language]}</p>
                                <input
                                    className='w-full pl-1 border border-zinc-800 rounded'
                                    type='text'
                                    onChange={phoneHandler}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-semibold'>{content.bookingModal.comment[state.language]}</p>
                                <textarea
                                    className='border border-zinc-800 dark:border-smoke-gray rounded pl-1'
                                    name='textarea'
                                    id='comment'
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
                                <p className='font-semibold'>{name}</p>
                            </div>
                            <div className='w-full flex justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.phone[state.language]}: </p>
                                <p className='font-semibold'>{phone}</p>
                            </div>
                            <div className='w-full flex flex-col min-[400px]:flex-row justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.date[state.language]}:</p>
                                <p className='font-semibold self-end min-[400px]:self-auto'>
                                    {getCalendarDate(date, state.language)}
                                </p>
                            </div>
                            <div className='w-full flex justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.time[state.language]}:</p>
                                <p className='font-semibold'>{time}</p>
                            </div>
                            <div className='w-full flex justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.table[state.language]}:</p>
                                <p className='font-semibold'>{tableId}</p>
                            </div>
                            <div className='w-full flex justify-between text-lg sm:text-2xl'>
                                <p className=''>{content.bookingModal.guestsNumber[state.language]}:</p>
                                <p className='font-semibold'>{guestAmount}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex justify-center gap-3 p-2'>
                    <button
                        className='py-1 px-2 text-xl border border-zinc-800 dark:border-corall rounded disabled:bg-gray-400 hover:disabled:bg-gray-400 hover:disabled:text-zinc-800 transition hover:bg-corall hover:text-white'
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        {content.bookingModal.btnPrev[state.language]}
                    </button>
                    <button
                        className='py-1 px-2 text-lg sm:text-xl border border-zinc-800 dark:border-corall rounded transition disabled:bg-gray-400 hover:disabled:bg-gray-400 hover:disabled:text-zinc-800 hover:bg-corall hover:text-white'
                        onClick={handleNext}
                        disabled={!isStepEnd}
                    >
                        {activeStep === steps[state.language].length - 1
                            ? content.bookingModal.btnBook[state.language]
                            : content.bookingModal.btnNext[state.language]}
                    </button>
                </div>
            </div>
        )),
    };
};

export default BookingStepper;
