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
                    {cardList.map((card, index) => (
                        <Card
                            key={index}
                            image={card.images ? card.images[0] : null}
                            price={card.price}
                            name={card.title}
                            brand={'Tommy'}
                            sellerName={card.user.name}
                            sellerCity={'São Paulo'}
                            sellerState={'SP'}
                            sellerImageProfile={card.user.imageProfile}
                            isSelectedHeart={card.isSelectedHeart}
                            margin={'5px'}
                        />
                    ))}
                </div>
            </Container>
        </>
    )
}