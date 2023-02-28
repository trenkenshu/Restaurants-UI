import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type UserLogoType = {
    closeBurger: () => void;
};
const UserLogo: FC<UserLogoType> = ({ closeBurger }) => {
    return (
        <li className='w-10 h-10 md:w-8 md:h-8 user-login' onClick={closeBurger}>
            <Link
                className='block bg-userIcon dark:bg-userIconWhite w-full h-full bg-no-repeat bg-cover registrLogo'
                to='/userpage'
            ></Link>
        </li>
    );
};

export default UserLogo;
