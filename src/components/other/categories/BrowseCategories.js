import React from 'react';
import {Link} from "react-router-dom";

function BrowseCategories({categories}) {
    return (
        <>
            <div className="row mt-5">
                {categories.map(item => {
                    return (
                        <div className="col-lg-2 column-td-6" key={item.id}>
                            <div className={'browse-category browse-category-color'+item.id}>
                                <Link to={item.cardLink} className="category-inner d-block">
                                    <span>
                                        {item.icon}
                                    </span>
                                    <p className="cat__name">
                                        {item.title}
                                    </p>
                                    <p className="cat__meta">
                                        {item.listingsNum} Listings
                                    </p>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default BrowseCategories;
