import Layout from 'components/Layout';
import AboutUs from 'pages/AboutUs';
import Error404 from 'pages/Error404';
import HomePage from 'pages/HomePage';
import Restaurants from 'pages/Restaurants';
import UserPage from 'pages/UserPage';
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
                    <Route path='/userpage' element={<UserPage />} />
                    <Route path='/*' element={<Error404 />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
