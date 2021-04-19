import React from 'react';
import { BsEye } from 'react-icons/bs'
import Button from "../../common/Button";
import {Link} from "react-router-dom";

function WidgetSimilarListing({similarcontent}) {
    return (
        <>
            <div className="sidebar-widget similar-widget">
                <h3 className="widget-title">
                    {similarcontent.title}
                </h3>
                <div className="title-shape"></div>
                <div className="similar-list padding-top-30px">

                    {similarcontent.items.map((item, i) => {
                        return (
                            <div className="recent-item" key={i}>
                                <div className="recent-img">
                                    <Link to={item.titleUrl}>
                                        <img src={item.img} alt="blog" />
                                    </Link>
                                </div>
                                <div className="recentpost-body">
                                    <h4 className="recent__link">
                                        <Link to={item.titleUrl}>
                                            {item.title}
                                        </Link>
                                    </h4>
                                    <div className="rating-rating">

                                        {item.stars.map((icon, i) => {
                                            return <span key={i} className="la la-star">{icon}</span>
                                        })}

                                    </div>
                                    <p className="recent__meta">
                                        <span className="color-text font-weight-bold">{item.price}</span> <Link to={item.catUrl}>{item.cat}</Link>
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="btn-box text-center padding-top-30px">
                    <Button text="see all listings" url="/listing-grid" className="d-block">
                        <BsEye />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default WidgetSimilarListing;
