import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
    Container,
    ContainerImages,
    ContainerContent,
    InfoAd,
    TipsOfSecurity,
    SaleInformation
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

export default function Advertise() {
    const [advertisementImages, setAdvertisementImages] = useState([ImageDefault, ImageDefault, ImageDefault, ImageDefault, ImageDefault])
    const [isFavorite, setIsFavorite] = useState(true);
    const [title, setTitle] = useState('Bolsa marrom');
    const [dateOfPublish, setDateOfPublish] = useState('24/02/2023');
    const [price, setPrice] = useState('200');
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur. Mauris mauris viverra urna velit leo justo. Elit amet est posuere augue egestas eget dignissim quis. Amet eget enim id nec vulputate iaculis massa cras.');

    const [sellerImage, setSellerImage] = useState(ImageDefault);
    const [sellerName, setSellerName] = useState('Luiz');
    const [sellerCity, setSellerCity] = useState('São Paulo');
    const [sellerState, setSellerState] = useState('SP');
    const [sellerIsVerified, setSellerIsVerified] = useState(true);
    const [sellerStartDate, setSellerStartDate] = useState('2023');

    const [sellerAdsSold, setSellerAdsSold] = useState('1');
    const [sellerAdsForSale, setSellerAdsForSale] = useState('2');

    return (
        <>
            <Navbar type='principal' />
            <Container>
                <ContainerImages>
                    <img src={advertisementImages[0]} />
                    <div>
                        <img src={advertisementImages[1]} />
                        <img src={advertisementImages[2]} />
                        <img src={advertisementImages[3]} />
                        <img src={advertisementImages[4]} />
                    </div>
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
                        <div>
                            <button>Comprar</button>
                            <button>Enviar proposta</button>
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
                            <div>
                                <img src={sellerImage} alt="Imagem de perfil do usuário" />
                                <div>
                                    <p>{sellerName}</p>
                                    <span>{sellerCity} - {sellerState}</span>
                                </div>
                                {
                                    sellerIsVerified ?
                                        <img src={Verify} alt="Usuário verificado" />
                                        :
                                        <></>
                                }
                            </div>
                            <div>
                                <button>
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