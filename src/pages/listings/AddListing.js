import React, {useState,useEffect}  from 'react'
import GeneralHeader from "../../components/common/GeneralHeader";
import Banner6 from "../../components/banner/banner6/Banner6";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from '../../assets/images/bread-bg.jpg'
import { FiSearch } from 'react-icons/fi'
import googleMapReact from 'google-map-react';
const states = {
    breadcrumbimg: breadcrumbimg
}
function AddListing() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const google = window.google;
        if (typeof google === 'object' && typeof google.maps === 'object') {
            setLoaded(true);
        }
        else {
            window.initMap = () => setLoaded(true)
            const gmapScriptEl = document.createElement(`script`)
            gmapScriptEl.src =`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`
            document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
        }
    },[]);

    return (
        <main className="add-listing">
            <GeneralHeader />

            {/* Breadcrumb */}
            {/* <Breadcrumb CurrentPgTitle="Add Listing" MenuPgTitle="Listings" img={states.breadcrumbimg} /> */}

            {/* Banner */}
            {loaded && (            
            <Banner6 title="Add restaurants to your lists!" />
            )}

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>

    );
}

export default AddListing;
