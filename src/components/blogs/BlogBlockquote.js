import React from 'react';

function BlogBlockquote({bgImg, quoteIcon, desc, name, designation}) {
    return (
        <>
            <div className="blockquote-item margin-top-30px" style={{backgroundImage: 'url('+bgImg+')'}}>
                <blockquote className="mb-0">
                    <i className="blockquote__icon">{quoteIcon}</i>
                    <p className="blockquote__text">
                        {desc}
                    </p>
                    <h4 className="blockquote__meta">{name} <span>{designation}</span></h4>
                </blockquote>
            </div>
        </>
    );
}

export default BlogBlockquote;
