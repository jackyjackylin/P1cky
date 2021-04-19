import React  from 'react'

export default function BannerOneCategories({connector, title, items}) {
    return (
        <>
            <div className="highlighted-categories">
                <h4 className="highlighted-element">{connector}</h4>
                <h5 className="highlighted__title">
                    {title}
                </h5>
                <div className="highlight-lists d-flex justify-content-center mt-4">
                    {items.map((item, index) => {
                        return (
                            <div className="category-item" key={index}>
                                <a href={item.path} className="d-block">
                                    <span className="icon-element">{item.icon}</span>
                                    {item.title}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
