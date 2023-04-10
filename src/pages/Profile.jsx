import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Verify from '../assets/images/icon-verify.svg';
import Filter from '../assets/images/icon-filter.svg';
import ImageDefault from '../assets/images/image-default.png';
import {
    ProfileIcon,
    Container,
    InfoUser,
    BoxText,
    TabButton,
    TabContainer,
    ContainerAdvertise,
    OrdinationSelect,
    ListAdvertise
} from '../assets/styles/profileStyle';
import Card from "../components/card";

export default function Profile() {
    const [name, setName] = useState('Ana Julia')
    const [city, setCity] = useState('São Paulo')
    const [state, setState] = useState('SP')
    const [subscribeSince, setSubscribeSince] = useState('2023')
    const [profileIcon, setProfileIcon] = useState('');
    const [userVerify, setUserVerify] = useState(true);

    const [ordination, setOrdination] = useState('mais_recentes"');
    const [selectedTab, setSelectedTab] = useState(1);

    const [cardList, setCardList] = useState([1,2,3,4,5])

    const handleSelectChange = (event) => {
        setOrdination(event.target.value);
    };

    const handleTabClick = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    useEffect(() => {
        load()
    }, [])

    function load() {

    }

    const [isSelectedHeart, setIsSelectedHeart] = useState(false)
    function handleClickHeart() {
        setIsSelectedHeart(!isSelectedHeart)
    }

    function handleClickSeller() {
        console.log('clicou no vendedor')
    }

    function handleClickCard() {
        console.log('clicou no card')
    }

    return (
        <>
            <Navbar type='principal' isAuthenticated={false} />
            <Container>
                <InfoUser>
                    <ProfileIcon>
                        <img src={profileIcon !== "" ? profileIcon : ImageDefault} alt={name} />
                    </ProfileIcon>
                    <BoxText>
                        <h1>{name}</h1>
                        {
                            userVerify ?
                                <div>
                                    <img src={Verify} alt="Vendedor verificado" />

                                    <span>Vendedor verificado</span>
                                </div>
                                :
                                <div></div>
                        }

                        <span>{city}, {state} | na LetsBuy desde {subscribeSince}</span>
                    </BoxText>
                </InfoUser>
                <ContainerAdvertise>
                    <div>
                        <TabContainer>
                            <TabButton
                                selected={selectedTab === 1}
                                onClick={() => handleTabClick(1)}
                                style={{ borderRadius: '5px 0px 0px 5px' }}>
                                Á venda
                            </TabButton>
                            <TabButton
                                selected={selectedTab === 2}
                                onClick={() => handleTabClick(2)}
                                style={{ borderRadius: '0px 5px 5px 0px' }}
                            >
                                Vendidos
                            </TabButton>
                        </TabContainer>
                        <OrdinationSelect>
                            <img src={Filter} alt="Selecione o tipo de filtro" />
                            <select value={ordination} onChange={handleSelectChange}>
                                <option value="mais_recentes">Mais recentes</option>
                                <option value="mais_relevantes">Mais relevantes</option>
                                <option value="maior_preco">Maior preço</option>
                                <option value="menor_preco">Menor preço</option>
                            </select>
                        </OrdinationSelect>
                    </div>
                    <ListAdvertise>
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
                        
                    </ListAdvertise>
                </ContainerAdvertise>
            </Container>
        </>
    )
}