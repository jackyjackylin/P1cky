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
            label: 'Outdoor Activities'
        },
        {
            value: 2,
            label: 'Cinemas'
        },
        {
            value: 3,
            label: 'Nightlife'
        },
        {
            value: 4,
            label: 'Bars'
        },
        {
            value: 5,
            label: 'Clubs'
        },
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
                    <SelectCountry/>
                </div>
                <div className="main-search-input-item category">
                    <Select
                        placeholder="Select a Category"
                        options={state.categories}
                    />
                </div>
                <div className="main-search-input-item">
                    <div className="contact-form-action">
                        <form action="#">
                            <div className="form-group mb-0">
                            <span className="form-icon">
                                <FiSearch/>
                            </span>
                                <input className="date-range form-control" type="date" name="daterange"
                                       defaultValue="04/08/2019"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main-search-input-btn">
                    <button className="button theme-btn" type="submit">Search</button>
                </div>

            </div>
        </>
    )
}
