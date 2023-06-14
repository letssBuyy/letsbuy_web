import React, { useEffect, useState, useContext } from "react";
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
import { url } from "../utils/request";
import axios from "axios";
import NoContent from "../components/NoContent";
import Loading from "../components/Loading";
import moment from "moment";
import { AuthContext } from "../utils/AuthContext";

export default function Profile() {
    const [idseller, setIdSeller] = useState('')
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [subscribeSince, setSubscribeSince] = useState('');
    const [profileIcon, setProfileIcon] = useState('');
    const [cardList, setCardList] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const userId = user.id;

    async function load() {
        try {
            setLoading(true)

            var urlcontent = ""

            if (userId !== 0) {
                urlcontent = `/users?sellerId=${id}&buyerId=${userId}`
            } else {
                urlcontent = `/users?sellerId=${id}`
            }

            await axios.get(`${url}${urlcontent}`).then((response) => {
                const data = response.data
                console.log(data)
                setIdSeller(data.id ? data.id : '')
                setName(data.name ? data.name : '')
                setCity(data.city ? data.city : '')
                setState(data.state ? data.state : '')
                const messageDate = moment(data.registrationDate ? data.registrationDate : '');
                setSubscribeSince(messageDate.format("DD/MM/YYYY"))
                setProfileIcon(data.profileImage ? data.profileImage : '');
                setCardList(data.adversiments ? data.adversiments : '');
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
        load()
    }, [])

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
                        {
                            city && state ?
                                <span>{city}, {state} | na LetsBuy desde {subscribeSince}</span>
                                :
                                <span>Na LetsBuy desde {subscribeSince}</span>
                        }
                    </BoxText>
                </InfoUser>
                <ContainerAdvertise>
                    <div></div>
                    <ListAdvertise>
                        {cardList.length > 0 ?
                            cardList.map((card, index) => (
                                <Card
                                    key={index}
                                    id={card && card.id ? card.id : ''}
                                    idSeller={idseller}
                                    image={card.images && card.images.length > 0 ? card.images[0].url : null}
                                    price={card.price}
                                    name={card.title}
                                    brand={card.category}
                                    sellerName={name}
                                    sellerCity={city}
                                    sellerState={state}
                                    sellerImageProfile={profileIcon}
                                    isSelectedHeart={card && card.isLike}
                                    likeId={card && card.likeId ? card.likeId : ''}
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