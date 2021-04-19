import React from 'react';

function WidgetOpenHours({openhours}) {
    return (
        <>
            <div className="sidebar-widget">
                <div className="opening-hours">
                    <div className="listing-badge d-flex justify-content-between align-items-center">
                        <div>
                            <h3 className="widget-title">
                                {openhours.title}
                            </h3>
                            <div className="title-shape"></div>
                        </div>
                        <p><span className="theme-btn button-success">
                            {openhours.stitle}
                        </span></p>
                    </div>
                    <ul className="list-items padding-top-30px">
                        {openhours.items.map((item, i) => {
                            return (
                                <li key={i} className="d-flex justify-content-between">
                                    {item.day} <strong className={item.close ? 'color-text' : 'font-weight-medium'}>{item.time}</strong>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default WidgetOpenHours;
