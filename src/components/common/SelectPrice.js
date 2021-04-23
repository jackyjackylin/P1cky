import React, {Component} from 'react';
import Select from "react-select";


export default function SelectPrice({price,setPrice}) {
    const state = {
        selectedOption: null,
        foods: [
            {
                value: "1",
                label: '$'
            },
            {
                value: "2",
                label: '$$'
            },
            {
                value: "3",
                label: '$$$'
            },
            {
                value: "4",
                label: '$$$$'
            }
        ]
    }
    let handleChange = (event)=>{
        setPrice(event.value) ;
    }
    return (
        <>
            <Select
                placeholder="Select Price"
                onChange={handleChange}
                options={state.foods}
            />
        </>
    );
}
