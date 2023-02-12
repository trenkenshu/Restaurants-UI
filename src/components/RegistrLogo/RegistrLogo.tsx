import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type RegistrLogoType = {
    closeBurger: () => void;
};

const RegistrLogo: FC<RegistrLogoType> = ({ closeBurger }) => {
    return (
        <li className='w-10 h-10 md:w-8 md:h-8 login' onClick={closeBurger}>
            <Link
                className='block bg-login dark:bg-loginWhite w-full h-full bg-no-repeat bg-cover registrLogo'
                to='/registration'
            ></Link>
        </li>
    );
};

export default RegistrLogo;
