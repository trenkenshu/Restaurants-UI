import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    { id: 0, route: '/', title: 'Home' },
    { id: 1, route: '/restaurants', title: 'Restaurants' },
    { id: 2, route: '/about', title: 'About us' },
];

const Header = () => {
    return (
        <header className='border-b border-b-gray-500 dark:border-b-corall'>
            <div className='flex justify-between items-center px-5 py-2.5'>
                <ul className='flex gap-3 text-lg font-medium'>
                    {links.map(({ id, route, title }) => (
                        <li key={id}>
                            <Link className='transition ease-in duration-300 hover:text-corall' to={route}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2.5'>
                    <div>
                        <Link className='font-logo text-5xl' to='/'>
                            RaViOle
                        </Link>
                    </div>
                </div>
                <div className='flex gap-2.5 items-center'>
                    <div className='text-lg font-medium cursor-pointer transition ease-in duration-300 hover:text-corall'>
                        Minsk
                    </div>
                    <div className='bg-eng w-8 h-8 bg-no-repeat bg-cover cursor-pointer'></div>
                    <div className='bg-darkmode dark:bg-lightmode w-8 h-8 bg-no-repeat bg-cover cursor-pointer'></div>
                    <a href='' className='bg-login w-8 h-8 bg-no-repeat bg-cover'></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
