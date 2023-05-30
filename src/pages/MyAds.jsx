import React, { useEffect, useState } from "react";
import {
    Container,
    Title,
    TabBar,
    ItemTabBar,
    ContainerCards,
    TabbarMobile,
} from "../assets/styles/myAdsStyle";
import Navbar from "../components/Navbar";
import { colors } from "../utils/colors";
import Card from "../components/CardMyAds";
import NoContent from "../components/NoContent";
import CustomDropdown from "../components/CustomDropdown";

export default function MyAds() {
    const [option, setOption] = useState(0);
    const [ads, setAds] = useState([]);
    const [typeCard, setTypeCard] = useState("progress");

    function loadProgress() {
        setOption(0)
        setTypeCard("progress")
        setAds([1])
    }

    function loadingSalle() {
        setOption(1)
        setTypeCard("sale")
        setAds([1, 2, 3])
    }

    function loadInactive() {
        setOption(2)
        setTypeCard("inactive")
        setAds([1, 2])
    }
    function loadDisabled() {
        setOption(3)
        setTypeCard("disabled")
        setAds([1, 2, 3, 4, 5])
    }

    // function deleteAd(id) { }
    // function editAd(id) { }
    // function enableAd(id) { }
    // function orderDispatch(id) { }

    function selectedMobile(data) {
        switch (data) {
            case "Publicados":
                loadProgress()
                break;
            case "Vendidos":
                loadingSalle()
                break;
            case "Inativos":
                loadInactive()
                break;
            case "Desativados":
                loadDisabled()
                break;
            default:
                loadProgress()
                break;
        }
    }

    useEffect(() => {
        loadProgress()
    }, [])

    return (
        <>
            <Navbar type='principal' isAuthenticated={false} />
            <Container>
                <Title>Meus anúncios</Title>

                <TabBar>
                    <ItemTabBar
                        style={option === 0 ? { borderBottom: `2px solid ${colors.pink}` } : { borderBottom: "2px solid transparent" }}
                        onClick={() => loadProgress()}
                    >
                        <span>Publicados</span>
                    </ItemTabBar>
                    <ItemTabBar
                        style={option === 1 ? { borderBottom: `2px solid ${colors.pink}` } : { borderBottom: "2px solid transparent" }}
                        onClick={() => loadingSalle()}
                    >
                        <span>Vendidos</span>
                    </ItemTabBar>
                    <ItemTabBar
                        style={option === 2 ? { borderBottom: `2px solid ${colors.pink}` } : { borderBottom: "2px solid transparent" }}
                        onClick={() => loadInactive()}
                    >
                        <span>Inativos</span>
                    </ItemTabBar>
                    <ItemTabBar
                        style={option === 3 ? { borderBottom: `2px solid ${colors.pink}` } : { borderBottom: "2px solid transparent" }}
                        onClick={() => loadDisabled()}
                    >
                        <span>Desativados</span>
                    </ItemTabBar>
                </TabBar>
                <TabbarMobile>
                    <CustomDropdown optionSelected={selectedMobile} />
                </TabbarMobile>
                <ContainerCards>
                    {
                        ads.length > 0 ?
                            ads.map((item, index) => (
                                <>
                                    <Card item={item} key={index} type={typeCard} />
                                </>
                            ))
                            :
                            <>
                                <NoContent
                                    message="Nenhum anúncio encontrado"
                                    accessibilityMessage="Sem anúncios nessa categoria"
                                />
                            </>
                    }
                </ContainerCards>
            </Container>
        </>
    )
}