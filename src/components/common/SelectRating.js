import React, {Component} from 'react';
import Select from "react-select";


export default function SelectRating({rating, setRating}){
    let state = {
        selectedOption: null,
        rating: [
            {
                value: '1',
                label: '1'
            },
            {
                value: '2',
                label: '2'
            },
            {
                value: '3',
                label: '3'
            },
            {
                value: '4',
                label: '4'
            },
            {
                value: '5',
                label: '5'
            },
        ],
    }


    let handleChange = (event)=>{
        setRating(event.value);
    }
    
    return (
            <>
                <Select
                    placeholder="Above ratings"
                    options={state.rating}
                    onChange={handleChange}
                />
            </>
    );
}
