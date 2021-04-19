import React from 'react';
import {Link} from "react-router-dom";
import {BsGrid, BsListUl} from "react-icons/bs";
import Select from "react-select";

const state = {
    selectedCatOp: null,
    title: 'Showing 1 to 6 of 30 entries',
    navs: [
        {
            path: '/listing-list',
            icon: <BsListUl />,
            active: false,
        },
        {
            path: '/listing-grid',
            icon: <BsGrid />,
            active: true,
        }
    ],
    shortby: [
        {
            value: 0,
            label: 'Short by'
        },
        {
            value: 1,
            label: 'Short by default'
        },
        {
            value: 2,
            label: 'High Rated'
        },
        {
            value: 3,
            label: 'Most Reviewed'
        },
        {
            value: 4,
            label: 'Popular Listing'
        },
        {
            value: 5,
            label: 'Newest Listing'
        },
        {
            value: 6,
            label: 'Older Listing'
        },
        {
            value: 7,
            label: 'Price: low to high'
        },
        {
            value: 8,
            label: 'Price: high to low'
        },
        {
            value: 9,
            label: 'Price: high to low'
        },
        {
            value: 10,
            label: 'Random listing'
        }
    ]
}

function GenericHeader() {
    return (
        <>
            <div className="generic-header margin-bottom-30px">
                <p className="showing__text text-left">
                    {state.title}
                </p>
                <div className="short-option mr-3">
                    <Select
                        placeholder="Short by"
                        options={state.shortby}
                    />
                </div>
                <ul className="generic-nav">
                    {state.navs.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} className={ item.active ? 'active': ' '}>
                                    <span className="d-inline-block">
                                        {item.icon}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default GenericHeader;
