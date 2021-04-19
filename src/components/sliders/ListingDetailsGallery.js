import React, {useState, useEffect} from 'react';
import Slider from "react-slick";

import img1 from '../../assets/images/img4.jpg';
import dotimg1 from '../../assets/images/g-img1.jpg';



import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



function ListingDetailsGallery() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    });

    const state = {
        title: 'Gallery',
        items: [
            {
                img: img1,
            },
            {
                img: img1,
            },
            {
                img: img1,
            },
            {
                img: img1,
            },
            {
                img: img1,
            },
            {
                img: img1,
            },
        ],
        slideDots: [
            {
                img: dotimg1
            },
            {
                img: dotimg1
            },
            {
                img: dotimg1
            },
            {
                img: dotimg1
            },
            {
                img: dotimg1
            },
            {
                img: dotimg1
            }
        ]
    }
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        className: 'places-carousel gallery-carousel padding-top-35px'
    };
    const settingsThumbs = {
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <>
            <h2 className="widget-title">
                {state.title}
            </h2>
            <div className="title-shape"></div>
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
            >
                {state.items.map((slide, i) => {
                    return (
                        <div key={i} className="gallery-item">
                            <img src={slide.img} alt="Gallery" />
                        </div>
                    )
                })}
            </Slider>

            <div className="gallery-carousel-dots">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>
                    {state.slideDots.map((slide, i) => {
                        return (
                            <div key={i}>
                                <img src={slide.img} alt=""/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    );
}

export default ListingDetailsGallery;
