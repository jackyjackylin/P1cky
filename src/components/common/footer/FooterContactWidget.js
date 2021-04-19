import React from 'react';

function FooterContactWidget({footercontact}) {
    return (
        <>
            <div className="col-lg-3 column-td-6">
                <div className="footer-item">
                    <h4 className="footer__title">
                        {footercontact.title}
                    </h4>
                    <ul className="info-list contact-links">
                        {footercontact.lists.map((list, index) => {
                            return (
                                <li key={index}>
                                    <span className="la">
                                        {list.icon}
                                    </span> {list.text}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FooterContactWidget;
