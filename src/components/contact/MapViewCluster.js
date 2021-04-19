import React, {useState, useRef} from 'react';
import useSwr from 'swr'
import GoogleMapReact from "google-map-react"
import useSupercluster from "use-supercluster";
// import googleMapStyles from '../common/GoogleMapStyle'
import mpIcon from '../../assets/images/map-marker.png'

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({children}) => children;

export default function MapViewCluster() {

    // 1) map setup
    const mapRef = useRef();
    const [zoom, setZoom] = useState(10);
    const [bounds, setBounds] = useState(null);

    // 2) load and format data
    const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.6376&lng=-1.135171&data=2019-10";
    const { data, error } = useSwr(url, fetcher);
    const crimes = data && !error ? data.slice(0, 9) : [];
    const points = crimes.map(crime => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: crime.id,
            category: crime.category
        },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(crime.location.longitude),
                parseFloat(crime.location.latitude)
            ]
        }
    }))

    // 3) get clusters
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: {radius: 75, maxZoom: 20}
    });

    // 4) render map
    return (
        <>
            <div className="map-container map-height w-100">
                <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAYzby4yYDVaXPmtu4jZAGR258K6IYwjIY&libraries'}}
                defaultCenter={{lat: 52.6376, lng: -1.135171}}
                defaultZoom={12}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({map}) => {
                    mapRef.current = map;
                }}
                onChange={({zoom, bounds}) => {
                    setZoom(zoom);
                    setBounds([
                        bounds.nw.lng,
                        bounds.se.lat,
                        bounds.se.lng,
                        bounds.nw.lat
                    ])
                }}
                >
                    {clusters.map(cluster => {
                        const  [longitude, latitude]  = cluster.geometry.coordinates;
                        const {
                            cluster: isCluster,
                            point_count: pointCount
                        } = cluster.properties;

                        if(isCluster) {
                            return (
                                <Marker key={cluster.id} lat={latitude} lng={longitude}>
                                    <div
                                        className="cluster-marker"
                                        onClick={() => {
                                            const expansionZoom = Math.min(
                                                supercluster.getClusterExpansionZoom(cluster.id), 20
                                            );
                                            mapRef.current.setZoom(expansionZoom);
                                            mapRef.current.panTo({lat: latitude, lng: longitude})
                                        }}
                                    >{pointCount}</div>
                                </Marker>
                            )
                        }
                        return (
                            <Marker
                                key={cluster.properties.crimeId}
                                lat={latitude}
                                lng={longitude}>
                                <div className="crime-marker">
                                    <img src={mpIcon} alt="Icon"/>
                                </div>
                            </Marker>
                        )
                    })}
                </GoogleMapReact>
            </div>
        </>
    );
}


