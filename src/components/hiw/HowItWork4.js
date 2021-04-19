import React from 'react';

function HowItWork4({items}) {
    return (
        <>
            {items.map((item, i) => {
                return (
                    <div className="col-lg-4 column-td-6" key={i}>
                        <div className="icon-box icon-box-layout icon-box-layout-3">
                            <div className="info-icon section-bg-3 text-white">
                                <span className="la">{item.icon}</span>
                            </div>
                            <div className="info-content">
                                <h4 className="info__title">
                                    {item.title}
                                </h4>
                                <p className="info__desc">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default HowItWork4;
