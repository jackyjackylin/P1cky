import React, { Component, useEffect } from 'react';
import axios from 'axios';






export default async function GetRestaurantsFromApi({lat,lng,foodType,rating,price,yelpID,address1,name,city,state,country}) {
    
    // if(yelpID){
    //     return (

    //         axios.get(`${'https://young-thicket-97536.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
    
    //         headers: {
    //             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    //         },
    //         params: {
    //             //term: keyword,
    //             term: name,
    //             location: address1+city+state+country,
    //             limit: 1
    //             // city: city,
    //             // state: state,
    //             // country: country,
    //             // yelp_business_id: yelpID
    //         }
    //         })
    //     )
    // }
    
    return (
        
        axios.get(`${'https://young-thicket-97536.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {

        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        params: {
            //term: keyword,
            categories: foodType,
            price: price,
            latitude: lat, 
            longitude: lng,
            sort_by:  rating? rating: "best_match"
        }
        }).catch((err)=>console.log(err))
    )
}