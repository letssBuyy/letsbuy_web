import React, { useState } from "react";
import IconClose from "../assets/images/icon-close.svg";
import IconFilter from "../assets/images/icon-filter.svg";
import IconSearch from "../assets/images/icon-search.svg";
import ImageDefault from '../assets/images/image-default.png';
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
    ContainerSarchAndInput
} from "../assets/styles/searchAdStyle";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { categoryOptions, colorOptions } from "../utils/enums";
import { NumericFormat } from 'react-number-format';
import iconLocation from "../assets/images/icon-location.svg"

export default function SearchAd() {
    const [cardList, setCardList] = useState([1, 2, 3, 4, 5]);
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [newQuality, setNewQuality] = useState(false);
    const [semiNewQuality, setSemiNewQuality] = useState(false);
    const [usedQuality, setUsedQuality] = useState(false);
    const [deffectiveQuality, setDeffectiveQuality] = useState(false);
    const [mobileSideBar, setMobileSideBar] = useState(false);
    const [maxValue, setMaxValue] = useState('');
    const [minValue, setMinValue] = useState('');
    const [ordination, setOrdination] = useState('');

    const [search, setSearch] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [contentResult, setContentResult] = useState([]);

    const [localization, setLocalization] = useState('')
    const [showLocation, setShowLocation] = useState('');
    const [contentLocationResult, setContentLocationResult] = useState('');

    function handleClickSeller() {
        console.log('clicou no vendedor')
    }

    function handleClickCard() {
        console.log('clicou no card')
    }

    const [isSelectedHeart, setIsSelectedHeart] = useState(false)
    function handleClickHeart() {
        setIsSelectedHeart(!isSelectedHeart)
    }

    function handleChangeNewQuality() {
        setNewQuality(!newQuality)
    }

    function handleChangeUsedQuality() {
        setUsedQuality(!usedQuality)
    }

    function handleChangeSemiNewQualityy() {
        setSemiNewQuality(!semiNewQuality)
    }

    function handleChangeDeffectiveQuality() {
        setDeffectiveQuality(!deffectiveQuality)
    }

    function handleChangeMobileSideBar() {
        setMobileSideBar(!mobileSideBar)
    }

    function handleSearch(e) {
        setSearch(e.target.value)


        if (search.length > 2) {
            setShowResult(true)
            searchResults()
        } else {
            setShowResult(false)
        }
    }

    function searchResults() {
        setContentResult([])
    }

    function handleLocation(e) {
        setLocalization(e.target.value)
        
        if (localization.length > 2) {
            setShowLocation(true)
            searchLocation()
        } else {
            setShowLocation(false)
        }
    }

    function searchLocation() {
        setContentLocationResult([])
    }


    return (
        <>
            <Navbar type='principal' isAuthenticated={false} />
            <Container>
                <SideBar isOpen={mobileSideBar ? 'flex' : 'none'}>
                    <CloseButton>
                        <button onClick={() => { handleChangeMobileSideBar() }}>
                            <img src={IconClose} alt="Fechar Edição de filtros" />
                        </button>
                    </CloseButton>
                    <OrdinationMobile>
                        <Label>Ordenar por:</Label>
                        <InputContainer>
                            <select id="color-select" value={color} onChange={(e) => { setOrdination(e.target.value) }}>
                                <option>Mais recentes</option>
                                <option>Menor preço</option>
                                <option>Maior preço</option>
                            </select>
                        </InputContainer>
                    </OrdinationMobile>
                    <div>
                        <br />
                        <Label>Localização</Label>
                        <ContainerSarchAndInput>
                            <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                                <input
                                    type="text"
                                    placeholder="Digite seu estado ou cidade"
                                    onChange={(e) => handleLocation(e)}
                                ></input>
                                <img src={iconLocation} alt="Digite a localização"
                                />
                            </InputContainer>
                            <ResultSearch style={showLocation ? { display: 'flex' } : { display: 'none' }}>
                                {
                                    contentLocationResult.length > 0 ?
                                        contentLocationResult.map((item) => (
                                            <div>
                                                <p>{item.title}</p>
                                            </div>
                                        ))
                                        :
                                        <>
                                            <div>
                                                <p>Sem resultados para essa busca</p>
                                            </div>
                                        </>
                                }
                            </ResultSearch>
                        </ContainerSarchAndInput>
                    </div>
                    <div>
                        <Label>Preço</Label>
                        <CoupleInputs>
                            <div>
                                <span>Min:</span>
                                <NumericFormat
                                    value={minValue}
                                    onChange={(e) => { setMinValue(e.target.value) }}
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
                                    onChange={(e) => { setMaxValue(e.target.value) }}
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
                        <br />
                        <br />
                        <ContainerCheckbox>
                            <Checkbox
                                type="checkbox"
                                checked={newQuality}
                                onChange={handleChangeNewQuality}
                            />
                            <p>Novo</p>
                        </ContainerCheckbox>
                        <ContainerCheckbox>
                            <Checkbox
                                type="checkbox"
                                checked={semiNewQuality}
                                onChange={handleChangeSemiNewQualityy}
                            />
                            <p>Semi Novo</p>
                        </ContainerCheckbox>
                        <ContainerCheckbox>
                            <Checkbox
                                type="checkbox"
                                checked={usedQuality}
                                onChange={handleChangeUsedQuality}
                            />
                            <p>Usado</p>
                        </ContainerCheckbox>
                        <ContainerCheckbox>
                            <Checkbox
                                type="checkbox"
                                checked={deffectiveQuality}
                                onChange={handleChangeDeffectiveQuality}
                            />
                            <p>Defeituoso</p>
                        </ContainerCheckbox>
                    </div>
                    <div>
                        <Label>Categoria</Label>
                        <InputContainer>
                            <select id="color-select" value={color} onChange={(e) => { setCategory(e.target.value) }}>
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
                                    placeholder="O que você gostaria de encontrar hoje?"
                                />
                                <img src={IconSearch} alt="Pesquise por anuncios" />
                            </Input>
                            <ResultSearch style={showResult ? { display: 'flex' } : { display: 'none' }}>
                                {
                                    contentResult.length > 0 ?
                                        contentResult.map((item) => (
                                            <div>
                                                <p>{item.title}</p>
                                            </div>
                                        ))
                                        :
                                        <>
                                            <div>
                                                <p>Sem resultados para essa busca</p>
                                            </div>
                                        </>
                                }
                            </ResultSearch>
                        </ContainerSarchAndInput>


                        <SelectOrdenation>
                            <img src={IconFilter} alt="Ordenar" />
                            <select>
                                <option>Mais recentes</option>
                                <option>Menor preço</option>
                                <option>Maior preço</option>
                            </select>
                        </SelectOrdenation>
                        <ButtonOpenSideBarMobile onClick={() => handleChangeMobileSideBar()}>
                            Ordenar e filtrar
                        </ButtonOpenSideBarMobile>
                    </Header>
                    <ContainerAdvertise>
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
                    </ContainerAdvertise>
                </div>
            </Container>
        </>
    )
}