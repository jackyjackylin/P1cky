import React from 'react';
import Button from "../../common/Button";
import { BsEye } from 'react-icons/bs'
import {Link} from "react-router-dom";

function WidgetPopularPost({ppitems}) {
    return (
        <div>
            <div className="sidebar-widget similar-widget">
                {ppitems.title ? (
                    <h3 className="widget-title">{ppitems.title}</h3>
                ) : ''}
                <div className="title-shape"></div>
                <div className="similar-list padding-top-30px">

                    {ppitems.items.map((item, i) => {
                        return (
                            <div key={i} className="recent-item mb-3">
                                <div className="recent-img">
                                    <Link to={item.titleLink}>
                                        <img src={item.img} alt="blog" />
                                    </Link>
                                </div>
                                <div className="recentpost-body">
                                    <h4 className="recent__link">
                                        <Link to={item.titleLink}>{item.title}</Link>
                                    </h4>
                                    <p className="recent__meta">{item.date} by <a href={item.authorUrl}>{item.author}</a></p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="btn-box text-center padding-top-30px">
                    <Button url="#" text="view all posts" className=" d-block">
                        <span><BsEye /></span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default WidgetPopularPost;
