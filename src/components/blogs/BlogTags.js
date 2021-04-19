import React from 'react';
import {Link} from "react-router-dom";

function BlogTags({taglists, title}) {
    return (
        <>
            <ul className="tag-list">
                <li className="font-weight-semi-bold color-text-2">{title}</li>
                {taglists.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link to={item.path} className="radius-rounded">{item.title} </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default BlogTags;
