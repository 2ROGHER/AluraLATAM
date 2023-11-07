import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Test from '../views/Test/Test';

const RouteComponent = () => {
    return (
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/test' element={<Test/>} />
        </Routes>
    );
}

export default RouteComponent;
