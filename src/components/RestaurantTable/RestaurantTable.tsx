import { useState } from 'react';

// type RestaurantTableProps = {
// }

const RestaurantTable = () => {
    const [isBooked, setIsBooked] = useState(false);
    const [isUserBooked, setIsUserBooked] = useState(false);

    const openBookingModal = () => {
        setIsBooked((prev) => !prev);
        console.log('Need to Open Modal');
    };

    const autoIncrement = () => {
        let n = 0;

        return function () {
            n++;
            return n;
        };
    };
    const increment = autoIncrement();

    return (
        <div
            className={`w-11 h-11 min-[440px]:w-14 min-[440px]:h-14 lg:w-16 lg:h-16 bg-cover bg-no-repeat bg-center cursor-pointer ${
                isBooked && isUserBooked ? 'bg-tableCorall' : isBooked ? 'bg-tableGray' : 'bg-tableDark'
            }`}
            data-id={increment()}
            onClick={openBookingModal}
        ></div>
    );
};

export default RestaurantTable;
