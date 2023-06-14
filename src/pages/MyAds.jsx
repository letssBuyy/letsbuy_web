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
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { url } from "../utils/request";
import axios from "axios";

export default function MyAds() {
    const [option, setOption] = useState(0);
    const [ads, setAds] = useState([]);
    const [typeCard, setTypeCard] = useState("progress");
    const [loading, setLoading] = useState(false);
    const userid = localStorage.getItem('userId')

    let navigate = useNavigate()

    async function loadProgress() {
        setOption(0)
        setTypeCard("progress")

        setLoading(true)
        await axios.get(`${url}/adversiments/filters/${userid}/ACTIVE`).then((response) => {
            const data = response.data
            setAds(data)
        })

        setLoading(false)
    }

    async function loadingSalle() {
        setOption(1)
        setTypeCard("sale")

        setLoading(true)
        await axios.get(`${url}/adversiments/filters/${userid}/SALLED`).then((response) => {
            const data = response.data
            setAds(data)
        })

        setLoading(false)
    }

    async function loadDisabled() {
        setOption(3)
        setTypeCard("disabled")

        setLoading(true)
        await axios.get(`${url}/adversiments/filters/${userid}/INACTIVE`).then((response) => {
            const data = response.data
            setAds(data)
        })

        setLoading(false)
    }

    function selectedMobile(data) {
        switch (data) {
            case "Publicados":
                loadProgress()
                break;
            case "Vendidos":
                loadingSalle()
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
        let isAuthenticated = localStorage.getItem('userId')
        if (isAuthenticated === undefined || isAuthenticated === null) {
            navigate("/")
        }
        loadProgress()
    }, [])

    return (
        <>
            <Loading isEnabled={loading} />
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
                                    <Card
                                        item={item}
                                        key={index}
                                        type={typeCard}
                                    />
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