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

const restcoords = [53.90498385281464, 27.552403201036014];

const Map = () => {
    return (
        <div id='map' className='w-full h-[500px] lg:w-3/5 lg:h-full'>
            <MapContainer
                className='w-full h-full rounded'
                center={[cityCoords.Minsk[0], cityCoords.Minsk[1]]}
                zoom={15}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[restcoords[0], restcoords[1]]}>
                    <Popup>
                        <p>RESTNAME</p>
                        <p>Cuisine</p>
                        <p>WORK TIME</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
