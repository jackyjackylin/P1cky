import React from 'react';
import {Link} from "react-router-dom";

function PopularDestination({destinations}) {
    return (
        <>
            {destinations.map((item, index) =>{
                return (
                    <div className={'column-td-6 col-lg-'+item.boxCol} key={index}>
                        <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                            <figure className="category-fig mb-0">
                                <img src={item.img} alt="category" className="cat-img" />
                                <figcaption className="fig-caption">
                                    <Link to={item.cardUrl}
                                       className="cat-fig-box d-flex justify-content-between align-items-center">
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-2">
                                                {item.cityName}
                                            </h4>
                                            <span className="badge">
                                                {item.listingTxt}
                                            </span>
                                        </div>
                                        <div className="loc-img">
                                            <img src={item.cityFlag} alt={item.cityName} />
                                        </div>
                                    </Link>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default PopularDestination;
