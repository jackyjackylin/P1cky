import React from 'react';

function InfoBoxOne({infoitems, cardcol}) {
    return (
        <>
            {infoitems.map(item => {
                return (
                    <div className={'column-td-6 col-lg-'+cardcol} key={item.id}>
                        <div className="icon-box">
                            <div className="info-icon">
                                {item.icon}
                                <span className="info-number">{item.id}</span>
                            </div>
                            <div className="info-content">
                                <h4 className="info__title">
                                    {item.title}
                                </h4>
                                <p className="info__desc">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default InfoBoxOne;
