import RestaurantTable from 'components/RestaurantTable';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { IRestaurant, IStepper } from 'types';

const tableScheme = [
    ['table', 'empty', 'table', 'table', 'empty', 'table'],
    ['table', 'empty', 'bar', 'bar', 'empty', 'table'],
    ['table', 'empty', 'bar', 'bar', 'empty', 'table'],
    ['table', 'empty', 'table', 'table', 'empty', 'table'],
];

type RestaurantSchemeType = {
    // getTableId: (event: React.MouseEvent<HTMLDivElement>) => void;
    restaurant: IRestaurant;
    stepperState: IStepper;
    setStepperState: Dispatch<SetStateAction<IStepper>>;
};
const RestaurantScheme: FC<RestaurantSchemeType> = ({ stepperState, setStepperState, restaurant }) => {
    // const [seats, setSeats] = useState(tableScheme.flatMap((seat) => seat));
    const seats = tableScheme.flatMap((seat) => seat);

    const autoIncrement = () => {
        let n = 0;
        return function () {
            n++;
            return n;
        };
    };
    const tableIdIncrement = autoIncrement();
    const idIncrement = autoIncrement();

    return (
        <div className='relative w-[280px] h-[280px] min-[400px]:w-[350px] min-[400px]:h-[400px] min-[480px]:w-[400px] min-[480px]:h-[400px] lg:w-[500px] lg:h-[400px] grid grid-cols-6 grid-rows-4 justify-items-center items-center border border-black bg-schemeFloor rounded'>
            <div className='absolute top-1/2 left-1/2 text-white text-4xl min-[480px]:text-5xl lg:text-6xl -translate-x-2/4 -translate-y-2/4 font-logo'>
                Bar
            </div>
            {seats.map((seat, index) => {
                if (seat === 'table') {
                    return (
                        <RestaurantTable
                            dataId={tableIdIncrement()}
                            id={idIncrement()}
                            restaurant={restaurant}
                            stepperState={stepperState}
                            setStepperState={setStepperState}
                            key={index}
                        />
                    );
                }
                if (seat === 'bar') {
                    return <div className='w-full h-full bg-zinc-800' key={index}></div>;
                }
                if (seat === 'empty') {
                    return <div key={index}></div>;
                }
            })}
        </div>
    );
};

export default RestaurantScheme;
