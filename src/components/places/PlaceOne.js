import React from 'react';
import {IoIosLink} from 'react-icons/io'
import { AiOutlineEye, AiFillDollarCircle} from 'react-icons/ai'
import { FiPhone, FiHeart, FiX } from 'react-icons/fi'
import { FaMoneyBillWave } from 'react-icons/fa'
import { nanoid } from 'nanoid';
import Slider from "react-slick";
import {GiChickenOven} from 'react-icons/gi';
import {
    IoMdStar,
    IoMdStarHalf
} from "react-icons/io";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rating_to_star = [[],[ <IoMdStarHalf />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStarHalf />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStarHalf />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarHalf />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarHalf />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />]];

const responsive = [
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

function PlaceOne({places,toggleShowPop,showPop=false,nextItemId}) {

    return (
        <div className="row mt-5">
            <div className="col-lg-12">
                <Slider className="places-carousel"  dots={true} infinite={false} slidesToScroll={2} arrows={false} slidesToShow={3} centerMode={false} centerPadding="50px" autoplay={true} responsive={responsive}>
                    {places.map((item, index) => {
                        return (
                            <div className="card-item" key={index}>
                                <a href="#" className="card-image-wrap">
                                    <div className="card-image">
                                        <img src={item.image_url} width="362" height="242" className="card__img" alt="Place" />
                                        { <span className={item.is_close ? 'badge badge-closed': 'badge' }>{item.is_close ? "Close" : "Open"}</span> }
                                        <span className="badge-toggle" onClick={toggleShowPop} data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                            {showPop ? <FiX/> : <FiHeart/>}

                                        </span>  
                                    </div>
                                </a>
                                
                                <div className={`card-content-wrap  ${showPop ? "popup-window-content": ""}`}>
                                    <div className="card-content ">
                                        <a href="#">
                                            <h5 className="card-meta">
                                                <span>{<GiChickenOven />}</span> 
                                                <i key={nanoid()}>{item.categories[0].title.trim()} &amp; </i>
                                                <i key={nanoid()}>{item.categories[1].title.trim()}</i>
                                            </h5>
                                            <h4 className="card-title">{item.name}
                                                <i>{item.titleIcon}</i>
                                            </h4>
                                            <p className="card-sub">
                                                <i>{item.location.city}, {item.location.state} {item.location.zip_code}</i>
                                            </p>
                                        </a>
                                        <ul className="info-list padding-top-20px">
                                            <li><span className="la d-inline-block"><FiPhone /></span> {item.display_phone}</li>
                                            <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.url}>
                                                Link to Yelp
                                            </a>
                                            </li>
                                            <li>
                                                <span className="la d-inline-block"><FaMoneyBillWave />  </span> 
                                                {String(item.price).split('').map(()=> {
                                                    return (
                                                        <a key={nanoid()}> <AiFillDollarCircle /> </a>
                                                    )
                                                })}      
                                                          
                                            </li>
                                        </ul>
                                    </div> 
                                    <div className="rating-row">
                                        <div className="rating-rating">
                                            <span> {rating_to_star[parseFloat(item.rating)/0.5].map((rating, index) => {
                                                 return (
                                                     <span key={index}>{rating}</span>
                                                 )
                                             })}
                                             </span>
                                            <span className="rating-count">{parseFloat(item.rating)}</span>
                                        </div> 
                                        <div className="listing-info">
                                            <ul>
                                                <li><span className="info__count"><AiOutlineEye /></span> {item.review_count}</li>
                                                <li>
                                                    <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                                                        <FiHeart />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {showPop ? <button className="button theme-btn" type="submit" onClick={nextItemId}> Next</button>: ""}
                            </div>
                        )
                    })}
                    
                    
                </Slider>
                
            </div>
        </div>
    );
}

export default PlaceOne;
