import React, {Component, useEffect} from 'react';
import Select from "react-select";


export default function SelectRating({rating, setRating}){
    let state = {
        selectedOption: null,
        rating: [
            {
                value: 'best_match',
                label: 'Best Match'
            },
            {
                value: 'rating',
                label: 'Rating'
            },
            {
                value: 'review_count',
                label: 'Review Count'
            },
            {
                value: 'distance',
                label: 'Distance'
            },
        ],
    }

    useEffect(()=>{
        console.log(rating)
    },[rating])
    let handleChange = (event)=>{
        setRating(event.value);
    }
    
    return (
            <>
                <Select
                    placeholder="Priority"
                    options={state.rating}
                    onChange={handleChange}
                />
            </>
    );
}
