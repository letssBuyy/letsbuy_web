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
    BoxNewFinders,
    DivImagePagSeguro
} from "../assets/styles/detailsAdStyle";
import ImageDefault from '../assets/images/image-default.png';
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
import Loading from "../components/Loading";
import { formatCurrency } from "../utils/strings";

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
    const [loading, setLoading] = useState(false);
    const [likeId, setLikeId] = useState('');

    let navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const idUser = user.id

    async function load() {
        try {
            setLoading(true)
            await axios.get(`${url}/adversiments/${id}/${idUser}`).then((response) => {
                const data = response.data[0]
                setIsFavorite(data.isLike)
                setLikeId(data.likeId)

                const advertisement = data.adversiments
                setIdAdvertise(advertisement.id)
                setTitle(advertisement.title)
                setDescription(advertisement.description)
                setPrice(advertisement.price)
                
                setCollor(findByColor(advertisement.color))
                setQuality(findByQuality(advertisement.quality))
                setCategory(findByCategory(advertisement.category))
                
                const seller = advertisement.userSellerLikeDto
                setSellerName(seller.name)
                setSellerId(seller.id)
                setSellerImage(seller.profileImage)
                setSellerCity(seller.city)
                setSellerState(seller.state)
                setSellerAdsSold(seller.quantityTotalSolded)
                setSellerAdsForSale(seller.quantityTotalActive)

                const messageDate = moment(data.postDate);
                setDateOfPublish(messageDate.format("DD/MM/YYYY"))

                const sellerStartDate = moment(seller.registrationDate);
                setSellerStartDate(sellerStartDate.format("DD/MM/YYYY"))

                if (advertisement.images != null && advertisement.images.length > 0) {
                    const images = []
                    advertisement.images.map((image) => {
                        images.push({
                            original: image.url,
                            thumbnail: image.url,
                        })
                    })

                    setAdvertisementImages(images)
                }
            }).catch((e) => {
                console.log(e);
            });
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    function sendToChat() {
        navigate(`/chat?openChatWithSeller=${sellerId}&idAdvertise=${idAdvertise}`)
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

    async function handleChangeHeart() {   
        if(!isFavorite) {
            await axios.post(`${url}/adversiments/like/${idUser}/${id}`)
        } else {
            await axios.delete(`${url}/adversiments/deslike/${likeId}`)
        }
    }

    useEffect(() => {
        load()
    }, [user])

    return (
        <>
            <Loading isEnabled={loading} />
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
                                <button onClick={() => handleChangeHeart()}>
                                    {
                                        isFavorite ?
                                            <img src={heartSelected} alt="Curtido" />
                                            :
                                            <img src={heart} alt="Não curtido" />
                                    }

                                </button>
                            </div>
                            <span>Publicado em {dateOfPublish}</span>
                        </div>
                        <div>
                            <h2>{formatCurrency(price)}</h2>
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
                            <DivImagePagSeguro>
                                <img src="//assets.pagseguro.com.br/ps-integration-assets/banners/pagamento/avista_estatico_550_70.gif"
                                    alt="Logotipos de meios de pagamento do PagSeguro"
                                />
                            </DivImagePagSeguro>
                        </div>
                    </InfoAd>
                    <TipsOfSecurity>
                        <img src={shield} />
                        <p>para proteger sua compra nunca transfira dinheiro ou se comunique fora do site ou aplicativo. <span>mais dicas de segurança</span></p>
                    </TipsOfSecurity>
                    <SaleInformation>
                        <div>
                            <div onClick={() => sendToSellerProfile()}>
                                <img src={sellerImage ? sellerImage : ImageDefault} alt="Imagem de perfil do usuário" />
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