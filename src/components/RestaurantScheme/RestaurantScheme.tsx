import RestaurantTable from 'components/RestaurantTable';
import { useState } from 'react';

const tableScheme = [
    ['table', 'empty', 'table', 'table', 'empty', 'table'],
    ['table', 'empty', 'bar', 'bar', 'empty', 'table'],
    ['table', 'empty', 'bar', 'bar', 'empty', 'table'],
    ['table', 'empty', 'table', 'table', 'empty', 'table'],
];
// const tableScheme2 = [
//     ['table', 'empty', 'table', 'table', 'empty', 'table'],
//     ['table', 'empty', 'table', 'table', 'empty', 'table'],
//     ['bar', 'bar', 'empty', 'table', 'empty', 'table'],
//     ['bar', 'bar', 'empty', 'table', 'empty', 'table'],
// ];

const RestaurantScheme = () => {
    const [seats, setSeats] = useState(tableScheme.flatMap((seat) => seat));
    // const [tableId, setTableId] = useState(0);
    // const scheme = tableScheme.flatMap((seat) => seat);
    // console.log(scheme.flatMap((seat) => seat));
    const numOfTables = seats.filter((el) => el === 'table');
    const autoIncrement = () => {
        let n = 0;
        return function () {
            n++;
            return n;
        };
    };
    const increment = autoIncrement();

    // console.log('numOfTables', numOfTables.length);
    return (
        <div className='relative w-[300px] h-[300px] min-[440px]:w-[420px] min-[440px]:h-[400px] lg:w-[500px] lg:h-[400px] grid grid-cols-6 grid-rows-4 justify-items-center items-center border border-black bg-schemeFloor rounded'>
            <div className='absolute top-1/2 left-1/2 text-white text-4xl min-[440px]:text-5xl lg:text-6xl -translate-x-2/4 -translate-y-2/4 font-logo'>
                Bar
            </div>
            {seats.map((seat, index) => {
                if (seat === 'table') {
                    return <RestaurantTable dataId={increment()} key={index} />;
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
