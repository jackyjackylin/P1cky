import React from 'react';
import {Link} from "react-router-dom";

function DreamPlaces({places}) {
    return (
        <>
            <div className="row mt-5">
                {places.map((item, index) => {
                    return (
                        <div className={'col-lg-'+item.cardColumn+' column-td-6'} key={index}>
                            <div className="category-item place-category mb-4 mt-0 ml-0 mr-0 p-0">
                                <figure className="category-fig m-0">
                                    <img src={item.img} alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <Link to={item.cardLink} className="cat-fig-box">
                                            <div className="cat-content">
                                                <h4 className="cat__title mb-2">
                                                    {item.country}
                                                </h4>
                                                <ul className="cat__place-list">
                                                    <li><span>{item.placeNum}</span> Cities</li>
                                                    <li><span>{item.listingNum}</span> Listing</li>
                                                </ul>
                                                <span className="badge">
                                                    {item.badge}
                                                </span>
                                            </div>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default DreamPlaces;
