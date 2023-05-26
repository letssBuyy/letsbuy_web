import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import RecoveryEmail from '../pages/RecoveryEmail';
import RecoveryPassword from '../pages/RecoveryPassword';
import AboutUs from '../pages/AboutUs';
import Profile from '../pages/Profile';
import SuccessfulPayment from '../pages/SuccessfulPayment';
import Checkout from '../pages/checkout';
import EditAd from '../pages/EditAd';
import PublishAd from '../pages/PublishAd';
import Fac from '../pages/Fac';
import Dashboard from '../pages/Dashboard';
import Chat from '../pages/Chat';
import MyShoppings from '../pages/MyShoppings';
import Favoritos from '../pages/Favoritos';
import EditProfile from '../pages/EditProfile';
import SearchAd from '../pages/SearchAd';
import Help from '../pages/Help';

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/entrar' element={<Login />} />
                <Route path='/cadastrar' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/recuperar-email' element={<RecoveryEmail />} />
                <Route path='/recuperar-senha' element={<RecoveryPassword />} />
                <Route path='/sobre-nos' element={<AboutUs />} />
                <Route path='/perfil' element={<Profile />} />
                <Route path='/pagamento-concluido' element={<SuccessfulPayment />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/fac' element={<Fac />} />
                <Route path='/editar-anuncio' element={<EditAd />} />
                <Route path='/publicar-anuncio' element={<PublishAd />} />
                <Route path='/chat' element={<Chat/>} />
                <Route path='/minhas-compras' element={<MyShoppings />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/editar-perfil' element={<EditProfile />} />
                <Route path='/buscar' element={<SearchAd />} />
                <Route path='/disputa' element={<Help />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}