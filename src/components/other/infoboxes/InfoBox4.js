import React from 'react';

function InfoBox4({infoitems}) {
    return (
        <>
            <div className="row mt-5">
                {infoitems.map((item, index) => {
                    return (
                        <div className="col-lg-6 column-td-6" key={index}>
                            <div className="icon-box icon-box-layout-2">
                                <div className="info-icon text-center">
                                    <span className="d-inline-block">
                                        {item.icon}
                                    </span>
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
            </div>
        </>
    );
}

export default InfoBox4;
