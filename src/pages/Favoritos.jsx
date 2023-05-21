import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ImageDefault from '../assets/images/image-default.png';
import {
    Container
} from "../assets/styles/FavoritosStyle"
export default function Favoritos() {
    const [cardList, setCardList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    function handleClickSeller() {
        console.log('clicou no vendedor')
    }

    function handleClickCard() {
        console.log('clicou no card')
    }

    const [isSelectedHeart, setIsSelectedHeart] = useState(false)
    function handleClickHeart() {
        setIsSelectedHeart(!isSelectedHeart)
    }

    return (
        <>
            <Navbar type='basic' showBackButton={true} />
            <Container>
                <h1>Favoritos</h1>

                <div>
                    {cardList.map((card, index) => (
                        <Card
                            key={index}
                            image={ImageDefault}
                            price={'200'}
                            name={'Bolsa marrom'}
                            brand={'Tommy'}
                            sellerName={'Luiz'}
                            sellerCity={'São Paulo'}
                            sellerState={'SP'}
                            sellerIsVerify={true}
                            sellerImageProfile={ImageDefault}
                            isSelectedHeart={isSelectedHeart}
                            onClickHeart={handleClickHeart}
                            onClickSeller={handleClickSeller}
                            onClickCard={handleClickCard}
                            margin={'5px'}
                        />
                    ))}
                </div>
            </Container>
        </>
    )
}