import RegistrLogo from 'components/RegistrLogo';
import UserLogo from 'components/UserLogo';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from 'store/store';
import { CityType } from 'types';
import { content } from 'utils/content';

const links = [
    { id: 0, route: '/', title: content.header.home },
    { id: 1, route: '/restaurants', title: content.header.restaurants },
    { id: 2, route: '/about', title: content.header.about },
];

export const cities = [
    {
        city: {
            en: 'Minsk',
            ru: 'Минск',
        },
    },
    {
        city: {
            en: 'Kazan',
            ru: 'Казань',
        },
    },
];

const Header = () => {
    const { state, dispatch } = useContext(AppContext);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    useEffect(() => {
        if (isBurgerOpen) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    }, [isBurgerOpen]);

    useEffect(() => {
        if (state.theme === 'dark') {
            document.querySelector('html')?.classList.add('dark');
        } else {
            document.querySelector('html')?.classList.remove('dark');
        }
    }, []);

    const openBurger = () => {
        setIsBurgerOpen(true);
    };
    const closeBurger = () => {
        setIsBurgerOpen(false);
    };

    const changeLang = () => {
        if (state.language === 'en') {
            dispatch({ type: 'changeLang', payload: 'ru' });
        } else {
            dispatch({ type: 'changeLang', payload: 'en' });
        }
    };

    const changeCityHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { target } = event;
        console.log('value', target.value);
        const newCity = cities.find((el) => el.city['en'] === target.value);
        console.log(newCity);
        dispatch({ type: 'changeCity', payload: newCity?.city as CityType });
    };

    const changeTheme = () => {
        if (state.theme === 'light') {
            dispatch({ type: 'changeTheme', payload: 'dark' });
            document.querySelector('html')?.classList.add('dark');
        } else {
            dispatch({ type: 'changeTheme', payload: 'light' });
            document.querySelector('html')?.classList.remove('dark');
        }
    };

    return (
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
                            ? 'w-full fixed flex gap-3 top-0 left-0 items-center justify-center bg-smoke-gray dark:bg-zinc-800 flex-col h-screen z-1001 text-4xl'
                            : 'w-full fixed flex top-0 left-full'
                    } font-medium md:text-lg font-medium md:justify-between md:static md:flex-row md:h-auto`}
                >
                    <div className={`flex gap-2.5 items-center ${isBurgerOpen ? 'w-full flex-col' : 'flex-row'}`}>
                        {links.map(({ id, route, title }) => (
                            <li key={id}>
                                <NavLink
                                    className='transition ease-in duration-300 hover:text-corall'
                                    to={route}
                                    onClick={closeBurger}
                                >
                                    {title[state.language]}
                                </NavLink>
                            </li>
                        ))}
                    </div>
                    <div
                        className={`flex flex-col-reverse md:flex-row gap-2.5 items-center ${
                            isBurgerOpen && 'w-full justify-center'
                        }`}
                    >
                        <li className='p-2 rounded-md'>
                            <select
                                className='p-2 text-black outline-none cursor-pointer rounded-md'
                                value={state.currentCity['en']}
                                onChange={changeCityHandler}
                            >
                                {cities.map((el, index) => (
                                    <option key={index} value={el.city['en']}>
                                        {el.city[state.language]}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <div className='flex gap-2.5'>
                            <li
                                className={`w-10 h-10 md:w-8 md:h-8 bg-no-repeat bg-cover cursor-pointer ${
                                    state.language === 'en' ? 'bg-eng' : 'bg-ru'
                                }`}
                                onClick={changeLang}
                            ></li>
                            <li
                                className='w-10 h-10 md:w-8 md:h-8 bg-darkmode dark:bg-lightmode bg-no-repeat bg-cover cursor-pointer'
                                onClick={changeTheme}
                            ></li>
                            {state.user.id ? (
                                <UserLogo closeBurger={closeBurger} />
                            ) : (
                                <RegistrLogo closeBurger={closeBurger} />
                            )}
                        </div>
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
