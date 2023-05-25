import React from "react";
import {
    Container,
    Title,
    TabBar,
    ItemTabBar
 } from "../assets/styles/myAdsStyle"
import Navbar from "../components/Navbar"

export default function MyAds() {
    return (
        <>
            <Navbar type='principal' isAuthenticated={false} />
            <Container>
                <Title>Meus anúncios</Title>

                <TabBar>
                    <ItemTabBar isSelected={true}>
                        <span>Publicados</span>
                    </ItemTabBar>
                    <ItemTabBar isSelected={false}>
                        <span>Vendidos</span>
                    </ItemTabBar>
                    <ItemTabBar isSelected={false}>
                        <span>Inativos</span>
                    </ItemTabBar>
                    <ItemTabBar isSelected={false}>
                        <span>Desativados</span>
                    </ItemTabBar>
                </TabBar>
                <div>
                    
                </div>
            </Container>
        </>
    )
}