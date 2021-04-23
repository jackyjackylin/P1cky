import React, {useState} from 'react'
import  { FiSearch } from 'react-icons/fi'
import SelectCountry from "../../common/SelectCountry";
import SelectFood from "../../common/SelectFood";
import SelectRating from "../../common/SelectRating";
import SelectPrice from "../../common/SelectPrice";
import Select from "react-select";
import WidgetFilterPrice from "../../sidebars/widgets/WidgetFilterPrice";
import App from '../../common/GetRestaurantsFromApi';
import GetRestaurantsFromApi from '../../common/GetRestaurantsFromApi';


// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);


export default function BannerOneSearchInput() {
    const [keyword, setKeyword] = useState("");
    const [foodType, setFoodType] = useState("");
    const [rating, setRating] = useState(1);
    const [price, setPrice] = useState(1);
    const _setFoodType = (ft) => {
        setFoodType(ft)
      }
    const _setRating = (ft) => {
        setFoodType(ft)
      }
    function kw_handleChange(evt){
        const value = evt.target.value;
        setKeyword(value);
    }
    function handleSubmit(event){
        alert('Keyword was submitted: ' + keyword + " ," + foodType + " ," + rating);
        event.preventDefault();
    }
    return (
        <>
            <div className="main-search-input">

                <div className="main-search-input-item">
                    <div className="contact-form-action">
                        <form action="#">
                            <div className="form-group mb-0">
                            <span className="form-icon">
                                <FiSearch/>
                            </span>
                                <input className="form-control" type="text" name="keywords"
                                        onChange={kw_handleChange}
                                       placeholder="What food?"/>
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
                    <button className="button theme-btn" type="submit" onClick={()=>GetRestaurantsFromApi({keyword,foodType,rating})}>
                        Search</button>

                </div>

            </div>
        </>
    )
}
