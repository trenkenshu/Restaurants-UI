import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    { id: 0, route: '/', title: 'Home' },
    { id: 1, route: '/restaurants', title: 'Restaurants' },
    { id: 2, route: '/about', title: 'About us' },
];

const Header = () => {
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
                <ul className='w-full fixed top-0 left-full md:relative md:left-0 flex justify-between gap-3 text-lg font-medium'>
                    <div className='flex gap-2.5'>
                        {links.map(({ id, route, title }) => (
                            <li key={id}>
                                <Link className='transition ease-in duration-300 hover:text-corall' to={route}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div className='flex gap-2.5'>
                        <li className='text-lg font-medium cursor-pointer transition ease-in duration-300 hover:text-corall'>
                            Minsk
                        </li>
                        <li className='bg-eng w-8 h-8 bg-no-repeat bg-cover cursor-pointer'></li>
                        <li className='bg-darkmode dark:bg-lightmode w-8 h-8 bg-no-repeat bg-cover cursor-pointer'></li>
                        <li className='w-8 h-8'>
                            <a href='' className='block bg-login w-full h-full bg-no-repeat bg-cover'></a>
                        </li>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default Header;
