import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import {
    Container
} from "../assets/styles/favoritosStyle";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from 'react-router-dom';
import { url } from "../utils/request";
import axios from "axios";
import Loading from "../components/Loading";
import NoContent from "../components/NoContent";

export default function Favoritos() {
    const [cardList, setCardList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user, isAuthenticated } = useContext(AuthContext);
    const userId = user.id

    let navigate = useNavigate();

    async function load() {
        try {
            setLoading(true)
            await axios.get(`${url}/adversiments/like/${userId}`).then((response) => {
                const data = response.data
                console.log(data)
                setCardList(data)
            }).catch((e) => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/")
        } else {
            load()
        }
    }, [])

    return (
        <>
            <Loading isEnabled={loading} />
            <Navbar type='basic' showBackButton={true} />
            <Container>
                <h1>Favoritos</h1>

                <div>
                    {
                        cardList && cardList.length > 0 ?
                            cardList.map((card, index) => (
                                <Card
                                    key={index}
                                    id={card.adversiments && card.adversiments.id ? card.adversiments.id : ''}
                                    idSeller={card.adversiments && card.adversiments.userSellerLikeDto ? card.adversiments.userSellerLikeDto.id : ''}
                                    image={card.adversiments && card.adversiments.images && card.adversiments.images.length > 0 ? card.adversiments.images[0].url : null}
                                    price={card.adversiments && card.adversiments.price}
                                    name={card.adversiments && card.adversiments.title}
                                    brand={card.adversiments && card.adversiments.category}
                                    sellerName={card.adversiments && card.adversiments.userSellerLikeDto ? card.adversiments.userSellerLikeDto.name : ''}
                                    sellerCity={card.adversiments && card.adversiments.userSellerLikeDto ? card.adversiments.userSellerLikeDto.city : ''}
                                    sellerState={card.adversiments && card.adversiments.userSellerLikeDto ? card.adversiments.userSellerLikeDto.state : ''}
                                    sellerImageProfile={card.adversiments && card.adversiments.userSellerLikeDto ? card.adversiments.userSellerLikeDto.profileImage : ''}
                                    isSelectedHeart={true}
                                    likeId={card.id ? card.id : ""}
                                />
                            ))
                            :
                            <NoContent
                                accessibilityMessage="Você ainda não possui anúncios curtidos"
                                message="Você ainda não possui anúncios curtidos"
                            />
                    }
                </div>
            </Container>
        </>
    )
}