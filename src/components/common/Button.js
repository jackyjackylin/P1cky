import React from 'react';
import {Link} from "react-router-dom";

export default function Button({text, url, className, children}) {
    return (
        <>
            <Link to={url} className={'theme-btn ' + className}>{children} {text}</Link>
        </>
    );
}
