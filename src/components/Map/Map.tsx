import ButtonBlack from 'components/ButtonBlack';
import React, { FC, useContext } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { AppContext } from 'store/store';
import { IRestaurant } from 'types';
import { content } from 'utils/content';

type cityCoordsType = {
    Minsk: number[];
    Kazan: number[];
};
const cityCoords: cityCoordsType = {
    Minsk: [53.90060134067095, 27.5589730572721],
    Kazan: [55.79945218190242, 49.10599066893499],
};

// type MapType = {
//     restaurants: IRestaurant[];
// };

// const lang = 'en';

const Map: FC = () => {
    const { state } = useContext(AppContext);
    const lang = state.language === 'en' ? 'en' : 'ru';

    return (
        <div id='map' className='w-full h-[500px] lg:w-3/5 lg:h-full'>
            <MapContainer
                className='w-full h-full rounded'
                center={[cityCoords.Minsk[0], cityCoords.Minsk[1]]}
                zoom={15}
                scrollWheelZoom={true}
            >
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
                                    restaurant.parsedTranslation[lang].cuisineType.join(' ')}
                            </p>
                            <p className='text-center'>
                                {restaurant.workTimeStart}.00 - {restaurant.workTimeEnd}.00
                            </p>
                            <ButtonBlack width='w-full' height='h-7' buttonText={content.common.details[lang]} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
