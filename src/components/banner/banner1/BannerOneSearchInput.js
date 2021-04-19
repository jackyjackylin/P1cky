import React from 'react'
import  { FiSearch } from 'react-icons/fi'
import SelectCountry from "../../common/SelectCountry";
import Select from "react-select";


const state = {
    selectedCatOp: null,
    categories: [
        {
            value: 0,
            label: 'Select a category'
        },
        {
            value: 1,
            label: 'All Category'
        },
        {
            value: 2,
            label: 'Shops'
        },
        {
            value: 3,
            label: 'Hotels'
        },
        {
            value: 4,
            label: 'Foods & Restaurants'
        },
        {
            value: 5,
            label: 'Fitness'
        },
        {
            value: 6,
            label: 'Travel'
        },
        {
            value: 7,
            label: 'Salons'
        },
        {
            value: 8,
            label: 'Event'
        },
        {
            value: 9,
            label: 'Business'
        },
        {
            value: 10,
            label: 'Jobs'
        }
    ]
}
export default function BannerOneSearchInput() {
    return (
        <>
            <div className="main-search-input">

                <div className="main-search-input-item">
                    <div className="contact-form-action">
                        <form action="#">
                            <div className="form-group mb-0">
                            <span className="form-icon">
                                <FiSearch/>
                            </span>
                                <input className="form-control" type="text"
                                       placeholder="What are you looking for?"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="main-search-input-item location">
                    <SelectCountry />
                </div>

                <div className="main-search-input-item category">
                    <Select
                        placeholder="Select a Category"
                        options={state.categories}
                    />
                </div>

                <div className="main-search-input-btn">
                    <button className="button theme-btn" type="submit">Search</button>
                </div>

            </div>
        </>
    )
}
