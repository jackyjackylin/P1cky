import React, {Component } from 'react';

class WidgetFilterPrice extends Component {
    componentDidMount() {
        let minDollars = 0
        let maxDollars = 500

        let minSlider = document.querySelector('#min')
        let maxSlider = document.querySelector('#max')

        function numberWithSpaces(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        }

        function updateDollars() {
            let fromValue = (maxDollars - minDollars) * minSlider.value / 500 + minDollars
            let toValue   = (maxDollars - minDollars) * maxSlider.value / 500 + minDollars

            document.querySelector('#from').textContent = `$${numberWithSpaces(Math.floor(fromValue))}`
            document.querySelector('#to').textContent   = `$${numberWithSpaces(Math.floor(toValue))}`
        }

        maxSlider.addEventListener('input', () => {
            let minValue = parseInt(minSlider.value)
            let maxValue = parseInt(maxSlider.value)

            if (maxValue < minValue) {
                minSlider.value = maxValue

                if (minValue === parseInt(minSlider.min)) {
                    maxSlider.value = 10
                }
            }

            updateDollars()
        })

        minSlider.addEventListener('input', () => {
            let minValue = parseInt(minSlider.value)
            let maxValue = parseInt(maxSlider.value)

            if (minValue > maxValue) {
                maxSlider.value = minValue

                if (maxValue === parseInt(maxSlider.max)) {
                    minSlider.value = parseInt(maxSlider.max) - 10
                }
            }

            updateDollars()
        })
    }

    Filterstate = {
        title: 'Filter by Price',
        stitle: 'Price:',
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title mb-3">
                        {this.Filterstate.title}
                    </h3>
                    <div className="multi-range">
                        <input id="min" type="range" min="0" max="500" defaultValue="0" step="1"/>
                        <input id="max" type="range" min="0" max="500" defaultValue="272" step="1"/>
                    </div>
                    <div className="price-slider-amount d-flex">
                        <label htmlFor="amount" className="filter__label">
                            {this.Filterstate.stitle}
                        </label>
                        <div className="price-wrap d-flex">
                            <div className="price text-violet">
                                <span id="from">$0</span><span> - </span><span id="to">$272</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetFilterPrice;