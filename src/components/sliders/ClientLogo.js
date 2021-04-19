import React from 'react';
import Slider from "react-slick";

const responsive = [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
function ClientLogo({logos}) {
    return (
        <>
            <section className="clientlogo-area padding-top-80px padding-bottom-80px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider className="places-carousel client-logo text-center" dots={false} infinite={true} arrows={false} slidesToScroll={2} slidesToShow={6} draggable={true} centerMode={false} centerPadding="50px" responsive={responsive}>
                            {logos.map((slider, index) => {
                                return (
                                    <div className="client-logo-item" key={index}>
                                        <img src={slider} alt="Client Logo" />
                                    </div>
                                )
                            })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ClientLogo;
