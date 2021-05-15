import React, {useEffect, useState, useContext} from 'react';
import { FiSearch,FiPlusCircle } from 'react-icons/fi'
import sectiondata from "../../store/store";
import AddRestaurants from "../../components/common/AddRestaurants";
import {AuthContext} from "../../components/providers/UserProvider";
import AddToListCheckList from "../../components/other/AddToListCheckList";
import {firestore} from "../..//firebase";


export default function ShowList() {
    const [restaurants, setRestaurants] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [lists, setLists] = useState([]);
    const [restaurantName, setRes] = useState("");
    const {currentUser} = useContext(AuthContext);
    const data = {
        comments: "tmp comments",
        photoURL: "https://firebasestorage.googleapis.com/v0/b/p1cky-89cb0.appspot.com/o/images%2FfEyvLKgSSWeRHPf87PUr1OQotHF3%2Fuserimg5.jpg?alt=media&token=dd5c08b1-3bfb-42b3-9257-dbb331acd645"
    }
    useEffect(() => {
        if(currentUser)
            console.log(`${currentUser.uid} Show`)
    },[currentUser])
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
    

    return(
        <div>
            <div className="modal-form text-center">
            <div className="modal fade add-list-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-bg"></div>
                <div className="modal-dialog modal-lg" role="document" >
                    <div className="modal-content p-4">
                        <span className="pick-from-list-text">
                            Choose one or multiple pocket lists
                            <br></br>  
                            we'll pick one restaurant for you!
                        </span>
                        {currentUser && <AddToListCheckList uid={currentUser.uid} lists={lists} setLists={setLists} />}
                        {/* <div className="row padding-top-100px"></div> */}
                        <div className="btn-box">
                            <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                                Go
                            </button>
                            {/* <button type="button" className="theme-btn border-0 button-danger" onClick={()=>{
                                if (restaurantName) {
                                    console.log("Add to:", lists);
                                    console.log("restaurant:", restaurantName);
                                    addToLists();
                                }
                                else {
                                    console.log("Empty input")
                                }
                            }}>
                                Go!
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

