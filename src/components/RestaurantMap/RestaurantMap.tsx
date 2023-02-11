import React, { useContext, useEffect } from 'react';
import { AppContext } from 'store/store';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import ButtonBlack from 'components/ButtonBlack';
import { content } from 'utils/content';
import { CoordsType } from 'components/Map/Map';

const RestaurantMap = () => {
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
            {/* w-[calc(100%-20px)] */}
            <MapContainer
                className='w-full h-full rounded'
                center={state.currentRestaurant.coordinates}
                zoom={15}
                scrollWheelZoom={false}
            >
                <MapRecenter coords={state.currentRestaurant.coordinates} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                    // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
                />
                <Marker key={state.currentRestaurant.id} position={state.currentRestaurant.coordinates}>
                    <Popup>
                        <p className='font-bold text-base text-center'>{state.currentRestaurant.name.toUpperCase()}</p>
                        <p className='text-center'>
                            {state.currentRestaurant.parsedTranslation &&
                                state.currentRestaurant.parsedTranslation[state.language].cuisineType.join(' ')}
                        </p>
                        <p className='text-center'>
                            {state.currentRestaurant.workTimeStart}.00 - {state.currentRestaurant.workTimeEnd}.00
                        </p>
                        <ButtonBlack width='w-full' height='h-7' buttonText={content.common.details[state.language]} />
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default RestaurantMap;
