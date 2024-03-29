import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Item
} from "../assets/styles/components/carrouselStyle";
import { useNavigate } from 'react-router-dom';

export default function Carrousel(props) {
    let items = props.items
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };

    let navigate = useNavigate();

    return (
        <>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <Item key={index} onClick={() => {navigate(`/buscar-anuncios?category=${item.value}`)}}>
                        <p>{item.title}</p>
                    </Item>
                ))}
            </Slider>
        </>
    );
};
