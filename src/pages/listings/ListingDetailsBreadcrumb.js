import React, {useEffect} from 'react';
import { GiPositionMarker, GiChickenOven } from 'react-icons/gi'
import { MdStar, MdStarBorder, MdClose } from 'react-icons/md'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineFlag } from 'react-icons/ai'
import { FaRegMoneyBillAlt, FaFacebookF, FaTwitter, FaInstagram, FaTumblr, FaSnapchatGhost, FaGooglePlusG, FaPinterest, FaVk, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { RiBookmarkLine, RiExternalLinkLine, RiSendPlane2Line } from 'react-icons/ri'

import { Dropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
const state = {
    title: 'Tasty Hand-Pulled Noodles',
    stitle: '101 East Parkview Road, New York',
    shareLinks: [
        {
            icon: <FaFacebookF />,
            title: 'facebook',
            url: 'https://facebook.com'
        },
        {
            icon: <FaTwitter />,
            title: 'twitter',
            url: 'https://twitter.com'
        },
        {
            icon: <FaInstagram />,
            title: 'twitter',
            url: 'https://instagram.com'
        },
        {
            icon: <FaTumblr />,
            title: 'tumblr',
            url: 'https://tumblr.com'
        },
        {
            icon: <FaSnapchatGhost />,
            title: 'snapchat',
            url: 'https://snapchat.com'
        },
        {
            icon: <FaGooglePlusG />,
            title: 'google plus',
            url: 'https://plus.google.com'
        },
        {
            icon: <FaPinterest />,
            title: 'pinterest',
            url: 'https://pinterest.com'
        },
        {
            icon: <FaVk />,
            title: 'vkontakte',
            url: 'https://vkontakte.com'
        },
        {
            icon: <FaLinkedinIn />,
            title: 'linkedin',
            url: 'https://linkedin.com'
        },
        {
            icon: <FaYoutube />,
            title: 'youtube',
            url: 'https://youtube.com'
        }
    ]
}

function ListingDetailsBreadcrumb({title}) {
    useEffect(() => {
        const body = document.querySelector('body')

        function showReportModal() {
            body.classList.add('modal-open')
            body.style.paddingRight = '17px'
        }
        document.addEventListener('click', function (e) {
            for (
                let target = e.target;
                target && target !== this;
                target = target.parentNode
            ) {
                if (target.matches('.report-modal-btn')) {
                    showReportModal.call(target, e)
                    break
                }
            }
        }, false)
        function hideReportModal() {
            body.classList.remove('modal-open')
            body.style.paddingRight = '0'
        }
        document.addEventListener('click', function (e) {
            for (
                let target = e.target;
                target && target !== this;
                target = target.parentNode
            ) {
                if (target.matches('.report-modal-box .modal-bg, .report-modal-box .modal-top .close')) {
                    hideReportModal.call(target, e)
                    break
                }
            }
        }, false)
    })

    return (
        <>
            <section className="breadcrumb-area listing-detail-breadcrumb">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 position-relative">
                                <div className="breadcrumb-content">
                                    <h2 className="breadcrumb__title">
                                        {title}
                                    </h2>
                                    <p className="breadcrumb__desc">
                                        <span className="la d-inline-block"><GiPositionMarker /></span> {state.stitle}
                                    </p>
                                    <ul className="listing-info mt-3 mb-3">
                                        <li>
                                            <div className="theme-btn average-symble" data-toggle="tooltip" data-placement="top" title="Pricey">
                                                <span className="average-active">$$$</span>$$
                                            </div>
                                        </li>
                                        <li>
                                            <div className="average-ratings">
                                                <span className="theme-btn button-success mr-1">
                                                    4.2 <i className="d-inline-block"><MdStar /></i>
                                                </span>
                                                <span><strong>36</strong> Reviews</span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="theme-btn listing-tag">
                                                <i className="d-inline-block"><GiChickenOven /></i> Eat & Drink
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="listing-info">
                                        <li>
                                            <button type="button" className="theme-btn border-0">
                                                <i className="d-inline-block"><RiBookmarkLine /></i> save
                                            </button>
                                        </li>
                                        <li>
                                            <Dropdown className="dropdown share-dropmenu">
                                                <Dropdown.Toggle className="theme-btn dropdown-toggle border-0 after-none" id="dropdown-basic">
                                                    <i className="d-inline-block"><RiExternalLinkLine /></i> share
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu">
                                                    {state.shareLinks.map((item, index) => {
                                                        return (
                                                            <Dropdown.Item href={item.url} className={'dropdown-item '+item.title} key={index}>
                                                                <i className="d-inline-block">{item.icon}</i> {item.title}
                                                            </Dropdown.Item>
                                                        )
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li>
                                            <Link to="#" className="theme-btn">
                                                <span className="d-inline-block"><FaRegMoneyBillAlt /></span> reserve a seat
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="report-list-items">
                                    <ul className="listing-info">
                                        <li>
                                            <a href="#review" className="theme-btn">
                                                <i className="d-inline-block"><MdStarBorder /></i> write a review
                                            </a>
                                        </li>
                                        <li>
                                            <span className="theme-btn report-modal-btn">
                                                <i className="d-inline-block"><AiOutlineFlag /></i> report
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="bread-svg">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" />
                    </svg>
                </div>*/}
            </section>

            <div className="modal-form">
                <div className="modal fade report-modal-box bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-top">
                                <button type="button" className="close close-arrow" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="mb-0"><MdClose /></span>
                                </button>
                                <h4 className="modal-title"><span className="mb-0"><AiOutlineFlag /></span> Report this Listing</h4>
                            </div>
                            <div className="contact-form-action">
                                <form method="post">
                                    <div className="msg-box">
                                        <label className="label-text">Write Message</label>
                                        <div className="form-group">
                                            <i className="form-icon"><BsPencil /></i>
                                            <textarea className="message-control form-control" name="message" placeholder="What's wrong with this listing?" required></textarea>
                                        </div>
                                    </div>
                                    <div className="btn-box text-right">
                                        <button type="submit" className="theme-btn button-success border-0"><i><RiSendPlane2Line /></i> Send message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<TestVanillaJs />*/}

        </>
    );
}

export default ListingDetailsBreadcrumb;
