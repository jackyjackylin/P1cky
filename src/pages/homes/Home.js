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
import ShowList from "../listings/ShowList"
function Home() {
    const [businesses, setBusinesses] = useState([]);
    const [showPop, setShowPop] = useState(false);
    const [popItemList, setPopItemList] = useState(null);
    const [popItemId, setPopItemId] = useState(-1);
    const [loaded, setLoaded] = useState(false);
    const [foodType, setFoodType] = useState("");
    const [rating, setRating] = useState(1);
    const [price, setPrice] = useState(1);
    const [lat, setLat] = useState(33.6846);
    const [lng, setLng] = useState(-117.8265049);
    const [rloaded, setRloaded] = useState(false);
    const [popItem, setPopItem] = useState(null);
    const [isPocketList, setIsPocketList] = useState(false);
    /*=================Control Modal that would display on HomePage===============*/
    useEffect(() => {
        const body = document.querySelector('body')
    
        function showDeleteAcntModal(e) {
            body.classList.add('modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
        }
        function showAddListModal(e) {
            body.classList.add('list-modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
        }
        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if (target.matches('.category-item.list')) {
                        
                        showAddListModal.call(target, e)
                        break
                    }
                }
            },false
        )
        function hideDeleteAcntModal(e) {
            body.classList.remove('modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }
        function hideAddListModal(e) {
            // console.log("hide pick from pocket list")
            body.classList.remove('list-modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }
        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if (target.matches('.badge-toggle, .modal-bg')) {
                        // console.log("match hide")
                        hideDeleteAcntModal.call(target, e)
                        hideAddListModal.call(target,e);
                        // toggleShowPop();
                        toggleShowPop({set:true,val:false});
                        // setTimeout(function() { toggleShowPop({set:true,val:false}); }, 0);
                        break
                    }
                }
            }, false
        )
    });    
    /*=======================================================================================*/
    let nextItemId = ()=>{
        if(popItemList != null){
            setPopItemId( (popItemId+1) % popItemList.length);
            
        }
    }
    // clean all data before toggle the flag show up
    function toggleShowPop({set,val}){
        
        let flag = (set==true)? val: showPop;
        if(flag){
            console.log(flag);
            setPopItemId(0);
            setShowPop(true);
            
        }else{
            setTimeout(()=>setPopItemList(null),1000);
            setPopItemId( -1);
            setShowPop(false);
            setIsPocketList(false);
        }
        
    }
    


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

    useEffect(() => {
        async function fetchData() {
            GetRestaurantsFromApi({lat,lng,foodType,rating,price}).then((res)=>{
                setBusinesses(res.data.businesses)
                console.log("Bussiness:", businesses);
                if(businesses.length > 0 ) setRloaded(true);
            });
        }
        console.log(lat, lng, rloaded);
        fetchData();
    },[businesses.length, lat, lng]);

    return (
        <main className="home-1">
            {/* Header */}
            <GeneralHeader />

            {/* Hero Banner */}
            {(            
            <BannerOne loaded={loaded} toggleShowPop={toggleShowPop} itemList={popItemList} setPopItemList={setPopItemList}/>
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
            
            <PlacePop isPocketList={isPocketList} showPop={showPop} toggleShowPop = {toggleShowPop} itemList={popItemList} itemId={popItemId}
            nextItemId={nextItemId}/>

            <ShowList setPopItemId={setPopItemId} setIsPocketList={setIsPocketList} popItemList={popItemList} setPopItemId={setPopItemId} toggleShowPop = {toggleShowPop} setPopItemList={setPopItemList} setPopItemId={setPopItemId}/>
            {/* Footer */}
            <Footer />

            <ScrollTopBtn />
        </main>
    )
}

export default Home;
