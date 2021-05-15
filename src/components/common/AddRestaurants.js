import React, {useState} from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


export default function AddRestaurants({value, setValue}) {

    
    return (
        <>    
            <GooglePlacesAutocomplete
              apiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
              selectProps={{
                value,
                onChange: setValue,
                styles: {
                  input: (provided) => ({
                    ...provided,
                    color: 'grey',
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: 'grey',
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: 'grey',
                  }),
                },
              }}
            />
        </>
    )
}