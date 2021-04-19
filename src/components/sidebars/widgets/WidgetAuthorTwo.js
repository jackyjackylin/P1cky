import React from 'react';
import SocialProfile from "../../other/account/SocialProfile";

function WidgetAuthorTwo({contents}) {
    return (
        <>
            <div className="sidebar-widget">
                <div className="author-bio margin-bottom-20px">
                    <div className="d-flex align-items-center">
                        <img src={contents.img} alt="author" />
                        <div className="author-inner-bio">
                            <h4 className="author__title font-weight-bold pb-0 mb-1">
                                {contents.name}
                            </h4>
                            <p className="author__meta">
                                {contents.designation}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section-heading">
                    <p className="sec__desc font-size-15 line-height-24">
                        {contents.content}
                    </p>
                </div>
                <div className="section-block-2 margin-top-30px"></div>
                <SocialProfile socials={contents.sociallinks} />
            </div>
        </>
    );
}

export default WidgetAuthorTwo;
