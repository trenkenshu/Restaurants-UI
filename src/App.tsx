import axios from 'axios';
import Layout from 'components/Layout';
import Restaurants from 'pages/Restaurants';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<div>Homepage</div>} />
                    <Route path='/restaurants' element={<Restaurants />} />
                    <Route path='/about' element={<div>About</div>} />
                    <Route path='/*' element={<div>ERROR PAGE</div>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
