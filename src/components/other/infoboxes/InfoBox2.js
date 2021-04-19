import React from 'react';

function InfoBox2({infoitems}) {
    return (
        <>
            <div className="row">
                {infoitems.map(item => {
                    return (
                        <div className="col-lg-4 column-td-6" key={item.id}>
                            <div className="icon-box icon-box-hover-effect">
                                <div className="info-icon">
                                    {item.icon}
                                    <span className="info-number">{item.id}</span>
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

export default InfoBox2;
