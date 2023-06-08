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

export default function Card(props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    function handleChangeHeart() {
        console.log("cliclou em curtir")
    }

    function handleChangeSaller() {
        console.log("cliclou no vendedor")
    }

    function handleChangeCard() {
        console.log("cliclou no card")
    }

    return (
        <>
            <CardContainer
                onClick={handleChangeCard}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    margin: props.margin ? props.margin : 0,
                    padding: props.padding ? props.padding : 0
                }}
            >
                <CardProfile>
                    <img src={props.image ? props.image : ImageDefault} alt={props.name} />
                </CardProfile>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ContainerDivs>

                        <InfoAdvertise style={!isHovering ? { opacity: 1 } : { opacity: 0 }}>
                            <h1>R${props.price}</h1>
                            <p>{props.name}</p>
                            <span>{props.brand}</span>
                        </InfoAdvertise>

                        <InfoSalle
                            onClick={handleChangeSaller}
                            style={!isHovering ? { opacity: 0 } : { opacity: 1 }}
                        >
                            <div>
                                <img src={props.sellerImageProfile ? props.sellerImageProfile : ImageDefault} alt={props.sellerName} />
                            </div>
                            <div>
                                <h1>{props.sellerName}</h1>
                                <p>{props.sellerCity}</p>
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