import Layout from 'components/Layout';
import AboutUs from 'pages/AboutUs';
import Error404 from 'pages/Error404';
import HomePage from 'pages/HomePage';
import Restaurants from 'pages/Restaurants';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreContext from 'store';

const App = () => {
    return (
        <StoreContext>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/restaurants' element={<Restaurants />} />
                        <Route path='/about' element={<AboutUs />} />
                        <Route path='/*' element={<Error404 />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </StoreContext>
    );
};

export default App;
