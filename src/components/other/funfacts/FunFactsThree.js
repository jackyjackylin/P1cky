import React from 'react';
import CountUp from "react-countup";

function FunFactsThree({items}) {
    return (
        <>
            {items.map(item => {
                return (
                    <div className="col-lg-3 column-td-6" key={item.id}>
                        <div className="counter-item">
                            <div className={'counter-number after-none fun-bg'+item.id}>
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
                            <div className="counter-content padding-top-20px">
                                <p className="counter__title font-size-16 color-text-2">New Visitors Every Week</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default FunFactsThree;
