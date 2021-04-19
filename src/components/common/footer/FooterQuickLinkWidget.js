import React from 'react';

function FooterQuickLinkWidget({footerquicklink}) {
    return (
        <>
            <div className="col-lg-3 column-td-6">
                <div className="footer-item">
                    <h4 className="footer__title">
                        {footerquicklink.title}
                    </h4>
                    <ul className="list-items">
                        {footerquicklink.links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.path}>{link.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FooterQuickLinkWidget;
