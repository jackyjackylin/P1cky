import React, {useEffect, useState, useContext} from 'react';
import { FiSearch,FiPlusCircle } from 'react-icons/fi'
import sectiondata from "../../../store/store";
import AddRestaurants from "../../common/AddRestaurants";
import {AuthContext} from "../../providers/UserProvider";
import ButtonList from "../../other/ButtonList";
import {firestore} from "../../../firebase";


function Banner6({title}) {
    const {currentUser} = useContext(AuthContext);
    const [restaurants, setRestaurants] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [lists, setLists] = useState([]);
    const [restaurantName, setRes] = useState("");
    const data = {
        comments: "tmp comments",
        photoURL: "https://firebasestorage.googleapis.com/v0/b/p1cky-89cb0.appspot.com/o/images%2FfEyvLKgSSWeRHPf87PUr1OQotHF3%2Fuserimg5.jpg?alt=media&token=dd5c08b1-3bfb-42b3-9257-dbb331acd645"
    }

    useEffect(()=> {
        if (currentUser) {
            setLoaded(true)
        }
    },[currentUser])


    useEffect(() => {
        const body = document.querySelector('body')

        function showDeleteAcntModal(e) {
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
                    if (target.matches('.breadcrumb-wrap .submit-btn')) {
                        showDeleteAcntModal.call(target, e)
                        break
                    }
                }
            },false
        )
        function hideDeleteAcntModal(e) {
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
                    if (target.matches('.add-list-modal .modal-bg, .btn-box .theme-btn')) {
                        hideDeleteAcntModal.call(target, e)
                        break
                    }
                }
            }, false
        )
    })

    const handleRestaurantSearch = () => {
        console.log("here")
        const url  = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?'
        // const location = `location=${this.state.latitude},${this.state.longitude}`;
        // const radius = '&radius=2000';
        // const type = '&keyword=restaurant';
        const key = `&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
        const input = '&input=chipotle';
        const inputtype = '&inputtype=textquery';
        // const restaurantSearchUrl = url + location + radius + type + key;
        const restaurantSearchUrl = url + input + inputtype + key;
        console.log(restaurantSearchUrl);
        fetch(url)
          .then(response => response.json())
          .then(result => setRestaurants({restaurants: result}))
          .catch( e => console.log(e))
        console.log(restaurants);
    }

    const addToLists = () => {
        {lists.map((item, i) => {
            console.log("adding to list " + item)
            updateList(item)
        })}
    }

    const updateList = async(docName) => {
        const userRef = firestore.doc(`users/${currentUser.uid}/myLists/${docName}/restaurantsList/${restaurantName}`).set(data)
        .then(() => {
            console.log("update");
            window.location.reload();
        }).catch((error)=>{
            console.error("Error", error);
        })
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
                                        <form method="post">
                                            <div className="row">
                                                <div className="col-lg-7 mx-auto">
                                                    {/* <div className="input-box">
                                                        <div className="form-group mb-0">
                                                            <button type="button" className="theme-btn submit-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                <span className="d-inline-block"><FiPlusCircle /></span>
                                                            </button>
                                                            <input className="form-control" type="text" name="name" placeholder="Search your restaurants here..." />
                                                        </div>
                                                    </div> */}
                                                    <div className="input-box">
                                                        <div className="form-group mb-0">
                                                            <button type="button" className="theme-btn submit-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                <span className="d-inline-block"><FiPlusCircle /></span>
                                                            </button>
                                                            <AddRestaurants value={restaurantName} setValue={setRes}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <div className="modal-form text-center">
                <div className="modal fade add-list-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-lg" role="document" >
                        <div className="modal-content p-4">
                            {loaded && <ButtonList uid={currentUser.uid} lists={lists} setLists={setLists} />}
                            {/* <div className="row padding-top-100px"></div> */}
                            <div className="btn-box">
                                <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="theme-btn border-0 button-danger" onClick={()=>{
                                    if (restaurantName) {
                                        console.log("Add to:", lists);
                                        console.log("restaurant:", restaurantName);
                                        addToLists();
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
        </>
    );
}

export default Banner6;