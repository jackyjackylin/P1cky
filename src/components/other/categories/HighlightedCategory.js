import React from 'react';
import Button from "../../common/Button";
import { BsEye } from 'react-icons/bs'
import {Link} from "react-router-dom";

function HighlightedCategory({categories}) {
    return (
        <>
            <div className="highlighted-categories">
                <div className="highlight-lists d-flex">
                    {categories.map((list, index) => {
                        return (
                            <div className="category-item radius-rounded" key={index}>
                                <Link to={list.path} className="d-block">
                                    <span className="icon-element">{list.icon}</span>
                                    {list.text}
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div className="highlight-btn mt-4">
                    <Button text="view more categories" className="radius-rounded" url="/all-categories">
                        <span className="la la-eye">
                            <BsEye />
                        </span>
                    </Button>
                </div>

            </div>
        </>
    );
}

export default HighlightedCategory;
