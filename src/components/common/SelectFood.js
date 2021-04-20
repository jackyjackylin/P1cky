import React, {Component} from 'react';
import Select from "react-select";

const state = {
    selectedOption: null,
    foods: [
        {
            value: 'Jap',
            label: 'Japanese'
        },
        {
            value: 'Mex',
            label: 'Mexican'
        },
    ]
}
class SelectFood extends Component {
    render() {
        return (
            <>
                <Select
                    placeholder="Select a food type"
                    options={state.foods}
                />
            </>
        );
    }
}

export default SelectFood;
