import React from 'react';
import {Link} from "react-router-dom";

function FooterCategoryWidget({footercategory}) {
    return (
        <>
            <div className="col-lg-3 column-td-6">
                <div className="footer-item">
                    <h4 className="footer__title">
                        {footercategory.title}
                    </h4>
                    <ul className="list-items">
                        {footercategory.links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link to={link.path}>{link.text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FooterCategoryWidget;
