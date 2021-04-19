import React from 'react';
import CountUp from 'react-countup';
import {Link} from "react-router-dom";

function FunFactsTwo({funfactitems}) {
    return (
        <>
            <div className="row mt-5">
                {funfactitems.map(item => {
                    return (
                        <div className="col-lg-3 column-td-6" key={item.id}>
                            <div className={'counter-item counter-item-layout-2 count-bg-'+item.id}>
                                <div className="counter-number">
                                    <span className="counter">
                                        <CountUp
                                            start={item.start}
                                            end={item.end}
                                            duration={item.duration}
                                            separator={item.separator}
                                            decimal={item.decimal}
                                            prefix={item.prefix}
                                            suffix={item.suffix}
                                        />
                                    </span>
                                </div>
                                <div className="counter-content padding-top-10px">
                                    <p className="counter__title">{item.title}</p>
                                </div>
                                <div className="counter-btn margin-top-50px">
                                    <Link to={item.buttonUrl} className="theme-btn radius-rounded">
                                        {item.buttonTxt}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    );
}

export default FunFactsTwo;
