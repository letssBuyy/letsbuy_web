import React, { useState, useEffect } from "react";
import Cookie from '../assets/images/icon-cookie.svg';
import {
    CookieBannerWrapper,
    CookieIcon,
    CookieMessage,
    AcceptButton
} from '../assets/styles/components/cookiesStyle';

export default function Cookies() {
    const [accepted, setAccepted] = useState(false)

    const handleAccept = () => {
        localStorage.setItem('cookieAccepted', true);
        setAccepted(true);
    };

    useEffect(() => {
        const isAccepted = localStorage.getItem('cookieAccepted');
        if (isAccepted) {
            setAccepted(true);
        }
    }, []);

    return (
        <>
            {
                accepted ?
                    <></>
                    :
                    <CookieBannerWrapper>
                        <CookieIcon>
                            <img src={Cookie} alt="Aceite os cookies do nosso site" />
                        </CookieIcon>
                        <CookieMessage>
                            Para melhorar sua experiência no nosso site, usamos cookies. Clique em 'Aceito' para permitir o uso de cookies e continuar navegando.
                        </CookieMessage>
                        <AcceptButton onClick={handleAccept}>Aceito!</AcceptButton>
                    </CookieBannerWrapper>
            }
        </>
    )
}