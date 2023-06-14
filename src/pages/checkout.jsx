import React, { useEffect, useState, useContext } from "react";
import Shield from "../assets/images/shield.svg";
import {
    AdvertiseCard,
    Container,
    InfoContainer,
    RedirectPayment,
    SafetyTip,
    AdressSelected,
    ContainerDeliveryOptions,
    Checkbox,
    ContainerCheckBox,
    PaymentMethod
} from "../assets/styles/checkoutStyle";
import Navbar from "../components/Navbar";
import Home from "../assets/images/icon-home.svg";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate, useParams } from 'react-router-dom';
import IconError from '../assets/images/icon-error.svg';
import { url } from "../utils/request";
import axios from "axios";
import {
    ContainerError,
    InputContainer,
    Label,
    CoupleInputs
} from '../assets/styles/components/InputStyle';
import InputMask from 'react-input-mask';
import Loading from "../components/Loading";
import { findByCategory } from "../utils/enums";
import { formatCurrency } from "../utils/strings"

export default function Checkout() {
    let navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const userId = user.id;
    const { id } = useParams();

    const [deliveryOption, setDeliveryOption] = useState(1);
    const [advertiseName, setAdvertiseName] = useState('');
    const [advertiseCategory, setAdvertiseCategory] = useState('');
    const [advertiseImage, setAdvertiseImage] = useState('');
    const [advertisePrice, setAdvertisePrice] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerCpf, setSellerCpf] = useState('');

    const [road, setRoad] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('')
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [cardNumber, setCardNumber] = useState('');
    const [holderName, setHolderName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');

    const [showCardNumberError, setShowCardNumberError] = useState(false);
    const [showHolderNameError, setShowHolderNameError] = useState(false);
    const [showExpirationDateError, setShowExpirationDateError] = useState(false);
    const [showSecurityCodeError, setShowSecurityCodeError] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleDeliveryOptionChange = (event) => {
        setDeliveryOption(Number(event.target.value));
    };

    async function makePayment() {
        let isValidAllFields = validateFields()

        if (isValidAllFields) {
            try {
                setLoading(true)
                const [month, year] = expirationDate.split('/');
                await axios.post(`${url}/payment-user-advertisements`, {
                    isShipment: deliveryOption === 1 ? true : false,
                    idAdvertisement: id,
                    idUser: userId,
                    cardNumber: cardNumber,
                    expMonth: month,
                    expYear: year,
                    securityCode: securityCode,
                    holderName: holderName,
                }
                ).then((response) => {
                    const data = response.data
                    setState(data.state)
                    setCity(data.city)
                    setNeighborhood(data.neighborhood)
                    setRoad(data.road)
                    setNumber(data.number)
                })

            } catch (error) {

            } finally {
                setLoading(false)
            }
        }
    }

    async function load() {
        try {
            setLoading(true)

            //Preenche os campos do usuario logado
            await axios.get(`${url}/users?sellerId=${userId}`
            ).then((response) => {
                const data = response.data
                setState(data.state)
                setCity(data.city)
                setNeighborhood(data.neighborhood)
                setRoad(data.road)
                setNumber(data.number)
            })

            //Preenche os campos do vendedor e do anuncio
            await axios.get(`${url}/adversiments/${id}/${userId}`).then((response) => {
                const data = response.data[0].adversiments
                console.log(data)
                setAdvertiseName(data.title)
                setAdvertisePrice(data.price)
                setAdvertiseCategory(findByCategory(data.category))
                if (data.images != null && data.images.length > 0) {
                    setAdvertiseImage(data.images[0].url)
                }
                const seller = data.userSellerLikeDto
                setSellerName(seller.name ? seller.name : '')
                setSellerCpf(seller.cpf ? seller.cpf : '')
            }).catch((e) => {
                console.log(e);
            });

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    function validateFields() {
        let isValidateAllFields = true;
        
        if (cardNumber.length !== 19) {
            setShowCardNumberError(true);
            isValidateAllFields = false;
        } else {
            setShowCardNumberError(false)
        }

        if (holderName.length <= 0) {
            setShowHolderNameError(true);
            isValidateAllFields = false;
        } else {
            setShowHolderNameError(false)
        }

        if (expirationDate.length !== 10) {
            setShowExpirationDateError(true);
            isValidateAllFields = false;
        } else {
            setShowExpirationDateError(false)
        }

        if (securityCode.length !== 3) {
            setShowSecurityCodeError(true);
            isValidateAllFields = false;
        } else {
            setShowSecurityCodeError(false);
        }

        return isValidateAllFields;
    }

    function sendEditProfile() {
        navigate("/editar-perfil")
    }

    useEffect(() => {
        let isAuthenticated = localStorage.getItem('userId')
        if (isAuthenticated === undefined || isAuthenticated === null) {
            navigate("/")
        } else {
            load()
        }
    }, [])

    return (
        <>
            <Loading isEnabled={loading} />
            <Navbar type='basic'
                showBackButton={true}
            />
            <Container>
                <InfoContainer>
                    <h1>Confirme sua compra</h1>
                    <div>
                        <p>Entrega</p>
                        <ContainerCheckBox>
                            <Checkbox
                                type="radio"
                                name="deliveryOption"
                                value="1"
                                checked={deliveryOption === 1}
                                onChange={handleDeliveryOptionChange}
                            />Quero que o vendedor me envie<br />
                        </ContainerCheckBox>
                        <ContainerCheckBox>
                            <Checkbox
                                type="radio"
                                name="deliveryOption"
                                value="2"
                                checked={deliveryOption === 2}
                                onChange={handleDeliveryOptionChange}
                            />Quero retirar
                        </ContainerCheckBox>
                    </div>
                    <div>
                        <p>Endereço de entrega</p>
                        <ContainerDeliveryOptions>
                            {
                                deliveryOption === 1 ?
                                    <AdressSelected>
                                        <div>
                                            <div>
                                                <img src={Home} alt="Endereço selecionado" />
                                            </div>
                                            {
                                                road && number && neighborhood && city && state ?
                                                    <div>
                                                        <p>{road}, {number}</p>
                                                        <span>{neighborhood}, {city} - {state}</span>
                                                    </div>
                                                    :
                                                    <div>
                                                        <span>Você não possui endereço cadastrado</span>
                                                    </div>
                                            }
                                        </div>
                                        <button onClick={() => { sendEditProfile() }}>{
                                            road && number && neighborhood && city && state ? "Alterar" : "Cadastrar"
                                        }</button>
                                    </AdressSelected>
                                    :
                                    <SafetyTip>
                                        <img src={Shield} alt="Dica de segurança" />
                                        <span> Entre em <span>contato com o vendedor</span> para marcar um local de encontro.
                                            Para a sua segurança indicamos um local público</span>
                                    </SafetyTip>
                            }
                        </ContainerDeliveryOptions>
                    </div>
                    <PaymentMethod>
                        <p>Forma de pagamento</p>
                        <div>
                            <div>
                                <Label>Número do cartão</Label>
                                <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                                    <InputMask
                                        mask="9999 9999 9999 9999"
                                        id="numeroCartao"
                                        placeholder="0000 0000 0000 0000"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                    />
                                </InputContainer>
                                <ContainerError style={showCardNumberError ? { display: 'flex' } : { display: 'none' }}>
                                    <img src={IconError} alt="Número de cartão inválido" />
                                    <span>Número de cartão inválido</span>
                                </ContainerError>
                            </div>
                            <div>
                                <Label>Nome no cartão</Label>
                                <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                                    <InputMask
                                        placeholder=""
                                        value={holderName}
                                        onChange={(e) => setHolderName(e.target.value)}
                                    />
                                </InputContainer>
                                <ContainerError style={showHolderNameError ? { display: 'flex' } : { display: 'none' }}>
                                    <img src={IconError} alt="Nome inválido" />
                                    <span>Digite um nome válido</span>
                                </ContainerError>
                            </div>
                            <div>
                                <CoupleInputs>
                                    <div>
                                        <span>Data de expiração</span>
                                        <InputMask
                                            type="text"
                                            placeholder="0000"
                                            value={expirationDate}
                                            mask="99/99/9999"
                                            onChange={(e) => setExpirationDate(e.target.value)}
                                        />
                                    </div>
                                    <ContainerError style={showExpirationDateError ? { display: 'flex' } : { display: 'none' }}>
                                        <img src={IconError} alt="Digite uma data válida" />
                                        <span>Digite uma data válida</span>
                                    </ContainerError>
                                    <div>
                                        <span>CVV ou CVC</span>
                                        <InputMask
                                            mask="999"
                                            type="text"
                                            placeholder="0000"
                                            value={securityCode}
                                            onChange={(e) => setSecurityCode(e.target.value)}
                                        />
                                    </div>
                                    <ContainerError style={showSecurityCodeError ? { display: 'flex' } : { display: 'none' }}>
                                        <img src={IconError} alt="Digite uma código válido" />
                                        <span>Digite uma código válido</span>
                                    </ContainerError>
                                </CoupleInputs>
                            </div>
                        </div>
                    </PaymentMethod>
                </InfoContainer>
                <div>
                    <AdvertiseCard>
                        <div>
                            <div>
                                <img src={advertiseImage} alt="Anuncio x" />
                            </div>
                            <div>
                                <h1>{advertiseName}</h1>
                                <span>{advertiseCategory}</span>
                                <span>
                                    Vendido por: {sellerName.toUpperCase()}
                                    <br />
                                    CPF: {sellerCpf.substring(0, 3)}.***.***-**
                                </span>
                            </div>
                        </div>
                        <div>
                            <span>Total a pagar:</span>
                            <span>{formatCurrency(advertisePrice)}</span>
                        </div>
                    </AdvertiseCard>
                </div>
            </Container>
            <RedirectPayment>
                <button onClick={() => makePayment()}>Realizar Pagamento</button>
            </RedirectPayment>
        </>
    )
}