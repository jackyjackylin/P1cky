import React, {Component} from 'react';
import Select from "react-select";



export default function SelectFood ({foodType,setFoodType}){
    const state = {
            selectedOption: null,
            foods: [
                {
                    value: 'coffee',
                    label: 'coffee'
                },
                {
                    value: 'cupcakes',
                    label: 'cupcakes'
                },
            ]
    }


    let handleChange = (event)=>{
        setFoodType(event.value) ;
    }
    
    return (
        <>
            <Select
                placeholder="Select a food type"
                onChange={handleChange}
                options={state.foods}
            />
        </>
    );
}

