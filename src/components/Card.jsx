import React, { useState } from "react";
import Heart from '../assets/images/icon-heart.svg';
import HeartSelected from '../assets/images/icon-heart-selected.svg';
import ImageDefault from '../assets/images/image-default.png';
import {
    CardContainer,
    CardProfile,
    InfoAdvertise,
    InfoSalle,
    ContainerDivs,
    HeartIcon
} from '../assets/styles/components/cardStyle';
import { useNavigate } from 'react-router-dom';
import { findByCategory } from "../utils/enums"

export default function Card(props) {
    const [isHovering, setIsHovering] = useState(false);
    let navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    function handleChangeHeart() {
        console.log("cliclou em curtir")
    }

    function handleChangeSeller() {
        navigate(`/perfil/${props.idSeller}`)
    }

    function handleChangeCard() {
        navigate(`/anuncio/${props.id}`)
    }

    return (
        <>
            <CardContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    margin: props.margin ? props.margin : "5px",
                    padding: props.padding ? props.padding : 0
                }}
            >
                <CardProfile onClick={handleChangeCard}>
                    <img src={props.image ? props.image : ImageDefault} alt={props.name ? props.name : ""} />
                </CardProfile>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ContainerDivs>

                        <InfoAdvertise style={!isHovering ? { opacity: 1 } : { opacity: 0 }} onClick={handleChangeCard}>
                            <h1>R${props.price ? props.price : ""}</h1>
                            <p>{props.name ? props.name : ""}</p>
                            <span>{props.brand ? findByCategory(props.brand) : ""}</span>
                        </InfoAdvertise>

                        <InfoSalle
                            onClick={handleChangeSeller}
                            style={!isHovering ? { opacity: 0 } : { opacity: 1 }}
                        >
                            <div>
                                <img src={props.sellerImageProfile ? props.sellerImageProfile : ImageDefault} alt={props.sellerName} />
                            </div>
                            <div>
                                <h1>{props.sellerName ? props.sellerName : ""}</h1>
                                <p>{props.sellerCity ? props.sellerCity : ""}</p>
                            </div>
                        </InfoSalle>
                    </ContainerDivs>
                    <HeartIcon onClick={handleChangeHeart}>
                        {
                            props.isSelectedHeart ?
                                <img src={HeartSelected} alt="Descurtir" />
                                :
                                <img src={Heart} alt="Curtir" />
                        }
                    </HeartIcon>
                </div>
            </CardContainer>
        </>
    )
}