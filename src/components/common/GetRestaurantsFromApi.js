import React, { Component } from 'react';
import axios from 'axios';






export default async function GetRestaurantsFromApi({lat,lng,foodType,rating,price,yelpID,address1,name,city,state,country}) {
//     this.state = {
//         isLoading: true,
//         markers: [],
//         origin: { latitude: 40.7050758, longitude: -74.0091604 },
//       };
//   this.config = {
//         headers: {
//           Authorization: 'Bearer ${process.env.REACT_APP_API_KEY}',
//         },
//         params: {
//             term: 'restaurant', 
//             categories: "burgers",
//             raduis: 0.5, 
//             latitude: this.state.origin.latitude, 
//             longitude: this.state.origin.longitude, 
//             sort_by: 'distance',
//             price: 1,
//             limit: 5
//         },
//       };
    
    if(yelpID){
        return (

            axios.get(`${'https://young-thicket-97536.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
    
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            params: {
                //term: keyword,
                term: name,
                location: address1+city+state+country,
                limit: 1
                // city: city,
                // state: state,
                // country: country,
                // yelp_business_id: yelpID
            }
            })
        )
    }
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
        }
        })
        // axios.get(`${'https://corsanywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`,this.config)
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((err) => {
        //     console.log ('error')
        // })
    )
}