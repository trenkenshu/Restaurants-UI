import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

type cityCoordsType = {
    Minsk: number[];
    Kazan: number[];
};
const cityCoords: cityCoordsType = {
    Minsk: [53.90060134067095, 27.5589730572721],
    Kazan: [55.79945218190242, 49.10599066893499],
};

const Map = () => {
    return (
        <MapContainer
            className='w-3/5 h-full rounded'
            center={[cityCoords.Minsk[0], cityCoords.Minsk[1]]}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[cityCoords.Minsk[0], cityCoords.Minsk[1]]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
