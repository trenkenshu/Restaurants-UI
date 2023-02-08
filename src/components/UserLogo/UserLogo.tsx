import React from 'react';
import { Link } from 'react-router-dom';

const UserLogo = () => {
    return (
        <li className='w-8 h-8 user-login'>
            <Link
                className='block bg-userIcon dark:bg-userIconWhite w-full h-full bg-no-repeat bg-cover registrLogo'
                to='/userpage'
            ></Link>
        </li>
    );
};

export default UserLogo;
