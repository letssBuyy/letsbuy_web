import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import RecoveryEmail  from '../pages/RecoveryEmail';
import RecoveryPassword  from '../pages/RecoveryPassword';
import AboutUs  from '../pages/AboutUs';

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route  path='/entrar' element={<Login />} />
                <Route path='/cadastrar' element={<Register />} />
                <Route path='/recuperar-email' element={<RecoveryEmail />}/>
                <Route path='/recuperar-senha' element={<RecoveryPassword />}/>
                <Route path='/sobre-nos' element={<AboutUs />}/>
                <Route  path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}