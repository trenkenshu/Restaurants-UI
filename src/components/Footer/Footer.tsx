import React from 'react';

const participants = [
    { id: 0, name: 'Viktor Minkov', link: 'https://github.com/ViktorMinkov' },
    { id: 1, name: 'Oleg Trenkenshu', link: 'https://github.com/trenkenshu' },
    { id: 2, name: 'Railia Balakaeva', link: 'https://github.com/RallyZK' },
];

const Footer = () => {
    return (
        <footer id='footer' className='h-15 bg-zinc-800 dark:bg-smoke-gray'>
            <div className='flex items-center justify-between p-2.5 text-smoke-gray dark:text-zinc-800 px-5 py-2.5'>
                <a
                    className='bg-rslogo bg-no-repeat h-10 w-21'
                    href='https://rs.school/js/'
                    target='_blank'
                    rel='noreferrer'
                ></a>
                <div className='flex gap-2.5'>
                    {participants.map(({ id, name, link }) => (
                        <a key={id} className='' href={link} target='_blank' rel='noreferrer'>
                            {name}
                        </a>
                    ))}
                </div>
                <div className=''>© {new Date().getFullYear()}</div>
            </div>
        </footer>
    );
};

export default Footer;
