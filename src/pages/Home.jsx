import React, { useState, useContext } from "react";
import Search from "../assets/images/icon-search.svg";
import {
    CardsSection,
    CategorysSection,
    Container,
    IndexSection,
    Input,
    Padding,
    TitleSection,
    ResultSearch,
    ContainerSarchAndInput
} from "../assets/styles/homeStyle";
import Banner from "../components/Banner";
import Cookies from "../components/Cookies";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carrousel from '../components/Carrousel';
import CarouselCategory from "../components/CarrouselCategorys";
import CarrouselCards from "../components/CarrouselCards";
import Loading from "../components/Loading";
import { categorys } from "../utils/enums";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { url } from "../utils/request";
import { AuthContext } from "../utils/AuthContext";

export default function Home() {
    const [search, setSearch] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [contentResult, setContentResult] = useState([]);
    const { user } = useContext(AuthContext);
    const idUser = user.id;
    const [advertiseList1, setAdvertiseList1] = useState([]);
    const [advertiseList2, setAdvertiseList2] = useState([])

    let navigate = useNavigate();

    function handleSearch(e) {
        setSearch(e.target.value)

        if (search.length > 2) {
            setShowResult(true)
            searchResults()
        } else {
            setShowResult(false)
        }
    }

    async function searchResults() {
        var urlcontent = ""

        if (idUser !== 0) {
            urlcontent = `/searches/filter?title=${search}&idUser=${idUser}`
        } else {
            urlcontent = `/searches/filter?title=${search}`
        }

        await axios.get(`${url}${urlcontent}`, {
            "city": null,
            "priceMin": null,
            "priceMax": null,
            "quality": null,
            "category": null,
            "color": null,
            "filter": 1
        }).then((response) => {
            const data = response.data.content
            setContentResult(data)
        })
    }

    async function load() {
        var urlcontent = ""

        if (idUser !== 0) {
            urlcontent = `/searches?idUser=${idUser}`
        } else {
            urlcontent = "/searches"
        }

        await axios.get(`${url}${urlcontent}`).then((response) => {
            const data = response.data.content
            const list1 = data.slice(0, 6)
            const list2 = data.slice(7, 12)
            setAdvertiseList1(list1)
            setAdvertiseList2(list2)
        })
    }

    useEffect(() => {
        load()
    }, [user])

    return (
        <>
            <Loading isEnabled={false} />
            <Navbar type='principal' isAuthenticated={true} />
            <Container>
                <Padding>
                    <IndexSection>
                        <div>
                            <p>Desapegar nunca foi tão <span>fácil!</span></p>
                            <ContainerSarchAndInput>
                                <Input>
                                    <input
                                        onChange={(e) => handleSearch(e)}
                                        placeholder="O que você gostaria de encontrar hoje?"
                                    />
                                    <img src={Search} alt="Buscar" />
                                </Input>
                                <ResultSearch style={showResult ? { display: 'flex' } : { display: 'none' }}>
                                    {
                                        contentResult.length > 0 ?
                                            contentResult.map((item, index) => (
                                                <div key={index} onClick={() => { navigate(`/buscar-anuncios?resultSearch=${item.title}`) }}>
                                                    <p>{item.adversiments.title}</p>
                                                </div>
                                            ))
                                            :
                                            <>
                                                <div>
                                                    <p>Sem resultados para essa busca</p>
                                                </div>
                                            </>
                                    }
                                </ResultSearch>
                            </ContainerSarchAndInput>
                            <Carrousel items={categorys} />
                        </div>
                        <Banner />
                    </IndexSection>
                    <CardsSection>
                        {
                            advertiseList1.length >= 6 ?
                                <>
                                    <TitleSection>Produtos em destaque</TitleSection>
                                    <CarrouselCards items={advertiseList1} />
                                </>
                                :
                                <></>
                        }
                        {
                            advertiseList2.length >= 6 ?
                                <>
                                    <CarrouselCards items={advertiseList2} />
                                </>
                                :
                                <></>
                        }
                    </CardsSection>
                    <CategorysSection>
                        <TitleSection>Explore nossas Categorias</TitleSection>
                        <CarouselCategory items={categorys} />
                    </CategorysSection>
                </Padding>
                <Footer />
                <Cookies />
            </Container>
        </>
    )
}