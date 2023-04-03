import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import RecoveryEmail  from '../pages/RecoveryEmail';
import RecoveryPassword  from '../pages/RecoveryPassword';

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route  path='/entrar' element={<Login />} />
                <Route path='/recuperar-email' element={<RecoveryEmail />}/>
                <Route path='/recuperar-senha' element={<RecoveryPassword />}/>
                <Route  path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}