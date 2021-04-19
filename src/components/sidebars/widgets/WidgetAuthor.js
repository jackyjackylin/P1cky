import React from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { FaRegEnvelope } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { FiPhone, FiExternalLink } from 'react-icons/fi'
import Button from "../../common/Button";

function WidgetAuthor({contents}) {
    return (
        <>
            <div className="sidebar-widget">
                <div className="author-bio margin-bottom-30px">
                    <div className="d-flex align-items-center">
                        <img src={contents.authorImg} alt="author" />
                        <div className="author-inner-bio">
                            <h4 className="author__title font-weight-bold pb-0 mb-1">
                                {contents.authorName}
                            </h4>
                            <p className="author__meta">
                                {contents.date}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="info-list">
                    <ul>
                        <li className="mb-2">
                            <i className="la"><GiPositionMarker /></i> {contents.address}
                        </li>
                        <li className="mb-2">
                            <i className="la"><FaRegEnvelope /></i> <a href={'mailto:'+contents.email}>
                            {contents.email}
                        </a>
                        </li>
                        <li className="mb-2">
                            <i className="la"><FiPhone /></i> {contents.number}
                        </li>
                        <li className="mb-2">
                            <i className="la"><FiExternalLink /></i> <a href={contents.websiteUrl}>{contents.website}</a>
                        </li>
                    </ul>
                </div>
                <div className="section-block-2 margin-top-35px margin-bottom-35px"></div>
                <ul className="social-profile margin-bottom-35px text-center">

                    {contents.socials.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url}>
                                    <i className="d-inline-block">
                                        {item.icon}
                                    </i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="btn-box text-center">
                    <Button text="view Profile" url="/user-profile" className="d-block">
                        <span className="d-inline-block"><AiOutlineUser /></span>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default WidgetAuthor;
