import React from 'react';
import { Link } from 'react-router-dom';

const RegistrLogo = () => {
    return (
        <li className='w-8 h-8 login'>
            <Link
                className='block bg-login dark:bg-loginWhite w-full h-full bg-no-repeat bg-cover registrLogo'
                to='/registration'
            ></Link>
        </li>
    );
};

export default RegistrLogo;
