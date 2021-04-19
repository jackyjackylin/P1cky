import React from 'react';
import {Link} from "react-router-dom";

function TeamOne({teams}) {
    return (
        <>
            {teams.map((item, i) => {
                return (
                    <div className="col-lg-3 column-td-6" key={i}>
                        <div className="team-item">
                            <div className="team-img">
                                <img src={item.img} alt="team-img" />
                                <svg className="img-svg-shape" version="1.1" width="100px" x="0px" y="0px" viewBox="0 0 74 7" >
                                    <path d="M57.7,5c-6.2-1.6-13.5-5-20.8-5c-7.2,0-14.4,3.3-20.5,4.8C11.2,6.1,5.3,6.7,0,7v0h72.4 C67.4,6.7,62.2,6.1,57.7,5z" />
                                </svg>
                            </div>
                            <div className="team-content">
                                <div className="team-bio mb-3">
                                    <h4 className="team__title">
                                        <Link to={item.titleUrl}>
                                            {item.title}
                                        </Link>
                                    </h4>
                                    <span className="team__meta">
                                        {item.stitle}
                                    </span>
                                </div>
                                <div className="team-social">
                                    <ul className="social-profile">
                                        {item.socials.map((social, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={social.url}>
                                                        <i className="fa">{social.icon}</i>
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default TeamOne;
