import React, {useState} from 'react';
import  { FiNavigation,  FiSearch} from 'react-icons/fi';
import SelectFood from "../../common/SelectFood";
import SelectRating from "../../common/SelectRating";
import SelectPrice from "../../common/SelectPrice";
import SelectLocation from "../../common/SelectLocation";
import GetRestaurantsFromApi from '../../common/GetRestaurantsFromApi';
import ResultPage from '../../places/ResultPage';


// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);


export default function BannerOneSearchInput({setPopItemList,toggleShowPop}) {
    const [foodType, setFoodType] = useState("");
    const [rating, setRating] = useState(1);
    const [price, setPrice] = useState(1);
    const [lat, setLat] = useState(33.6846);
    const [lng, setLng] = useState(-117.8265049);

    const body = document.querySelector('body')
    
    function showDeleteAcntModal() {
        body.classList.add('modal-open')
        body.style.paddingRight = '17px'
        // e.preventDefault()
    }

    function hideDeleteAcntModal(e) {
        body.classList.remove('modal-open')
        body.style.paddingRight = '0'
        // e.preventDefault()
    }


    const _setFoodType = (ft) => {
        setFoodType(ft)
    }
    const _setRating = (ft) => {
        setFoodType(ft)
    }
    return (
        <>
            <div className="main-search-input">

                <div className="main-search-input-item">
                    <div className="contact-form-action">
                        <form action="#">
                            <div className="form-group mb-0">
                                    <SelectLocation lat={lat} setLat={setLat} lng={lng} setLng={setLng}  />
                            </div>
                        </form>
                        
                    </div>
                </div>

                <div className="main-search-input-item location">
                    <SelectFood foodType={foodType} setFoodType={setFoodType}/>
                </div>
                <div className="main-search-input-item location">
                    <SelectRating rating={rating} setRating={setRating}/>
                </div>
                <div className="main-search-input-item location">
                    <SelectPrice price={price} setPrice={setPrice}/>
                </div>


                <div className="main-search-input-btn">
                    {/* <ResultPage text="search"/> */}
                    <button className="button theme-btn" type="submit" onClick={()=>{
                        GetRestaurantsFromApi({lat,lng,foodType,rating,price})
                        .then((res) => {
                            setPopItemList(res.data.businesses);
                            console.log(res); 
                            //toggleShowPop(set,flag)
                            toggleShowPop({set:true,val:true});
                            showDeleteAcntModal();
                        });
                    }}>
                        Search</button>

                </div>

            </div>
        </>
    )
}
