import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Verify from '../assets/images/icon-verify.svg';
import ImageDefault from '../assets/images/image-default.png';
import {
    ProfileIcon,
    Container,
    InfoUser,
    BoxText,
    ContainerAdvertise,
    ListAdvertise
} from '../assets/styles/profileStyle';
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { findByCategory } from "../utils/enums";
import { url } from "../utils/request";
import axios from "axios";
import NoContent from "../components/NoContent";
import Loading from "../components/Loading";

export default function Profile() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [subscribeSince, setSubscribeSince] = useState('');
    const [profileIcon, setProfileIcon] = useState('');
    const [cardList, setCardList] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        load()
    }, [])

    async function load() {
        try {
            setLoading(true)
            await axios.get(`${url}/users/${id}`).then((response) => {
                const data = response.data
                setName(data.name)
                setCity(data.city)
                setState(data.state)
                setSubscribeSince(data.registrationDate)
                setProfileIcon(data.profileImage);
                setCardList(data.adversiments)
            }).catch((e) => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Loading isEnabled={loading} />
            <Navbar type='principal' isAuthenticated={false} />
            <Container>
                <InfoUser>
                    <ProfileIcon>
                        <img src={profileIcon !== "" ? profileIcon : ImageDefault} alt={name} />
                    </ProfileIcon>
                    <BoxText>
                        <h1>{name}</h1>
                        <div>
                            <img src={Verify} alt="Vendedor verificado" />
                            <span>Vendedor verificado</span>
                        </div>
                        <span>{city}, {state} | na LetsBuy desde {subscribeSince}</span>
                    </BoxText>
                </InfoUser>
                <ContainerAdvertise>
                    <div></div>
                    <ListAdvertise>
                        {cardList.length > 0 ?
                            cardList.map((card, index) => (
                                <Card
                                    key={index}
                                    image={ImageDefault}
                                    price={card.price}
                                    name={card.title}
                                    isSelectedHeart={card.isLike}
                                    brand={findByCategory(card.category)}
                                    sellerName={card.user.name}
                                    sellerCity={card.user.city}
                                    sellerState={card.user.state}
                                    sellerImageProfile={card.user.profileImage}
                                    margin={'5px'}
                                />
                            ))
                            :
                            <NoContent
                                accessibilityMessage="Esse vendedor ainda não possui anúncios"
                                message="Esse vendedor ainda não possui anúncios"
                            />
                        }
                    </ListAdvertise>
                </ContainerAdvertise>
            </Container>
        </>
    )
}