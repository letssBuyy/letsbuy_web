import React from "react";
import { Title } from '../assets/styles/homeStyle';
import Navbar from "../components/Navbar";
import Cookies from "../components/Cookies";

export default function Home() {
    return (
        <>
            <Navbar type='principal' isAuthenticated={false} />
            <div>
                <Title>pagina inicial</Title>
                <Cookies />
            </div>
        </>
    )
}