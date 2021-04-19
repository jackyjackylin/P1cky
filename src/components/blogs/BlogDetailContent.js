import React from 'react';
import ListingDetailsComments from "../contact/ListingDetailsComments";
import BlogCommentFields from "./BlogCommentFields";
import BlogBlockquote from "./BlogBlockquote";
import {Link} from "react-router-dom";
import BlogTags from "./BlogTags";
import BlogShare from "./BlogShare";
import sectiondata from "../../store/store";

function BlogDetailContent() {
    return (
        <>
            <div className="card-item blog-card border-bottom-0">
                <div className="card-image">
                    <img src={sectiondata.blogDetails.img} alt="Blog" className="card__img"/>
                </div>
                <div className="card-content pl-0 pr-0 pb-0">
                    <ul className="post-author d-flex align-items-center justify-content-between mb-3">
                        <li>
                            <img src={sectiondata.blogDetails.authorImg} alt="" />
                                <span className="by__text">By</span>
                                <span> {sectiondata.blogDetails.author},</span>
                                <span>{sectiondata.blogDetails.date} - <Link to={sectiondata.blogDetails.metaLink} className="tag__text">{sectiondata.blogDetails.meta}</Link></span>
                        </li>
                        <li>
                            <Link to="#" className="blog__btn">
                                {sectiondata.blogDetails.likes} Likes
                            </Link>
                        </li>
                    </ul>
                    <h2 className="card-title font-size-26">
                        {sectiondata.blogDetails.title}
                    </h2>
                    <p className="card-sub mt-3">
                        {sectiondata.blogDetails.desc1}
                    </p>
                    <p className="card-sub mt-3">
                        {sectiondata.blogDetails.desc2}
                    </p>

                    <BlogBlockquote
                        bgImg={sectiondata.blogDetails.img}
                        quoteIcon={sectiondata.blogDetails.quoteIcon}
                        desc={sectiondata.blogDetails.quoteDesc}
                        name={sectiondata.blogDetails.name}
                        designation={sectiondata.blogDetails.designation} />

                    <p className="card-sub margin-top-30px">
                        {sectiondata.blogDetails.desc3}
                    </p>
                    <div className="image-fluid margin-top-30px">
                        <div className="row">
                            {sectiondata.blogDetails.images.map((img, i) => {
                                return (
                                    <div className="col-lg-4 column-td-6 mb-4" key={i}>
                                        <img src={img.img} alt="Blog" className="img-fluid radius-round" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <p className="card-sub mb-3">
                        {sectiondata.blogDetails.desc4}
                    </p>
                    <h3 className="widget-title">Storytelling</h3>
                    <p className="card-sub mb-3">
                        {sectiondata.blogDetails.desc4}
                    </p>
                    <h3 className="widget-title">Branding</h3>
                    <p className="card-sub">
                        {sectiondata.blogDetails.desc4}
                    </p>
                    <div className="section-block margin-top-30px margin-bottom-30px"></div>
                    <div className="tag-items d-flex justify-content-between">

                        <BlogTags taglists={sectiondata.blogDetails.bltags.lists} title={sectiondata.blogDetails.bltags.title} />

                        <BlogShare />

                    </div>
                    <div className="section-block margin-top-30px margin-bottom-50px"></div>
                    <div className="comments-wrap">
                        <h2 className="widget-title">3 Comments</h2>
                        <div className="title-shape"></div>

                        <ListingDetailsComments commentlists={sectiondata.listingDetails.comments} />

                    </div>
                    <div className="add-review-listing padding-top-50px">
                        <h2 className="widget-title">Add a Comment</h2>
                        <div className="title-shape"></div>
                        <div className="section-heading padding-top-10px">
                            <p className="sec__desc font-size-16">Your email address will not be published. Required fields are marked *</p>
                        </div>
                        <div className="contact-form-action mt-3">
                            <BlogCommentFields />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogDetailContent;
