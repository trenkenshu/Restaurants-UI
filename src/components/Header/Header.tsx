import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';
import { AppContext } from 'store/store';
import { CityType } from 'types';
import { content } from 'utils/content';

const links = [
    { id: 0, route: '/', title: content.header.home },
    { id: 1, route: '/restaurants', title: content.header.restaurants },
    { id: 2, route: '/about', title: content.header.about },
];

// const cities = [
//     {
//         value: 'Minsk',
//         label: {
//             en: 'Minsk',
//             ru: 'Минск',
//         },
//     },
//     {
//         value: 'Kazan',
//         label: {
//             en: 'Kazan',
//             ru: 'Казань',
//         },
//     },
// ];
const cities = [
    {
        label: {
            en: 'Minsk',
            ru: 'Минск',
        },
    },
    {
        label: {
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
        const newCity = cities.find((el) => el.label['en'] === target.value);
        console.log(newCity);
        dispatch({ type: 'changeCity', payload: newCity?.label as CityType });
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
                                    {title[state.language]}
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div className={`flex gap-2.5 flex-row items-center ${isBurgerOpen && 'w-full justify-center'}`}>
                        <li
                            className={`p-2 rounded-md border-black cursor-pointer transition ease-in duration-300 z-1001 ${
                                isBurgerOpen && 'mr-10'
                            }`}
                        >
                            {/* <Select
                                className='text-black'
                                // defaultValue={cities[state.language][0]}
                                value={{ value: state.currentCity, label: state.currentCity }}
                                name='city'
                                options={cities[state.language]}
                                onChange={(event) => changeCityHandler(event)}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary: 'black',
                                    },
                                })}
                            /> */}
                            <select
                                className='p-2 text-black outline-none rounded-md'
                                defaultValue={state.currentCity['en']}
                                onChange={changeCityHandler}
                            >
                                {cities.map((el, index) => (
                                    <option
                                        key={index}
                                        value={el.label['en']}
                                        // selected={state.currentCity['en'] === el.label['en']}
                                    >
                                        {el.label[state.language]}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li
                            className={`w-8 h-8 bg-no-repeat bg-cover cursor-pointer ${
                                state.language === 'en' ? 'bg-eng' : 'bg-ru'
                            }`}
                            onClick={changeLang}
                        ></li>
                        <li
                            className='bg-darkmode dark:bg-lightmode w-8 h-8 bg-no-repeat bg-cover cursor-pointer'
                            onClick={changeTheme}
                        ></li>
                        {/* <li className='w-8 h-8'>
                            <a
                                href=''
                                className='block bg-login dark:bg-loginWhite w-full h-full bg-no-repeat bg-cover'
                            ></a>
                        </li> */}
                        <li className='w-8 h-8'>
                            <Link
                                className='block bg-login dark:bg-loginWhite w-full h-full bg-no-repeat bg-cover'
                                to='/userpage'
                            ></Link>
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
