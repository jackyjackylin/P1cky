import React from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiPhone, FiExternalLink } from 'react-icons/fi'

function ContactInfo({contactinfos}) {
    return (
        <>
            <div className="contact-listing padding-top-40px padding-bottom-40px">
                <h2 className="widget-title">
                    {contactinfos.title}
                </h2>
                <div className="title-shape"></div>
                <div className="info-list margin-top-35px padding-bottom-35px">
                    <ul>
                        {contactinfos.address ? (
                            <li className="mb-2"><span><i className="la d-inline-block"><GiPositionMarker /></i> Address:</span>
                                {contactinfos.address}
                            </li>
                        ) : ''}
                        {contactinfos.email ? (
                            <li className="mb-2"><span><i className="la d-inline-block"><FaRegEnvelope /></i> Email:</span>
                                <a href={'mailto:'+contactinfos.email}>{contactinfos.email}</a>
                            </li>
                        ) : ''}
                        {contactinfos.number ? (
                            <li className="mb-2"><span><i className="la d-inline-block"><FiPhone /></i> Phone:</span>
                                {contactinfos.number}
                            </li>
                        ) : '' }
                        {contactinfos.website ? (
                            <li><span><i className="la d-inline-block"><FiExternalLink /></i> Website:</span>
                                <a href={contactinfos.websiteUrl}>{contactinfos.website}</a>
                            </li>
                        ) : ''}
                    </ul>
                </div>

                <div className="section-block"></div>
                <div className="social-contact padding-top-40px">
                    {contactinfos.socials.map((item, i) => {
                        return (
                            <a key={i} href={item.url} className={'theme-btn '+item.title+'-link'}>
                                <i className="d-inline-block">{item.icon}</i> {item.title}
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default ContactInfo;
