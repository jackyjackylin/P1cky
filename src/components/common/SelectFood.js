import React, {useState} from 'react';
import Select from "react-select";
import {foodCategory} from "../data/food_category.js";



export default function SelectFood ({foodType,setFoodType}){
    // const [data,setData]=useState([]);
    // const state = {
    //         selectedOption: null,
    //         data,
    // }
    // fetch('../data/food_category.json')
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(myJson) {
    //     console.log('data:', myJson);
    //     setData(myJson)
    // });

    let handleChange = (event)=>{
        setFoodType(event.value) ;
    }
    
    return (
        <>
            <Select
                placeholder="Select a food type"
                onChange={handleChange}
                options={foodCategory}
            />
        </>
    );
}

