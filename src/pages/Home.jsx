import React, { useState } from "react";
import Search from "../assets/images/icon-search.svg";
import {
    CardList,
    CardsSection,
    CategorysSection,
    Container,
    IndexSection,
    Input,
    Padding,
    TitleSection
} from "../assets/styles/homeStyle";
import Banner from "../components/Banner";
import Cookies from "../components/Cookies";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carrousel from '../components/Carrousel';
import CarouselCategory from "../components/CarrouselCategorys";
import CarrouselCards from "../components/CarrouselCards";

export default function Home() {
    const [resultSearch, setResultSearch] = useState(["Tênis", "Tênis Nike"])
    const categorys = [
        "Eletrônicos",
        "Moda e Acessórios",
        "Casa e Decoração",
        "Livros",
        "Filmes",
        "Hobbies",
        "Esporte e lazer",
        "Infantil",
        "Pets",
        "Esporte e lazer"
    ];

    const advertise = [
        {
            image: null,
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: null,
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null,
            margin: '5px'
        },
        {
            image: null,
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: null,
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null,
            margin: '5px'
        },
        {
            image: null,
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: null,
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null,
            margin: '5px'
        },
        {
            image: null,
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: null,
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null,
            margin: '5px'
        },
        {
            image: null,
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: null,
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null,
            margin: '5px'
        },
        {
            image: null,
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: null,
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null,
            margin: '5px'
        },
        {
            image: null,
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: null,
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null,
            margin: '5px'
        },
        {
            image: null,
            price: "200",
            name: "Bolsa marrom",
            brand: "Tommy",
            sellerName: "Luiz",
            sellerCity: "São Paulo",
            sellerIsVerify: true,
            sellerImageProfile: null,
            isSelectedHeart: false,
            onClickHeart: null,
            onClickSeller: null,
            onClickCard: null,
            margin: '5px'
        },
    ]

    return (
        <>
            <Navbar type='principal' isAuthenticated={false} />
            <Container>
                <Padding>
                    <IndexSection>
                        <div>
                            <p>Desapegar nunca foi tão <span>fácil!</span></p>
                            <Input>
                                <input placeholder="O que você gostaria de encontrar hoje?" />
                                <img src={Search} alt="Buscar" />
                            </Input>
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