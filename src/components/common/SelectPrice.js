import React, {Component} from 'react';
import Select from "react-select";

const state = {
    selectedOption: null,
    foods: [
        {
            value: '$',
            label: '$'
        },
        {
            value: '$$',
            label: '$$'
        },
        {
            value: '$$$',
            label: '$$$'
        },
        {
            value: '$$$$',
            label: '$$$$'
        }
    ]
}
class SelectPrice extends Component {
    render() {
        return (
            <>
                <Select
                    placeholder="Select Price"
                    options={state.foods}
                />
            </>
        );
    }
}

export default SelectPrice;
