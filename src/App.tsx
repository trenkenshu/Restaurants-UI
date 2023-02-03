import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/restaurants' element={<div>Restaurants</div>} />
                    <Route path='/about' element={<div>About</div>} />
                    <Route path='/*' element={<div>ERROR PAGE</div>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
