import React from 'react';

function IconBoxOne({items}) {
    return (
        <>
            <div className="row mt-5">
                {items.map(item => {
                    return (
                        <div className="col-lg-3 column-td-6" key={item.id}>
                            <div className="icon-box icon-box-hover-effect">
                                <div className="info-icon">
                                    <span className="d-inline-block">
                                        {item.icon}
                                    </span>
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

export default IconBoxOne;
