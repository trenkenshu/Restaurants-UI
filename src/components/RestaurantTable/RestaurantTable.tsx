import { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react';
import { AppContext } from 'store/store';
import { IRestaurant, IStepper } from 'types';

type RestaurantTableProps = {
    dataId: number;
    // getTableId: (event: React.MouseEvent<HTMLDivElement>) => void;
    id: number;
    restaurant: IRestaurant;
    stepperState: IStepper;
    setStepperState: Dispatch<SetStateAction<IStepper>>;
};

const RestaurantTable: FC<RestaurantTableProps> = ({ dataId, setStepperState, stepperState, restaurant, id }) => {
    const { state } = useContext(AppContext);
    const [isBooked, setIsBooked] = useState(false);
    const [isUserBooked, setIsUserBooked] = useState(false);
    // const isBooked = stepperState.reservedTables.includes(String(dataId));
    // const isUserBooked = state.user.bookings.some((el) => {
    //     const bookedTime = String(new Date(el.date).getHours());
    //     if (restaurant.id === el.cafeId && bookedTime === stepperState.stepTwo) {
    //         // console.log(`userBOoking date ${restaurant.name}`, new Date(el.date).getHours());
    //         return el.tableId === dataId;
    //     }
    // });
    useEffect(() => {
        // console.log('useffect rest TAble', stepperState.reservedTables);
        const booked = stepperState.reservedTables.includes(String(dataId));
        const userBooked = state.user.bookings.some((el) => {
            const bookedTime = String(new Date(el.date).getHours());
            if (restaurant.id === el.cafeId && bookedTime === stepperState.stepTwo) {
                return el.tableId === dataId;
            }
        });
        setIsBooked(booked);
        setIsUserBooked(userBooked);
    }, [stepperState]);
    // console.log(`table${dataId}`, isBooked, 'userbooked', isUserBooked);

    const tableClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        if (!isBooked && !isUserBooked) {
            document.querySelectorAll('.singleTable').forEach((table) => {
                // console.log('tables', stepperState.reservedTables.includes(table.id));
                if (!stepperState.reservedTables.includes(table.id)) {
                    // console.log('inner');
                    table.classList.remove('bg-tableCorall');
                    table.classList.add('bg-tableDark');
                }
            });
            target.classList.remove('bg-tableDark');
            target.classList.add('bg-tableCorall');
        }
        const tableNumber = target.dataset.id;
        console.log('Table id', tableNumber);
        if (tableNumber) {
            setStepperState((prev) => {
                return {
                    ...prev,
                    stepsFinished: prev.stepsFinished.map((el, index) => (index <= 2 ? (el = true) : (el = false))),
                    stepThree: { ...prev.stepThree, tableId: tableNumber },
                };
            });
        }
    };

    return (
        <div
            className={`singleTable relative w-12 h-12 min-[480px]:w-14 min-[480px]:h-14 lg:w-16 lg:h-16 bg-cover bg-no-repeat bg-center cursor-pointer ${
                isBooked && isUserBooked
                    ? 'bg-tableCorall'
                    : isBooked
                    ? 'bg-tableGray cursor-default'
                    : stepperState.stepThree.tableId === String(dataId)
                    ? 'bg-tableCorall'
                    : 'bg-tableDark'
            }`}
            data-id={dataId}
            id={String(id)}
            onClick={(event) => tableClick(event)}
        >
            {isBooked && isUserBooked && (
                <div className='absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-7 h-7 bg-userReserved bg-no-repeat bg-center bg-cover'></div>
            )}
        </div>
    );
};

export default RestaurantTable;
