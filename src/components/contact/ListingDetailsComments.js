import React from 'react';
import { FiThumbsUp, FiRefreshCw } from 'react-icons/fi'
import { FaRegSmile } from 'react-icons/fa'
import Button from "../common/Button";
import SectionDivider from "../common/SectionDivider";
import {Link} from "react-router-dom";

function ListingDetailsComments({commentlists}) {
    return (
        <>
            <ul className="comments-list padding-top-40px">
                <li>

                    {commentlists.map((item, i) => {
                        return (
                            <div key={i}>
                                <div className="comment">
                                    <img className="avatar__img" alt="Comment" src={item.img} />
                                    <div className="comment-body">
                                        <div className="meta-data">
                                            <span className="comment__author">
                                                {item.name}
                                            </span>
                                            <span className="comment__date">
                                                {item.date}
                                            </span>
                                            <div className="rating-rating">
                                                {item.stars.map((star, index) => {
                                                    return <span key={index} className="la la-star">{star}</span>
                                                })}
                                            </div>
                                        </div>
                                        <p className="comment-content">
                                            {item.content}
                                        </p>
                                        <div
                                            className="comment-reply d-flex justify-content-between align-items-center">
                                            <Link className="theme-btn comment__btn" to="#">
                                                <i className="la d-inline-block">{item.replyBtnIcon}</i> {item.replyBtn}
                                            </Link>
                                            <p className="feedback-box">
                                                Was this review?
                                                <button type="button" className="theme-btn">
                                                    <i className="la d-inline-block"><FiThumbsUp /></i> Helpful
                                                </button>
                                                <button type="button" className="theme-btn">
                                                    <i className="la d-inline-block"><FaRegSmile /></i> Funny
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {item.replyComments ? (
                                    item.replyComments.map((item2, index2) => {
                                        return (
                                            <ul className="comments-reply" key={index2}>
                                                <li>
                                                    <div className="comment">
                                                        <img className="avatar__img" alt="Comment" src={item2.img} />
                                                        <div className="comment-body">
                                                            <div className="meta-data">
                                                                <span className="comment__author">
                                                                    {item2.name}
                                                                </span>
                                                                <span className="comment__date">
                                                                    {item2.date}
                                                                </span>
                                                                <div className="rating-rating">
                                                                    {item2.stars.map((star, index3) => {
                                                                        return <span key={index3} className="la la-star">{star}</span>
                                                                    })}
                                                                </div>
                                                            </div>
                                                            <p className="comment-content">
                                                                {item2.content}
                                                            </p>
                                                            <div
                                                                className="comment-reply d-flex justify-content-between align-item2s-center">
                                                                <Link className="theme-btn comment__btn" to="#">
                                                                    <i className="la d-inline-block">{item2.replyBtnIcon}</i> {item2.replyBtn}
                                                                </Link>
                                                                <p className="feedback-box">
                                                                    Was this review?
                                                                    <button type="button" className="theme-btn">
                                                                        <i className="la d-inline-block"><FiThumbsUp /></i> Helpful
                                                                    </button>
                                                                    <button type="button" className="theme-btn">
                                                                        <i className="la d-inline-block"><FaRegSmile /></i> Funny
                                                                    </button>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        )
                                    })
                                ) : ''}

                            </div>
                        )
                    })}
                </li>
            </ul>
            <SectionDivider />
            <div className="button-shared padding-top-40px text-center">
                <Button url="#" text="Load more review" className="border-0">
                    <FiRefreshCw />
                </Button>
            </div>
        </>
    );
}

export default ListingDetailsComments;
