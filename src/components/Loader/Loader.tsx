import React, { FC, useState } from 'react';

export const Loader: FC = () => {
    const [loaded, setLoaded] = useState(false);

    window.onload = () => {
        setLoaded(true);
    };

    return (
        <div
        // style={{
        //     zIndex: loaded ? '-1' : '10000',
        //     opacity: loaded ? '0' : '1',
        //     transition: 'all 0.8s',
        //     width: '100vw',
        //     height: '100vh',
        //     position: 'fixed',
        //     left: 0,
        //     top: 0,
        //     background: '#111',
        // }}
        ></div>
    );
};

export default Loader;
