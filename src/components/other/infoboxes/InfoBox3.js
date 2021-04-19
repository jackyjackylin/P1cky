import React from 'react';
import Button from "../../common/Button";

function InfoBox3({infoitems, isbtnshow}) {
    return (
        <div className="row mt-5">
            {infoitems.map((item, index) => {
                return (
                    <div className="col-lg-3 column-td-6" key={index}>
                        <div className={item.active ? 'icon-box icon-box-layout info-more-content' : 'icon-box icon-box-layout'}>
                            <div className="info-icon">
                                <span>
                                    {item.icon}
                                </span>
                            </div>
                            <div className="info-content">
                                <h4 className="info__title">
                                    {item.title}
                                </h4>
                                <p className="info__desc">
                                    {item.description}
                                </p>
                                {
                                    isbtnshow === true ? <Button text="get Started" url="#" className="radius-rounded mt-4" />
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default InfoBox3;
