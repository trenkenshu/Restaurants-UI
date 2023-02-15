import { FC, useState } from 'react';

type RestaurantTableProps = {
    dataId: number;
    // getTableId: (event: React.MouseEvent<HTMLDivElement>) => void;
    setTableId: (data: string) => void;
};

const RestaurantTable: FC<RestaurantTableProps> = ({ dataId, setTableId }) => {
    const [isBooked, setIsBooked] = useState(false);
    const [isUserBooked, setIsUserBooked] = useState(false);

    const tableClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        setIsBooked((prev) => !prev);
        console.log('Table id', target.dataset.id);
        if (target.dataset.id) {
            setTableId(target.dataset.id);
        }
    };

    return (
        <div
            className={`w-12 h-12 min-[480px]:w-14 min-[480px]:h-14 lg:w-16 lg:h-16 bg-cover bg-no-repeat bg-center ${
                isBooked && isUserBooked
                    ? 'bg-tableCorall cursor-pointer '
                    : isBooked
                    ? 'bg-tableGray cursor-default'
                    : 'bg-tableDark cursor-pointer'
            }`}
            data-id={dataId}
            onClick={(event) => tableClick(event)}
        ></div>
    );
};

export default RestaurantTable;
