import React, { useState } from "react";
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

export default function Home() {
    const [search, setSearch] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [contentResult, setContentResult] = useState([]);

    const advertise = [
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: "https://images.pexels.com/photos/10112053/pexels-photo-10112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: "https://images.pexels.com/photos/10112053/pexels-photo-10112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: "https://images.pexels.com/photos/10112053/pexels-photo-10112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: "https://images.pexels.com/photos/10112053/pexels-photo-10112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: "https://images.pexels.com/photos/10112053/pexels-photo-10112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: "https://images.pexels.com/photos/10112053/pexels-photo-10112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: "https://images.pexels.com/photos/10112053/pexels-photo-10112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: "https://images.pexels.com/photos/10112053/pexels-photo-10112053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null
        },
    ]

    function handleSearch(e) {
        setSearch(e.target.value)


        if (search.length > 2) {
            setShowResult(true)
            searchResults()
        } else {
            setShowResult(false)
        }
    }

    function searchResults() {
        setContentResult([])
    }

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
                                            contentResult.map((item) => (
                                                <div>
                                                    <p>{item.title}</p>
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
                        <TitleSection>Produtos em destaque</TitleSection>
                        <CarrouselCards items={advertise} />
                        <CarrouselCards items={advertise} />
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