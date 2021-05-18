import React, {useEffect, useState, useContext} from 'react';
import { FiPlusCircle } from 'react-icons/fi'
import sectiondata from "../../../store/store";
import AddRestaurants from "../../common/AddRestaurants";
import {AuthContext} from "../../providers/UserProvider";
import AddToListCheckList from "../../other/AddToListCheckList";
import {firestore} from "../../../firebase";
import { GrStatusGood } from 'react-icons/gr'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import axios from 'axios';
import {Link} from "react-router-dom";
import {
    Combobox,
    ComboboxInput,
  } from "@reach/combobox";


function Banner6({title}) {
    const {currentUser} = useContext(AuthContext);
    const [loaded, setLoaded] = useState(false);
    const [emptyInput, setEmptyInput] = useState(true);
    const [lists, setLists] = useState([]);
    const [restaurant, setRes] = useState("");
    const [restaurantName, setName] = useState("");
    const [businesses, setBusinesses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [photoURL, setPhotoURL] = useState("");
    const [yelpID, setYelpID] = useState("");
    const [address, setAddress] = useState([])
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("");
    const [yelpURL, setYelpURL] = useState("");
    const [rating, setRating] = useState();
    const [price, setPrice] = useState("");


    let data = {
        photoURL: photoURL,
        yelpID: yelpID,
        location:{
            address: address,
            city: city,
            state: state,
            country: country,
            zipCode: zipCode
        },
        name: restaurantName,
        categories: categories,
        rating: rating,
        price: price,
        phone: phone,
        yelpURL: yelpURL,
    }

    useEffect(()=> {
        if (currentUser) {
            setLoaded(true)
        }
    },[currentUser])

    useEffect(()=> {
        if (restaurant) {
            setEmptyInput(false)
            console.log("input change:", restaurant)
            console.log("empty change:", emptyInput)
            searchRestaurant(restaurant.value.structured_formatting.main_text, restaurant.value.structured_formatting.secondary_text)
            .catch((err)=>console.log(err))
        }
        
    },[restaurant])

    useEffect(() => {
        const body = document.querySelector('body')

        function showPocketListModal(e) {
            body.classList.add('add-to-list-modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
            console.log("empty?", emptyInput)
        }

        function showAddedSuccessfullytModal(e) {
            body.classList.add('added-successfully-modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
        }

        function showEmptyInputModal(e) {
            body.classList.add('empty-input-modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
            console.log("empty???", emptyInput)
        }

        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if (target.matches('.breadcrumb-wrap .theme-btn')) {
                        if (emptyInput) {
                            showEmptyInputModal.call(target, e)
                            break
                        }
                        else {
                            showPocketListModal.call(target, e)
                            hideEmptyInputModal.call(target, e)
                            break
                        }
                        
                    }else if (target.matches('.add-to-list-modal .btn-box .add-btn') && restaurantName.length && lists.length) {
                        showAddedSuccessfullytModal.call(target, e)
                        break
                    }
                }
            },false
        )
        function hidePocketListModal(e) {
            body.classList.remove('add-to-list-modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }

        function hideAddedSuccessfullytModal(e) {
            body.classList.remove('added-successfully-modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }

        function hideEmptyInputModal(e) {
            body.classList.remove('empty-input-modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }

        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if (target.matches('.add-to-list-modal .modal-bg, .btn-box .theme-btn')) {
                        hidePocketListModal.call(target, e)
                        break
                    }else if (target.matches('.added-successfully-modal .btn1-box .hide-list')) {
                        hideAddedSuccessfullytModal.call(target, e)
                        break
                    }else if (target.matches('.empty-input-modal .modal-bg, .btn2-box .theme-btn')) {
                        hideEmptyInputModal.call(target, e)
                        break
                    }
                }
            }, false
        )
    })

    const addToLists = async _ => {
        const promises= lists.map(async docName => {
            const userRef = firestore.doc(`users/${currentUser.uid}/pocketList/${docName}/restaurantsList/${yelpID}`).set(data)
            console.log('store restaurant:', docName, yelpID, restaurantName)
        })
        const res = await Promise.all(promises)
        .then(()=>{
            console.log("reload")
            // window.location.reload();
        })
    }

    const searchRestaurant=async(term, location)=>{
        term = term.replace(/[^\x00-\x7F]/g, "");
        // location = location.replace(/[^\x00-\x7F]/g, "")
        console.log("search from yelp:", term, location)
        axios.get(`${'https://young-thicket-97536.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        params: {
            term: term,
            location: location,
        }
        })
        .then((res)=>{
            setBusinesses(res.data.businesses)
            setName(res.data.businesses[0].name)
            setPhotoURL(res.data.businesses[0].image_url)
            setYelpID(res.data.businesses[0].id)
            setCity(res.data.businesses[0].location.city)
            setZipCode(res.data.businesses[0].location.zip_code)
            setState(res.data.businesses[0].location.state)
            setCountry(res.data.businesses[0].location.country)
            setAddress(res.data.businesses[0].location.display_address)
            setCategories(res.data.businesses[0].categories)
            setPhone(res.data.businesses[0].display_phone)
            setRating(res.data.businesses[0].rating)
            setYelpURL(res.data.businesses[0].url)
            if (res.data.businesses[0].price) {
                setPrice(res.data.businesses[0].price)
            }else{
                console.log("no price")
                setPrice("")
            }
            console.log("===========")
            console.log(businesses)
            console.log("res name:",restaurantName)
            console.log("image:",photoURL)
            console.log("id:",yelpID)
            console.log(categories, phone, rating, yelpURL, price, address)
        })
        .then(()=>{
            if (businesses.length)
                addToLists();
            else
                console.log("no data from yelp")
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <section className="breadcrumb-area faq-breadcrumb" style={{backgroundImage: 'url('+sectiondata.herobanners.banner1.bgimage+')'}}>
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="breadcrumb__title">
                                        {title}
                                    </h2>
                                    <div className="contact-form-action">
                                        <div className="row">
                                            <div className="col-lg-7 mx-auto">
                                                <div className="input-box">
                                                    <div className="form-group mb-0">
                                                        <div className="main-search-input">
                                                            <div className="main-search-input-item location">
                                                                {loaded&&<AddRestaurants value={restaurant} setValue={setRes}/>}
                                                            </div>
                                                            <button type="button" className="theme-btn border-0 addToListBtn" data-toggle="modal" data-target=".product-delete-modal">
                                                                <span className="d-inline-block"><FiPlusCircle /></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <div className="modal-form text-center">
                <div className="modal fade add-to-list-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-lg" role="document" >
                        <div className="modal-content p-4">
                            {loaded && <AddToListCheckList uid={currentUser.uid} lists={lists} setLists={setLists} />}
                            <div className="row padding-top-50px"></div>
                            <div className="btn-box">
                                <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="theme-btn border-0 button-danger add-btn" onClick={()=>{
                                    if (restaurant) {
                                        console.log("Add to:", lists);
                                        console.log("restaurant:", restaurant.value.structured_formatting.main_text);
                                        console.log("location: ", restaurant.value.structured_formatting.secondary_text);
                                        searchRestaurant(restaurant.value.structured_formatting.main_text, restaurant.value.structured_formatting.secondary_text)
                                        .catch((err)=>console.log(err))
                                    }
                                    else {
                                        console.log("Empty input")
                                    }
                                }}>
                                    Add!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-form text-center">
                <div className="modal fade added-successfully-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-ml" role="document" >
                        <div className="modal-content p-4">
                            <div className="modal-top border-0 mb-4 p-0">
                                <div className="alert-content">
                                    <span className="la warning-icon"><GrStatusGood /></span>
                                    <h4 className="modal-title mt-2 mb-1">Added Successfully!</h4>
                                    {/* <p className="modal-sub">Add Another Restaurant or Go Check Your Lists</p> */}
                                </div>
                            </div>
                            <div className="btn1-box">
                                {/* <Link to="/add-listing/new"><button type="button" className="theme-btn border-0 button-success mr-1 hide-list" data-dismiss="modal">
                                    Stay
                                </button></Link> */}
                                <Link to="/dashboard"><button type="button" className="theme-btn border-0 button-danger hide-list">
                                    Got It!
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-form text-center">
                <div className="modal fade empty-input-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-ml" role="document" >
                        <div className="modal-content p-4">
                            <div className="modal-top border-0 mb-4 p-0">
                                <div className="alert-content">
                                    <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
                                    <h4 className="modal-title mt-2 mb-1">Input Cannot be Empty</h4>
                                    {/* <p className="modal-sub">Add Another Restaurant or Go Check Your Lists</p> */}
                                </div>
                            </div>
                            <div className="btn2-box">
                                <button type="button" className="theme-btn border-0 button-danger">
                                    Got It!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner6;