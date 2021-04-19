import React from 'react';
import {Link} from "react-router-dom";

function BlogTwoColumns({blitems}) {
    return (
        <>
            <div className="row">
                {blitems.map((item, i) => {
                    return (
                        <div className="col-lg-6 column-td-6" key={i}>
                            <div className="card-item blog-card">
                                <Link to={item.titleLink} className="card-image-wrap">
                                    <div className="card-image">
                                        <img src={item.img} alt="Blog Two Columns" className="card__img" />
                                    </div>
                                </Link>
                                <div className="card-content pl-0 pr-0">
                                    <Link to={item.titleLink} className="card-title">
                                        {item.title}
                                    </Link>
                                    <ul className="card-meta pl-0 d-flex justify-content-between align-items-center mt-2">
                                        <li>{item.date} - <a href={item.metaLink} className="tag__text">{item.meta}</a></li>
                                        <li><Link to="#">{item.likes} Likes</Link></li>
                                    </ul>
                                    <p className="card-sub mt-3">
                                        {item.desc}
                                    </p>
                                    <ul className="post-author d-flex align-items-center justify-content-between mt-3">
                                        <li>
                                            <img src={item.authorImg} alt="Author" />
                                            <span className="by__text"> By</span>
                                            <span> {item.author}</span>
                                        </li>
                                        <li>
                                            <Link to={item.readmoreLink} className="blog__btn">
                                                {item.readmore}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default BlogTwoColumns;
