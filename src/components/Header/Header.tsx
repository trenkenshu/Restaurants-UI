import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const links = [
    { id: 0, route: '/', title: 'Home' },
    { id: 1, route: '/restaurants', title: 'Restaurants' },
    { id: 2, route: '/about', title: 'About us' },
];
const cities = [
    { value: 'minsk', label: 'Minsk' },
    { value: 'kazan', label: 'Kazan' },
];

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    useEffect(() => {
        if (isBurgerOpen) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    }, [isBurgerOpen]);

    const openBurger = () => {
        setIsBurgerOpen(true);
    };
    const closeBurger = () => {
        setIsBurgerOpen(false);
    };

    return (
        // <header id='header' className='h-17 border-b border-b-gray-500 dark:border-b-corall'>
        //     <div className='flex justify-between items-center px-5 py-2.5'>
        //         <ul className='flex gap-3 text-lg font-medium'>
        //             {links.map(({ id, route, title }) => (
        //                 <li key={id}>
        //                     <Link className='transition ease-in duration-300 hover:text-corall' to={route}>
        //                         {title}
        //                     </Link>
        //                 </li>
        //             ))}
        //         </ul>
        //         <div className='flex'>
        //                 <Link className='font-logo text-5xl' to='/'>
        //                     RaViOle
        //                 </Link>
        //         </div>
        //         <div className='flex gap-2.5 items-center'>
        //             <div className='text-lg font-medium cursor-pointer transition ease-in duration-300 hover:text-corall'>
        //                 Minsk
        //             </div>
        //             <div className='bg-eng w-8 h-8 bg-no-repeat bg-cover cursor-pointer'></div>
        //             <div className='bg-darkmode dark:bg-lightmode w-8 h-8 bg-no-repeat bg-cover cursor-pointer'></div>
        //             <a href='' className='bg-login w-8 h-8 bg-no-repeat bg-cover'></a>
        //         </div>
        //     </div>
        // </header>
        <header id='header' className='h-17 border-b border-b-gray-500 dark:border-b-corall'>
            <div className='relative flex justify-center items-center px-5 h-17'>
                <div className='absolute top-3 left-5 md:left-1/2 md:-translate-x-2/4'>
                    <Link className='font-logo text-5xl' to='/'>
                        RaViOle
                    </Link>
                </div>
                <ul
                    className={` ${
                        isBurgerOpen
                            ? 'w-full fixed flex gap-10 top-0 left-0 items-center justify-center bg-smoke-gray dark:bg-zinc-800 flex-col h-screen z-1001 text-4xl'
                            : 'w-full fixed flex top-0 left-full'
                    } font-medium md:text-lg font-medium md:justify-between md:gap-3 md:static md:flex-row md:h-auto`}
                >
                    <div className={`flex gap-2.5 items-center ${isBurgerOpen ? 'w-full flex-col' : 'flex-row'}`}>
                        {links.map(({ id, route, title }) => (
                            <li key={id}>
                                <Link
                                    className='transition ease-in duration-300 hover:text-corall'
                                    to={route}
                                    onClick={closeBurger}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div className={`flex gap-2.5 flex-row items-center ${isBurgerOpen && 'w-full justify-center'}`}>
                        <li
                            className={`cursor-pointer transition ease-in duration-300 z-1001 ${
                                isBurgerOpen && 'mr-10'
                            }`}
                        >
                            <Select
                                defaultValue={cities[0]}
                                name='city'
                                options={cities}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary: 'black',
                                    },
                                })}
                            />
                        </li>
                        <li className='bg-eng w-8 h-8 bg-no-repeat bg-cover cursor-pointer'></li>
                        <li className='bg-darkmode dark:bg-lightmode w-8 h-8 bg-no-repeat bg-cover cursor-pointer'></li>
                        <li className='w-8 h-8'>
                            <a
                                href=''
                                className='block bg-login dark:bg-loginWhite w-full h-full bg-no-repeat bg-cover'
                            ></a>
                        </li>
                        <div
                            className='bg-closemenu dark:bg-closemenuWhite w-8 h-8 bg-no-repeat bg-cover cursor-pointer absolute top-5 right-5 md:hidden'
                            onClick={closeBurger}
                        ></div>
                    </div>
                </ul>
                <div
                    className='bg-burgermenu dark:bg-burgermenuWhite w-8 h-8 bg-no-repeat bg-cover cursor-pointer ml-auto md:hidden'
                    onClick={openBurger}
                ></div>
            </div>
        </header>
    );
};

export default Header;
