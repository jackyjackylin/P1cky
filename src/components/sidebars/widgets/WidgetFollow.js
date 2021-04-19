import React from 'react';

function WidgetFollow({followconnect}) {
    return (
        <>
            <div className="sidebar-widget social-widget">
                <h3 className="widget-title">
                    {followconnect.title}
                </h3>
                <div className="title-shape"></div>
                <ul className="social-profile padding-top-30px">
                    {followconnect.socials.map((item, i) => {
                        return (
                            <li key={i}>
                                <a href={item.url}>
                                    <i className="d-inline-block">
                                        {item.icon}
                                    </i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default WidgetFollow;
