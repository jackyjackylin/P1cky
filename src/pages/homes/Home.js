import React, {useState,useEffect}  from 'react'
import GeneralHeader from '../../components/common/GeneralHeader'
import BannerOne from '../../components/banner/banner1/BannerOne'
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import SectionsHeading from "../../components/common/SectionsHeading";
import PlaceOne from "../../components/places/PlaceOne";
import PlacePop from "../../components/places/PlacePop";
import sectiondata from "../../store/store";
import {useBusinessSearch} from '../../components/api/useBusinessSearch';


function Home() {
    const [businesses, searchParams, performSearch] = useBusinessSearch(undefined, undefined, 'Irvine', undefined, undefined, undefined, undefined);
    const [showPop, setShowPop] = useState(false);
    const [popItem, setPopItem] = useState(null);
    console.log(businesses)
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        window.initMap = () => setLoaded(true)
        const gmapScriptEl = document.createElement(`script`)
        gmapScriptEl.src =`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`
        document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
    },[]);

    console.log(businesses[0])
    return (
        <main className="home-1">
            {/* Header */}
            <GeneralHeader />

            {/* Hero Banner */}
            {loaded && (            
            <BannerOne setShowPop={setShowPop} setPopItem={setPopItem}/>
            )}
            {/* Most Visited Place */}
            <section className="card-area text-center padding-bottom-100px">
                <div className="container">
                    <br></br>
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.mostvisitedplaces.sectitle} desc={sectiondata.mostvisitedplaces.seccontent} />
                    </div>
                    <PlaceOne places={businesses} />
                </div>
            </section>
            
            <PlacePop showPop={showPop} setShowPop = {setShowPop} item={popItem}/>
            {/* Footer */}
            <Footer />

            <ScrollTopBtn />
        </main>
    )
}

export default Home;
