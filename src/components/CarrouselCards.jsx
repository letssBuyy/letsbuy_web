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
                            id={item.adversiments && item.adversiments.id ? item.adversiments.id : ''}
                            idSeller={item.adversiments && item.adversiments.userSellerLikeDto ? item.adversiments.userSellerLikeDto.id : ''}
                            image={item.adversiments && item.adversiments.images && item.adversiments.images.length > 0 ? item.adversiments.images[0].url : null}
                            price={item.adversiments && item.adversiments.price}
                            name={item.adversiments && item.adversiments.title}
                            brand={item.adversiments && item.adversiments.category}
                            sellerName={item.adversiments && item.adversiments.userSellerLikeDto ? item.adversiments.userSellerLikeDto.name : ''}
                            sellerCity={item.adversiments && item.adversiments.userSellerLikeDto ? item.adversiments.userSellerLikeDto.city : ''}
                            sellerState={item.adversiments && item.adversiments.userSellerLikeDto ? item.adversiments.userSellerLikeDto.state : ''}
                            sellerImageProfile={item.adversiments && item.adversiments.userSellerLikeDto ? item.adversiments.userSellerLikeDto.profileImage : ''}
                            isSelectedHeart={item.adversiments && item.adversiments.isLike}
                            likeId={item.adversiments && item.adversiments.likeId ? item.adversiments.likeId : undefined}
                        />
                    </Item>
                ))}
            </Slider>
        </>
    );
};
