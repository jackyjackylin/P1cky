import React, { Component } from 'react';
import axios from 'axios';






export default function AutoCompleteFromYelp({}) {
    

    return (

        axios.get(`${'https://young-thicket-97536.herokuapp.com/'}https://api.yelp.com/v3/autocomplete?`, {

        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        params: {
            text: "chip",
            // latitude: lat, 
            // longitude: lng,
        }
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log ('error')
        })
    )
}