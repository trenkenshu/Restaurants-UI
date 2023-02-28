import React, { FC, useContext, useEffect } from 'react';
import { AppContext } from 'store/store';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { CoordsType } from 'components/Map/Map';
import { IRestaurant } from 'types';

type RestaurantMenuPropsType = {
    restaurant: IRestaurant;
};

const RestaurantMap: FC<RestaurantMenuPropsType> = ({ restaurant }) => {
    const { state } = useContext(AppContext);

    const MapRecenter = ({ coords }: CoordsType) => {
        const map = useMap();
        useEffect(() => {
            map.setView(coords);
        }, [state.currentCity]);
        return null;
    };

    return (
        <div className=' w-full h-[400px]'>
            <MapContainer
                className='w-full h-full rounded'
                center={restaurant.coordinates}
                zoom={17}
                scrollWheelZoom={false}
            >
                <MapRecenter coords={restaurant.coordinates} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                    // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
                />
                <Marker key={restaurant.id} position={restaurant.coordinates}>
                    <Popup>
                        <p className='font-bold text-base text-center'>{restaurant.name.toUpperCase()}</p>
                        <p className='text-center'>
                            {restaurant.parsedTranslation &&
                                restaurant.parsedTranslation[state.language].cuisineType.join(' ')}
                        </p>
                        <p className='text-center'>
                            {restaurant.workTimeStart}.00 - {restaurant.workTimeEnd}.00
                        </p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default RestaurantMap;
