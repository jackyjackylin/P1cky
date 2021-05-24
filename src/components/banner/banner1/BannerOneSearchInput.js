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


export default function BannerOneSearchInput({itemList,setPopItemList,toggleShowPop, lat, lng}) {
    const [foodType, setFoodType] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState(1);
    const [curLat, setCurLat] = useState(lat);
    const [curLng, setCurLng] = useState(lng);

    const body = document.querySelector('body')
    
    function showDeleteAcntModal() {
        body.classList.add('modal-open')
        body.style.paddingRight = '17px'
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
                                    <SelectLocation lat={curLat} setLat={setCurLat} lng={curLng} setLng={setCurLng}  />
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
                        console.log("search:", curLat, curLng)
                        if (rating == "") {
                            alert("Please choose the Priority!")
                        }
                        GetRestaurantsFromApi({curLat,curLng,foodType,rating,price})
                        .then((res) => {
                            console.log(res.data.businesses)
                            if(res.data && res.data.businesses){
                                setPopItemList(itemList=> res.data.businesses);
                                console.log(res); 
                                //toggleShowPop(set,flag)
                                toggleShowPop(true);
                                showDeleteAcntModal();
                            }else{
                                alert("No restaurant matches! Try again with different keywords!")
                            }
                                
                        })
                        .catch((err)=>{console.log(err)});
                    }}>
                        Search</button>
                </div>

            </div>
        </>
    )
}
