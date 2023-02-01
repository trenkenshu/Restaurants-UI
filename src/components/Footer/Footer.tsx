import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-zinc-800 dark:bg-smoke-gray'>
            <div className='flex items-center justify-between p-2.5 text-smoke-gray dark:text-zinc-800 px-5 py-2.5'>
                <a
                    className='bg-rslogo bg-no-repeat h-10 w-21'
                    href='https://rs.school/js/'
                    target='_blank'
                    rel='noreferrer'
                ></a>
                <div className='flex gap-2.5'>
                    <a className='' href='https://github.com/ViktorMinkov' target='_blank' rel='noreferrer'>
                        Viktor Minkov
                    </a>
                    <a className='' href='https://github.com/trenkenshu' target='_blank' rel='noreferrer'>
                        Oleg Trenkenshu
                    </a>
                    <a className='' href='https://github.com/RallyZK' target='_blank' rel='noreferrer'>
                        Railia Balakaeva
                    </a>
                </div>
                <div className=''>© {new Date().getFullYear()}</div>
            </div>
        </footer>
    );
};

export default Footer;
