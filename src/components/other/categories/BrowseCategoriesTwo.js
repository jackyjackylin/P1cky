import React from 'react';
import {Link} from "react-router-dom";

function BrowseCategoriesTwo({catitems}) {
    return (
        <>
            <div className="row mt-5">
                {catitems.map((item,index) => {
                    return (
                        <div className="col-lg-2 column-td-6" key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <figure className="category-fig m-0">
                                    <img src={item.img} alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <Link to={item.cardLink} className="cat-fig-box">
                                            <div className="icon-element mb-3">
                                                <span className="d-inline-block">
                                                    {item.icon}
                                                </span>
                                            </div>
                                            <div className="cat-content">
                                                <h4 className="cat__title">
                                                    {item.title}
                                                </h4>
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

export default BrowseCategoriesTwo;
