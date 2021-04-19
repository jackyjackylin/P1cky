import React from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md'

const states = {
    title: 'Customer feedback'
}
function CustomerFeedback() {
    return (
        <>
            <div className="review-content-wrap">
                <h2 className="widget-title">
                    {states.title}
                </h2>
                <div className="title-shape"></div>
                <div className="review-content padding-top-45px padding-bottom-40px">
                    <div className="review-rating-summary">
                        <div className="review-rating-summary-inner">
                            <div className="stats-average__count">
                                <span className="stats-average__count-count">4.4</span>
                            </div>
                            <div className="stats-average__rating">
                                <div className="rating-rating d-flex">
                                    <span className="la ml-0"><MdStar /></span>
                                    <span className="la ml-0"><MdStar /></span>
                                    <span className="la ml-0"><MdStar /></span>
                                    <span className="la ml-0"><MdStar /></span>
                                    <span className="la ml-0"><MdStarHalf /></span>
                                </div>
                                <p className="stats-average__rating-rating"> (1.233)</p>
                            </div>
                        </div>
                        <div className="course-rating-text">
                            <p className="course-rating-text__text">Food Rating</p>
                        </div>
                    </div>
                    <div className="review-rating-widget">
                        <div className="review-rating-rate">
                            <ul>
                                <li className="review-rating-rate__items">
                                    <div className="review-rating-inner__item">
                                        <div className="review-rating-rate__item-text">5 stars</div>
                                        <div className="review-rating-rate__item-fill">
                                            <span className="review-rating-rate__item-fill__fill rating-fill-width1"></span>
                                        </div>
                                        <div className="review-rating-rate__item-percent-text">77 %</div>
                                    </div>
                                </li>
                                <li className="review-rating-rate__items">
                                    <div className="review-rating-inner__item">
                                        <div className="review-rating-rate__item-text">4 stars</div>
                                        <div className="review-rating-rate__item-fill">
                                            <span className="review-rating-rate__item-fill__fill rating-fill-width2"></span>
                                        </div>
                                        <div className="review-rating-rate__item-percent-text">54 %</div>
                                    </div>
                                </li>
                                <li className="review-rating-rate__items">
                                    <div className="review-rating-inner__item">
                                        <div className="review-rating-rate__item-text">3 stars</div>
                                        <div className="review-rating-rate__item-fill">
                                            <span className="review-rating-rate__item-fill__fill rating-fill-width3"></span>
                                        </div>
                                        <div className="review-rating-rate__item-percent-text">14 %</div>
                                    </div>
                                </li>
                                <li className="review-rating-rate__items">
                                    <div className="review-rating-inner__item">
                                        <div className="review-rating-rate__item-text">2 stars</div>
                                        <div className="review-rating-rate__item-fill">
                                            <span className="review-rating-rate__item-fill__fill rating-fill-width4"></span>
                                        </div>
                                        <div className="review-rating-rate__item-percent-text">5 %</div>
                                    </div>
                                </li>
                                <li className="review-rating-rate__items">
                                    <div className="review-rating-inner__item">
                                        <div className="review-rating-rate__item-text">1 stars</div>
                                        <div className="review-rating-rate__item-fill">
                                            <span className="review-rating-rate__item-fill__fill rating-fill-width5"></span>
                                        </div>
                                        <div className="review-rating-rate__item-percent-text">2 %</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerFeedback;
