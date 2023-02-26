import React, { useContext } from 'react';
import { AppContext } from 'store/store';
import participants from 'utils/participants';

const Footer = () => {
    const { state } = useContext(AppContext);

    return (
        <footer id='footer' className='h-54 md:h-15 bg-zinc-800 dark:bg-smoke-gray'>
            <div className='flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between p-2.5 text-smoke-gray dark:text-zinc-800 px-5 py-2.5'>
                <a
                    className='bg-rslogo bg-no-repeat bg-cover h-10 w-20 order-last md:order-first'
                    href='https://rs.school/js/'
                    target='_blank'
                    rel='noreferrer'
                ></a>
                <div className='flex flex-col sm:flex-row gap-1 sm:gap-2.5'>
                    {participants.map(({ id, name, link }) => (
                        <a key={id} className='text-center' href={link} target='_blank' rel='noreferrer'>
                            {name[state.language]}
                        </a>
                    ))}
                </div>
                <div className=''>© {new Date().getFullYear()}</div>
            </div>
        </footer>
    );
};

export default Footer;
