import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details/Details';
import Home from './components/Home/Home';

const Views = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
        </Routes>
    );
};

export default Views;