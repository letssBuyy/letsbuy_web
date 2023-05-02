import React, { useState } from "react";
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
    ContainerCheckBox
} from "../assets/styles/checkoutStyle";
import Navbar from "../components/Navbar";
import Home from "../assets/images/icon-home.svg"

export default function Checkout() {
    const [deliveryOption, setDeliveryOption] = useState(1)

    const advertise = {
        name: "Bolsa marrom",
        brand: "Tommy",
        price: "200",
        image: "https://i.imgur.com/fwOCAJz.png",
    }

    const seller = {
        name: "Luiz Alves Rodrigues",
        cpf: "022.222.877-22",
    }

    const handleDeliveryOptionChange = (event) => {
        setDeliveryOption(Number(event.target.value));
    };

    return (
        <>
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
                                            <div>
                                                <p>Rua Santa Adelaide, 104</p>
                                                <span>Santa Etelvina, São Paulo - SP</span>
                                            </div>
                                        </div>
                                        <button>Alterar</button>
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
                </InfoContainer>
                <div>
                    <AdvertiseCard>
                        <div>
                            <div>
                                <img src={advertise.image} alt="Anuncio x" />
                            </div>
                            <div>
                                <h1>{advertise.name}</h1>
                                <span>{advertise.brand}</span>
                                <span>
                                    Vendido por: {seller.name.toUpperCase()}
                                    <br />
                                    CPF: {seller.cpf.substring(0, 3)}.***.***-**
                                </span>
                            </div>
                        </div>
                        <div>
                            <span>Total a pagar:</span>
                            <span>R${advertise.price}</span>
                        </div>
                    </AdvertiseCard>
                </div>
            </Container>
            <RedirectPayment>
                <span>Para realizar o pagamento você será redirecionado para o <span>Mercado pago</span></span>
                <button>Realizar Pagamento</button>
            </RedirectPayment>
        </>
    )
}