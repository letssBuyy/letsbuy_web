import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import moment from "moment";
import Navbar from "../components/Navbar";
import {
    Container,
    ContainerImages,
    ContainerContent,
    InfoAd,
    TipsOfSecurity,
    SaleInformation,
    BoxNewFinders
} from "../assets/styles/detailsAdStyle";
import ImageDefault from '../assets/images/image-default.png';
import pix from "../assets/images/payment/icon-pix.svg";
import elo from "../assets/images/payment/icon-elo.svg";
import mastercard from "../assets/images/payment/icon-masterCard.svg";
import mercadopago from "../assets/images/payment/icon-mercadopago.svg";
import paypal from "../assets/images/payment/icon-paypal.svg";
import visa from "../assets/images/payment/icon-visa.svg";
import shield from "../assets/images/icon-shield.svg";
import Verify from '../assets/images/icon-verify.svg';
import chat from "../assets/images/icon-chat-pink.svg";
import heart from "../assets/images/icon-heart.svg";
import heartSelected from "../assets/images/icon-heart-selected.svg";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { url } from "../utils/request";
import { findByQuality, findByColor, findByCategory } from "../utils/enums";

export default function Advertise() {
    const [advertisementImages, setAdvertisementImages] = useState([
        {
            original: ImageDefault,
            thumbnail: ImageDefault,
        },
        {
            original: ImageDefault,
            thumbnail: ImageDefault,
        },
        {
            original: ImageDefault,
            thumbnail: ImageDefault,
        },
        {
            original: ImageDefault,
            thumbnail: ImageDefault,
        },
    ])
    const [idAdvertise, setIdAdvertise] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const [collor, setCollor] = useState('');
    const [quality, setQuality] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [dateOfPublish, setDateOfPublish] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [sellerId, setSellerId] = useState('');
    const [sellerImage, setSellerImage] = useState(ImageDefault);
    const [sellerName, setSellerName] = useState('');
    const [sellerCity, setSellerCity] = useState('');
    const [sellerState, setSellerState] = useState('');
    const [sellerStartDate, setSellerStartDate] = useState('');
    const [sellerAdsSold, setSellerAdsSold] = useState('');
    const [sellerAdsForSale, setSellerAdsForSale] = useState('');

    let navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const idUser = user.id
    
    async function load() {
        await axios.get(`${url}/adversiments/${id}/${idUser}`).then((response) => {
            const data = response.data
            setIdAdvertise(data.id)
            setTitle(data.title)
            setDescription(data.description)
            setPrice(data.price)
            setIsFavorite(data.isLike)
            setCollor(findByColor(data.color))
            setQuality(findByQuality(data.quality))
            setCategory(findByCategory(data.category))
            const seller = data.user
            setSellerName(seller.name)
            setSellerId(seller.id)
            setSellerImage(seller.profileImage)
            setSellerCity(seller.city)
            setSellerState(seller.state)
            setSellerStartDate(seller.registrationDate)
            setSellerAdsSold(seller.quantityTotalSolded)
            setSellerAdsForSale(seller.quantityTotalActive)

            const messageDate = moment(data.postDate);
            setDateOfPublish(messageDate.format("DD/MM/YYYY"))

            if (data.images != null && data.images.length > 0) {
                const images = []
                data.images.map((image) => {
                    images.push({
                        original: image,
                        thumbnail: image,
                    })
                })

                setAdvertisementImages(images)
            }
        }).catch((e) => {
            console.log(e);
        });
    }

    function sendToChat() {
        navigate(`/chat?openChatWithSeller=${sellerId}`)
    }

    function sendToSellerProfile() {
        navigate(`/perfil/${sellerId}`)
    }

    function buyAdvertise() {
        navigate(`/checkout-pagamento/${idAdvertise}`)
    }

    function sendProposal() {
        navigate(`/chat?openChatWithSeller=${sellerId}&openModalPropose=true`)
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <>
            <Navbar type='principal' />
            <Container>
                <ContainerImages>
                    <ImageGallery
                        items={advertisementImages}
                        showPlayButton={false}
                        thumbnailPosition={'bottom'}
                        showFullscreenButton={false}
                        showNav={false}
                    />
                </ContainerImages>
                <ContainerContent>
                    <InfoAd>
                        <div>
                            <div>
                                <h1>{title}</h1>
                                <button>
                                    {
                                        isFavorite ?
                                            <img src={heartSelected} />
                                            :
                                            <img src={heart} />
                                    }

                                </button>
                            </div>
                            <span>Publicado em {dateOfPublish}</span>
                        </div>
                        <div>
                            <h2>R$ {price}</h2>
                        </div>
                        <div>
                            <h3>Descrição</h3>
                            <p>{description}</p>
                        </div>
                        <BoxNewFinders>
                            <div>
                                <h3>Categoria: </h3>
                                <p>{category}</p>
                            </div>

                            <div>
                                <h3>Qualidade do produto: </h3>
                                <p>{quality}</p>
                            </div>

                            <div>
                                <h3>Cor: </h3>
                                <p>{collor}</p>
                            </div>
                        </BoxNewFinders>
                        <div>
                            <button onClick={() => buyAdvertise()}>Comprar</button>
                            <button onClick={() => sendProposal()}>Enviar proposta</button>
                        </div>
                        <div>
                            <h3>Meios de pagamento</h3>
                            <div>
                                <img src={pix} />
                                <img src={mercadopago} />
                                <img src={paypal} />
                                <img src={visa} />
                                <img src={mastercard} />
                                <img src={elo} />
                            </div>
                        </div>
                    </InfoAd>
                    <TipsOfSecurity>
                        <img src={shield} />
                        <p>para proteger sua compra nunca transfira dinheiro ou se comunique fora do site ou aplicativo. <span>mais dicas de segurança</span></p>
                    </TipsOfSecurity>
                    <SaleInformation>
                        <div>
                            <div onClick={() => sendToSellerProfile()}>
                                <img src={sellerImage} alt="Imagem de perfil do usuário" />
                                <div>
                                    <p>{sellerName}</p>
                                    {
                                        sellerCity !== null && sellerCity !== "" && sellerCity !== undefined
                                        && sellerState !== null && sellerState !== "" && sellerState !== undefined ?
                                            <span>{sellerCity} - {sellerState}</span>
                                            :
                                            <></>
                                    }
                                </div>
                                <img src={Verify} alt="Usuário verificado" />
                            </div>
                            <div>
                                <button onClick={() => sendToChat()}>
                                    Conversar
                                    <img src={chat} alt="Conversar com o vendedor" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Á venda</p>
                                <span>{sellerAdsForSale}</span>
                            </div>
                            <div>
                                <p>Vendidos</p>
                                <span>{sellerAdsSold}</span>
                            </div>
                        </div>
                        <div>
                            <span>{sellerName} está na LetsBuy desde {sellerStartDate}</span>
                        </div>
                    </SaleInformation>
                </ContainerContent>
            </Container>
        </>
    )
}