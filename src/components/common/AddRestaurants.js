import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
import React, {useState} from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import { set } from "lodash-es";


export default function AddRestaurants({value, setValue}) {
    const {
      ready,
      suggestions: { status, data },
    } = usePlacesAutocomplete();
  
    const handleInput = (e) => {
      setValue(e.target.value);
    };
  
    const handleSelect = (val) => {
      setValue(val, false);
    };

    const handleRestaurantSearch = () => {
      console.log("here")
      const url  = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?'
      const location = `location=${this.state.latitude},${this.state.longitude}`;
      // const radius = '&radius=2000';
      // const type = '&keyword=restaurant';
      const key = `&key=${process.env.REACT_APP_API_KEY}`;
      const input = 'chipotle';
      const inputtype = 'textquery';
      // const restaurantSearchUrl = url + location + radius + type + key;
      const restaurantSearchUrl = url + key + input + inputtype;
      fetch(restaurantSearchUrl)
        .then(response => response.json())
        .then(result => this.setState({restaurantList: result}))
        .catch( e => console.log(e))
    }

    
    return (
        <>    
            <Combobox onSelect={async (address) => {
              // setValue(address, false);
              try {
                const results = await getGeocode({ address });                
              } catch (error) {
                console.log(error);
              }
              console.log(address);
            }}>

            <ComboboxInput className='add-to-lists-search-bar' value={value} onChange={handleInput} disabled={!ready} placeholder="Where are you?" />
            <ComboboxPopover>
            <ComboboxList>
                {status === "OK" &&
                data.map(({ place_id, description }) => (
                    <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
            </ComboboxPopover>
            </Combobox>
        </>
    )
}