import React from "react"
import markericon from '../../assets/images/map-marker.png'

const { compose, withProps } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    BicyclingLayer,
    Marker
} = require("react-google-maps");
const GeneralMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAYzby4yYDVaXPmtu4jZAGR258K6IYwjIY&libraries",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
        defaultOptions={{
            disableDefaultUI: false, // disable default map UI
            draggable: true, // make map draggable
            keyboardShortcuts: false, // disable keyboard shortcuts
            scaleControl: true, // allow scale control
            scrollwheel: true, // allow scroll wheel
            styles: [
                {
                    "featureType": "road",
                    "stylers": [
                        { "color": "#ffffff" }
                    ]
                }, {
                    "featureType": "water",
                    "stylers": [
                        { "color": "#e9e9e9" }
                    ]
                }, {
                    "featureType": "landscape",
                    "stylers": [
                        { "color": "#f5f5f5" }
                    ]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        { "color": "transparent" }
                    ]
                }, {
                    "featureType": "poi",
                    "stylers": [
                        { "color": "#fefefe" }
                    ]
                }, {
                    "elementType": "labels.text",
                    "stylers": [
                        { "saturation": 1 },
                        { "weight": 0.1 },
                        { "color": "#737980" }
                    ]
                }
            ],
            icon: markericon
        }}
    >
        <Marker
            icon={{
                url: markericon
            }}
            animation={1}

            position={{
                lat: 40.712776, // latitude to position the marker
                lng: -74.005974 // longitude to position the marker
            }}
        />
        <BicyclingLayer autoUpdate />
    </GoogleMap>
);

export default GeneralMap