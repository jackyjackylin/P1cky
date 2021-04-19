import React from 'react';

function WidgetFilterTags({tagitems, title}) {
    return (
        <>
            <div className="sidebar-widget tag-widget">
                <h3 className="widget-title">
                    {title}
                </h3>
                <div className="title-shape"></div>
                <ul className="tag-list mt-4">
                    {tagitems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.path}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default WidgetFilterTags;
