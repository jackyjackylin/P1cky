import React, { Component } from 'react';
import axios from 'axios';


// class GetRestaurantsFromApi extends Component {
//     componentDidMount () {
//         this.getRestaurantsFromApi('Irvine');
//     }
//     // function to get information from API 
//     getRestaurantsFromApi = (locationSearched) => {
        
//         axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
//         headers: {
//             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
//         },
//         params: {
//             categories: 'breakfast_brunch',
//         }
//         })
//         .then((res) => {
//             console.log(res)
//         })
//         .catch((err) => {
//             console.log ('error')
//         })
//     }
// }

export default function GetRestaurantsFromApi() {
    return (
        axios.get(`${'https://corsanywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Irvine`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        params: {
            categories: 'burgers',
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

// export default GetRestaurantsFromApi;