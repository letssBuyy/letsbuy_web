import React from "react";
import { Title } from '../assets/styles/homeStyle'
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
        <Navbar type='principal' isAuthenticated={false}/>
            <div>
                <Title>pagina inicial</Title>
            </div>
        </>
    )
}