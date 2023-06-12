import React, { useEffect, useState, useContext } from "react";
import IconClose from "../assets/images/icon-close.svg";
import IconFilter from "../assets/images/icon-filter.svg";
import IconSearch from "../assets/images/icon-search.svg";
import { CoupleInputs, InputContainer, Label } from '../assets/styles/components/InputStyle';
import {
    ButtonOpenSideBarMobile,
    Checkbox,
    CloseButton,
    Container,
    ContainerAdvertise,
    ContainerCheckbox,
    Header,
    Input,
    OrdinationMobile,
    SelectOrdenation,
    SideBar,
    ResultSearch,
    ContainerSarchAndInput,
    Pagination
} from "../assets/styles/searchAdStyle";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { categoryOptions, colorOptions, qualityOptions } from "../utils/enums";
import { NumericFormat } from 'react-number-format';
import iconLocation from "../assets/images/icon-location.svg";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { url } from "../utils/request";
import { AuthContext } from "../utils/AuthContext";
import Loading from "../components/Loading";
import { errorAlert } from "../utils/alerts";
import { removeCurrencyFormatting } from "../utils/strings";
import NoContent from "../components/NoContent";

export default function SearchAd() {
    const [cardList, setCardList] = useState([]);
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [quality, setQuality] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [minValue, setMinValue] = useState('');
    const [ordination, setOrdination] = useState(1);
    const [city, setCity] = useState('');
    const [search, setSearch] = useState('');
    
    const [mobileSideBar, setMobileSideBar] = useState(false);
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const idUser = user.id;
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    async function loadFilters() {
        try {
            setLoading(true)

            var urlcontent = ""

            if (idUser !== 0) {
                urlcontent = `/searches/filter?title=${search}&idUser=${idUser}&page=${page}&size=50`
            } else {
                urlcontent = `/searches/filter?title=${search}&page=${page}&size=50`
            }

            await axios.post(`${url}${urlcontent}`, {
                city: city,
                priceMin: minValue !== '' ? removeCurrencyFormatting(minValue) : null,
                priceMax: maxValue !== '' ? removeCurrencyFormatting(maxValue) : null,
                quality: quality ? quality : null,
                category: category ? category : null,
                color: color ? color : null,
                filter: ordination
            }).then((response) => {
                const data = response.data.content
                setCardList(data)
            }).catch(() => {
                errorAlert("Ocorreu um erro ao filtrar o anúncio")
            })
        } catch (error) {
            errorAlert("Ocorreu um erro ao filtrar o anúncio")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const categoryParam = searchParams.get('category');
        const resultSearch = searchParams.get('resultSearch');

        if (resultSearch) {
            setSearch(resultSearch);
        }

        if (categoryParam) {
            console.log(categoryParam);
            setCategory(categoryParam);
        }

        loadFilters()

    }, [color,
        category,
        quality,
        maxValue,
        minValue,
        ordination,
        search,
        city])

    return (
        <>
            <Loading isEnabled={loading} />
            <Navbar type='principal' isAuthenticated={false} />
            <Container>
                <SideBar isOpen={mobileSideBar ? 'flex' : 'none'}>
                    <CloseButton>
                        <button onClick={() => { setMobileSideBar(!mobileSideBar) }}>
                            <img src={IconClose} alt="Fechar Edição de filtros" />
                        </button>
                    </CloseButton>
                    <OrdinationMobile>
                        <Label>Ordenar por:</Label>
                        <InputContainer>
                            <select id="color-select" value={ordination} onChange={(e) => { setOrdination(e.target.value) }}>
                                <option value="1">Mais recentes</option>
                                <option value="2">Mais antigo</option>
                                <option value="3">Menor preço</option>
                                <option value="4">Maior preço</option>
                            </select>
                        </InputContainer>
                    </OrdinationMobile>
                    <div>
                        <br />
                        <Label>Localização</Label>
                        <ContainerSarchAndInput>
                            <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                                <input
                                    placeholder="Digite sua cidade"
                                    onBlur={(e) => setCity(e.target.value)}
                                ></input>
                                <img src={iconLocation} alt="Digite sua cidade"
                                />
                            </InputContainer>
                        </ContainerSarchAndInput>
                    </div>
                    <div>
                        <Label>Preço</Label>
                        <CoupleInputs>
                            <div>
                                <span>Min:</span>
                                <NumericFormat
                                    value={minValue}
                                    onBlur={(e) => { setMinValue(e.target.value) }}
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    placeholder="R$ 0,00"
                                />
                            </div>
                            <div>
                                <span>Max:</span>
                                <NumericFormat
                                    value={maxValue}
                                    onBlur={(e) => { setMaxValue(e.target.value) }}
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    placeholder="R$ 0,00"
                                />
                            </div>
                        </CoupleInputs>
                    </div>
                    <div>
                        <Label>Qualidade do produto</Label>
                        <InputContainer>
                            <select id="color-select" value={quality} onChange={(e) => { setQuality(e.target.value) }}>
                                {qualityOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                        </InputContainer>
                    </div>
                    <div>
                        <Label>Categoria</Label>
                        <InputContainer>
                            <select id="color-select" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                                {categoryOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                        </InputContainer>
                    </div>
                    <div>
                        <Label>Cor</Label>
                        <InputContainer>
                            <select id="color-select" value={color} onChange={(e) => { setColor(e.target.value) }}>
                                {colorOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </InputContainer>
                    </div>
                </SideBar>
                <div>
                    <Header>
                        <ContainerSarchAndInput>
                            <Input>
                                <input
                                    onChange={(e) => handleSearch(e)}
                                    value={search}
                                    placeholder="O que você gostaria de encontrar hoje?"
                                />
                                <img src={IconSearch} alt="Pesquise por anuncios" />
                            </Input>
                        </ContainerSarchAndInput>
                        <SelectOrdenation>
                            <img src={IconFilter} alt="Ordenar" />
                            <select id="color-select" value={ordination} onChange={(e) => { setOrdination(e.target.value) }}>
                                <option value="1">Mais recentes</option>
                                <option value="2">Mais antigo</option>
                                <option value="3">Menor preço</option>
                                <option value="4">Maior preço</option>
                            </select>
                        </SelectOrdenation>
                        <ButtonOpenSideBarMobile onClick={() => setMobileSideBar(!mobileSideBar)}>
                            Ordenar e filtrar
                        </ButtonOpenSideBarMobile>
                    </Header>
                    <ContainerAdvertise>
                        {cardList && cardList.length > 0 ?
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
                                    isSelectedHeart={card.adversiments && card.adversiments.isLike}
                                    likeId={card.adversiments && card.adversiments.likeId ? card.adversiments.likeId : ''}
                                />
                            ))
                            :
                            <NoContent
                                message="Sem anúncios para este filtro"
                                accessibilityMessage="Sem anúncios para este filtro"
                            />
                        }
                    </ContainerAdvertise>
                    {
                        cardList && cardList.length >= 50 ?
                            <Pagination onClick={() => { setPage(page + 1) }}>
                                <p>NÃO ACHOU O QUE BUSCAVA?</p>
                                <button>Carregar mais</button>
                            </Pagination>
                            :
                            <></>
                    }
                </div>
            </Container>
        </>
    )
}