import React from 'react';
import {Link} from "react-router-dom";

function WidgetTags({tagcontent}) {
    return (
        <>
            <div className="sidebar-widget tag-widget">
                <h3 className="widget-title">
                    {tagcontent.title}
                </h3>
                <div className="title-shape"></div>
                <ul className="tag-list padding-top-30px">

                    {tagcontent.lists.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link to={item.url}>{item.text}</Link>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </>
    );
}

export default WidgetTags;
