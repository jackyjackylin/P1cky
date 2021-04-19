import React from 'react';

function WidgetStaticsInfo({staticsinfo}) {
    return (
        <>
            <div className="sidebar-widget">
                <h3 className="widget-title">
                    {staticsinfo.title}
                </h3>
                <div className="title-shape"></div>
                <div className="info-list static-info padding-top-35px">
                    <ul>
                        {staticsinfo.lists.map((item, index) => {
                            return (
                                <li className="mb-2" key={index}>
                                    <i className="la">{item.icon}</i> {item.text}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default WidgetStaticsInfo;
