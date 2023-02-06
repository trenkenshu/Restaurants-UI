import Layout from 'components/Layout';
import AboutUs from 'pages/AboutUs';
import HomePage from 'pages/HomePage';
import Restaurants from 'pages/Restaurants';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/restaurants' element={<Restaurants />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/*' element={<div>ERROR PAGE</div>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
