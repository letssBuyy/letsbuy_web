import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { CaixaGraficos, CaixaKpi, CaixasFilhas, Graficos, Limitador } from "../assets/styles/DashboardStyle";


export default function Exibir() {

    // function handlePasswordChange(event) {
    //     setPassword(event.target.value);
    // }

    return (
        <>
            <Navbar type='basic'
                isAuthenticated={false}
                showBackButton={true}
            />
            <div style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            </div>

            <Limitador>
                <CaixaKpi>
                    <CaixasFilhas></CaixasFilhas>
                    <CaixasFilhas></CaixasFilhas>
                    <CaixasFilhas></CaixasFilhas>
                    <CaixasFilhas></CaixasFilhas>
                </CaixaKpi>

                <CaixaGraficos>
                    <Graficos></Graficos>
                    <Graficos></Graficos>
                </CaixaGraficos>
            </Limitador>
        </>
    )
}
