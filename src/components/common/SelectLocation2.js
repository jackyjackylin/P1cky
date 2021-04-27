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


export default function SelectLocation() {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete();
  
    const handleInput = (e) => {
      setValue(e.target.value);
    };
  
    const handleSelect = ({ val }) => () => {
      setValue(val, false);
    };


    return (
        <>    
            {/* <Combobox onSelect={handleSelect} aria-labelledby="demo"> */}
            <Combobox onSelect={async (address) => {
              try {
                const results = await getGeocode({ address });
                const { lat, lng } = await getLatLng(results[0]);
                console.log(lat, lng);
                
              } catch (error) {
                console.log(error);
              }
              console.log(address);
            }}>
            <ComboboxInput value={value} onChange={(e) => { setValue(e.target.value); }} disabled={!ready} placeholder="Where are you?"/>
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