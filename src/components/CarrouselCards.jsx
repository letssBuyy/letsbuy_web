import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Item
} from "../assets/styles/components/carrouselCards"
import Card from "./Card";

export default function CarouselCards(props) {
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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <Item key={index}>
                        <Card
                            key={index}
                            image={item.image}
                            price={item.price}
                            name={item.name}
                            brand={item.brand}
                            sellerName={item.sellerName}
                            sellerCity={item.sellerCity}
                            sellerIsVerify={item.sellerIsVerify}
                            sellerImageProfile={item.sellerImageProfile}
                            isSelectedHeart={item.isSelectedHeart}
                            onClickHeart={item.onClickHeart}
                            onClickSeller={item.onClickSeller}
                            onClickCard={item.onClickCard}
                            margin={'5px'}
                        />
                    </Item>
                ))}
            </Slider>
        </>
    );
};
