import React, {useState,useEffect}  from 'react'
import GeneralHeader from '../../components/common/GeneralHeader'
import BannerOne from '../../components/banner/banner1/BannerOne'
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import SectionsHeading from "../../components/common/SectionsHeading";
import PlaceOne from "../../components/places/PlaceOne";
import PlacePop from "../../components/places/PlacePop";
import sectiondata from "../../store/store";
import GetRestaurantsFromApi from '../../components/common/GetRestaurantsFromApi';

function Home() {
    const [businesses, setBusinesses] = useState([]);
    const [showPop, setShowPop] = useState(false);
    const [popItem, setPopItem] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [foodType, setFoodType] = useState("");
    const [rating, setRating] = useState(1);
    const [price, setPrice] = useState(1);
    const [lat, setLat] = useState(33.6846);
    const [lng, setLng] = useState(-117.8265049);
    const [rloaded, setRloaded] = useState(false);

    useEffect(() => {
        async function showPosition(position){
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        };
        window.initMap = () => setLoaded(true)
        const gmapScriptEl = document.createElement(`script`)
        gmapScriptEl.src =`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`
        document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    },[]);

    useEffect(() =>{
        async function fetchData() {
            const response = GetRestaurantsFromApi({lat,lng,foodType,rating,price}).then((res)=>{
                setBusinesses(res.data.businesses)
                if(businesses.length > 0 ) setRloaded(true);
            });
        }
        fetchData();
    },[lat, lng]);

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
                    {rloaded && (<PlaceOne places={businesses} />)}
                </div>
            </section>
            
            <PlacePop showPop={showPop} toggleShowPop = {toggleShowPop} itemList={popItemList} itemId={popItemId}
            nextItemId={nextItemId}/>
            {/* Footer */}
            <Footer />

            <ScrollTopBtn />
        </main>
    )
}

export default Home;
