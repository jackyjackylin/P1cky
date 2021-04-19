import React from 'react';
import CountUp from 'react-countup';

function FunFactsOne({countitems}) {
    return (
        <div className="row mt-5">
            {countitems.map((item, index) => {
                return (
                    <div className="col-lg-3 column-td-6" key={index}>
                        <div className="counter-item">
                            <div className={'counter-number fun-bg'+item.id}>
                                <span className="counter">
                                    <CountUp start={item.start}
                                             end={item.end}
                                             duration={item.duration}
                                             separator={item.separator}
                                             decimal={item.decimal}
                                             prefix={item.prefix}
                                             suffix={item.suffix}
                                    />
                                </span>
                            </div>
                            <div className="counter-content padding-top-20px">
                                <p className="counter__title">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default FunFactsOne;
