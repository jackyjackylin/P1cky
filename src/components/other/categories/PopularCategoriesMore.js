import React from 'react';
import {Link} from "react-router-dom";

export default function PopularCategoriesMore({catitems}) {
    return (
        <>
            {catitems.map((item, index) => {
                return (
                    <div className="col-lg-3 column-td-6" key={index}>
                        <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                            <figure className="category-fig m-0">
                                <img src={item.img} alt="category" className="cat-img" />
                                <figcaption className="fig-caption">
                                    <Link to={item.url} className="cat-fig-box">
                                        <div className="icon-element mb-3">
                                            {item.icon}
                                        </div>
                                        <div className="cat-content">
                                            <h4 className="cat__title mb-3">{item.title}</h4>
                                            <span className="badge">{item.stitle}</span>
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
