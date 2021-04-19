import React from 'react';
import {Link} from "react-router-dom";

function ImageBox({items}) {
    return (
        <>
            <div className="row">
                {items.map((item, i) => {
                    return (
                        <div className="col-lg-4 column-td-6" key={i}>
                            <div className="card-item blog-card border-bottom-0">
                                <Link to={item.cardLink} className="card-image-wrap">
                                    <div className="card-image after-none">
                                        <img src={item.img} alt="Blog" className="card__img radius-round" />
                                    </div>
                                </Link>
                                <div className="card-content pt-4 pl-0 pr-0 pb-0">
                                    <Link to={item.cardLink} className="card-title">
                                        {item.title}
                                    </Link>
                                    <p className="card-sub mt-2">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default ImageBox;
