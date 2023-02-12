import ButtonBlack from 'components/ButtonBlack';
import React, { FC, useContext, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'store/store';
import { content } from 'utils/content';

interface cityCoordsType extends Record<string, number[]> {
    Minsk: number[];
    Kazan: number[];
}
const cityCoords: cityCoordsType = {
    Minsk: [53.90060134067095, 27.5589730572721],
    Kazan: [55.79945218190242, 49.10599066893499],
};

export type CoordsType = {
    coords: [number, number];
};

const Map: FC = () => {
    const { state } = useContext(AppContext);
    const navigate = useNavigate();

    const MapRecenter = ({ coords }: CoordsType) => {
        const map = useMap();
        useEffect(() => {
            map.setView(coords);
        }, [state.currentCity]);
        return null;
    };

    return (
        <div id='map' className='w-full h-[500px] lg:w-3/5 lg:h-full'>
            <MapContainer
                className='w-full h-full rounded'
                center={[cityCoords[state.currentCity['en']][0], cityCoords[state.currentCity['en']][1]]}
                zoom={13}
                scrollWheelZoom={true}
            >
                <MapRecenter
                    coords={[cityCoords[state.currentCity['en']][0], cityCoords[state.currentCity['en']][1]]}
                />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                    // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
                />
                {state.restaurants.map((restaurant) => (
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
                            <ButtonBlack
                                width='w-full'
                                height='h-7'
                                buttonText={content.common.details[state.language]}
                                onClick={() => navigate(`/restaurants/${restaurant.id}`)}
                            />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
