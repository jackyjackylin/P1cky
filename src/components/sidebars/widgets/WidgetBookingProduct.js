import React from 'react';
import {Link} from "react-router-dom";

function WidgetBookingProduct({img, title, subtitle, cardTypeIcon, cardType, badge, cardLink}) {
    return (
        <>
            <div className="card-item">
                <Link to={cardLink} className="card-image-wrap">
                    <div className="card-image">
                        <img src={img} className="card__img" alt="" />
                        <span className="badge">{badge}</span>
                    </div>
                </Link>
                <div className="card-content-wrap">
                    <div className="card-content">
                        <Link to={cardLink}>
                            <h5 className="card-meta"><span className="la">{cardTypeIcon}</span> {cardType}</h5>
                            <h4 className="card-title">{title}</h4>
                            <p className="card-sub">{subtitle}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WidgetBookingProduct;

