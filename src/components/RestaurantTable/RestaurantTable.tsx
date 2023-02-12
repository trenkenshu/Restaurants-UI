import { FC, useState } from 'react';

type RestaurantTableProps = {
    dataId: number;
};

const RestaurantTable: FC<RestaurantTableProps> = ({ dataId }) => {
    const [isBooked, setIsBooked] = useState(false);
    const [isUserBooked, setIsUserBooked] = useState(false);
    const [tableId, setTableId] = useState('');

    const getTableId = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        setIsBooked((prev) => !prev);
        console.log('Need to Open Modal', target.dataset.id);
        if (target.dataset.id) {
            setTableId(target.dataset.id);
        }
    };

    return (
        <div
            className={`w-11 h-11 min-[440px]:w-14 min-[440px]:h-14 lg:w-16 lg:h-16 bg-cover bg-no-repeat bg-center ${
                isBooked && isUserBooked
                    ? 'bg-tableCorall cursor-pointer '
                    : isBooked
                    ? 'bg-tableGray cursor-default'
                    : 'bg-tableDark cursor-pointer'
            }`}
            data-id={dataId}
            onClick={(event) => getTableId(event)}
        ></div>
    );
};

export default RestaurantTable;
