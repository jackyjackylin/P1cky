import React from 'react'

export default function BannerOneHeroHeading({title, content, titleHighlight}) {
    return (
        <>
            <div className="hero-heading">
                <div className="section-heading">
                    <h2 className="sec__title cd-headline zoom">
                        {title}
                        <span className="cd-words-wrapper">
                            {titleHighlight.map((item, index) => {
                                return (
                                    <b className={item.active ? 'is-visible' : ' '} key={index}> {item.text}</b>
                                )
                            })}
                        </span>
                    </h2>
                    <p className="sec__desc">
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}
