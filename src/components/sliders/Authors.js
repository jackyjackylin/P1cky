import React from 'react';
import {Link} from "react-router-dom";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const responsive = [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
function Authors({authoritems}) {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 p-0">
                    <Slider className="places-carousel author-slider pt-5" dots={false} infinite={true} slidesToScroll={1} arrows={true} slidesToShow={5} centerMode={false} centerPadding="50px" autoplay={false} responsive={responsive}>
                        {authoritems.map((item, index) => {
                            return (
                                <div className="author-item" key={index}>
                                    <div className="author-bio margin-bottom-30px">
                                        <Link to="#" className="d-flex align-items-center">
                                            <img src={item.authorImg} alt="Author" />
                                            <div className="author-inner-bio">
                                                <h4 className="author__title">
                                                    {item.authorName}
                                                </h4>
                                                <ul className="author__meta">
                                                    <li>
                                                        {item.city}
                                                    </li>
                                                    <li>
                                                        <span className={item.powerauthor?'author-type power-author' : 'author-type elite-author'}>
                                                            {item.authorStatus}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="author-action">
                                        <ul className="author__list">
                                            <li><span>Listings</span>{item.listingNum}</li>
                                            <li><span>Followers</span>{item.followers}</li>
                                            <li><span>Following</span>{item.following}</li>
                                        </ul>
                                    </div>
                                    <div className="author-btn">
                                        <button type="button" className="theme-btn radius-rounded w-100">
                                            <span>
                                                {item.buttonIcon}
                                            </span> {item.buttonTxt}
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Authors;
