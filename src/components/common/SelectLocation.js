import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
import React from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";


export default function SelectLocation({lat,setLat,lng,setLng}) {
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
  
    const handleSelect = (val) => {
      setValue(val, false);
    };

    
    return (
        <>    
            <Combobox onSelect={async (address) => {
              setValue(address, false);
              try {
                const results = await getGeocode({ address });
                const { lat, lng } = await getLatLng(results[0]);
                setLat(lat);
                setLng(lng);
                console.log(lat, lng);
                
              } catch (error) {
                console.log(error);
              }
              console.log(address);
            }} style={{zIndex:999}}>

            <ComboboxInput className='auto-complete-search-bar' value={value} onChange={handleInput} disabled={!ready} placeholder="Where are you?" />
            <ComboboxPopover style={{zIndex:999}}>
            <ComboboxList style={{zIndex:999}}>
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