import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { FC } from 'react';

type LayoutPropsType = {
    children: React.ReactNode;
};

const Layout: FC<LayoutPropsType> = ({ children }) => {
    return (
        <div className='flex flex-col bg-smoke-gray dark:bg-zinc-800 text-zinc-800 dark:text-smoke-gray'>
            <Header />
            <main className='flex flex-100 px-5 py-2.5'>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
