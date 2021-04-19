import React from 'react';
import {Link} from "react-router-dom";

function WidgetCategory({wCategories}) {
    return (
        <>
            <div className="sidebar-widget">
                <h3 className="widget-title">
                    {wCategories.title}
                </h3>
                <div className="title-shape"></div>
                <div className="cat-list padding-top-30px">
                    <ul className="list-items">

                        {wCategories.lists.map((item, i) => {
                            return (
                                <li className="mb-2 pb-2" key={i}>
                                    <Link to={item.url} className="d-flex justify-content-between align-items-center before-none">
                                        {item.cat} <span>{item.catNum}</span>
                                    </Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </>
    );
}

export default WidgetCategory;
