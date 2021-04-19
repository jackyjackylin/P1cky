import React from 'react';
import SectionDivider from "../../common/SectionDivider";
import { FiCheck } from 'react-icons/fi'
import {Link} from "react-router-dom";

function Plans({plans}) {
    return (
        <>
            <div className="row">
                {plans.map((item, i) => {
                    return (
                        <div className="col-lg-4" key={i}>
                            <div className={ item.active ? 'price-item pricing-active' : 'price-item' }>
                                <div className="price-head">
                                    <i className="fa price__icon">
                                        {item.icon}
                                    </i>
                                    <h3 className="price__title mt-3">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="price-content">
                                    <div className="price-number">
                                        <p className="price__value">
                                            <sup>{item.currency}</sup>{item.price}
                                        </p>
                                        <p className="price__subtitle">{item.mo}</p>
                                    </div>

                                    <SectionDivider />

                                    <div className="price-list-item">

                                        <ul className="list-items text-left">
                                            {item.features.map((ftitem, index) => {
                                                return (
                                                    <li key={index}>
                                                        <i className={'la ' + ftitem.iconClr}>{ftitem.icon}</i> {ftitem.title}
                                                    </li>
                                                )
                                            })}
                                        </ul>

                                        <div className="btn-box text-center margin-top-35px">
                                            <Link to={item.buttonUrl} className={item.active ? ('theme-btn w-100 button-success') : 'theme-btn w-100'}>
                                                {item.buttonTxt}
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                                {item.active ? (
                                    <div className="recommended-wrap padding-bottom-30px">
                                        <i className="la"><FiCheck /></i>
                                        <span>Recommended</span>
                                    </div>
                                ) : ''}

                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Plans;
