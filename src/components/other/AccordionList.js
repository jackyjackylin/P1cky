import { FaPlus, FaMinus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import {firestore} from '../../firebase';
import React, {useEffect, useState,useContext} from 'react';
import {AuthContext} from "../../components/providers/UserProvider";
import {IoIosLink} from 'react-icons/io'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function AccordionList ({uid,userList, setUserList}) {
    const [loaded,setLoaded]=useState(false);
    const {currentUser} = useContext(AuthContext);

    var fetchedLists = [];
    var names = [];

    useEffect(() => {


        if(userList.length==0 ){
            fetch()
        }
    },[loaded])

    function adjustBorder(){
        var anchor = document.querySelector(".card-image .card__img");
        if(anchor){
            console.log(anchor.parentElement)
            var awidth = window.getComputedStyle(anchor, null).width
            var parent = anchor.parentElement;
            var pwidth = window.getComputedStyle(parent, null).getPropertyValue("width");
            console.log(parent,pwidth)
        }
    }
    async function fetch() {
        console.log("fetch")
        const doc = firestore.doc(`users/${uid}`).collection('pocketList');
        const listInfo = await doc.get()
        .then (response => {
            response.forEach(doc => {
                names.push(doc.id);
            });
        }).then (()=>{
            console.log("get Restaurants")
            getRestaurants()
        })
        .catch(error => {
            console.log(error);
        });
    }
    const getListInfo=async(value)=>{
        // console.log("list:", value);
        var tmpList = {
            listName: value,
            restaurants: [],
            yelpURL: [],
            photoURL: [],
            address: [],
            restaurantName: [],
        }
        const ref = firestore.doc(`users/${uid}/pocketList/${value}`).collection('restaurantsList');
        const collections = await ref.get()
        .then(collections=>{
            collections.forEach(collection => {
                // console.log("current doc:", collection.id)
                tmpList.restaurants.push(collection.id);
                tmpList.yelpURL.push(collection.data().yelpURL);
                tmpList.photoURL.push(collection.data().photoURL);
                tmpList.restaurantName.push(collection.data().name);
                tmpList.address.push(collection.data().location.address);
            });
            fetchedLists.push(tmpList)
        }).then(()=>{
                setUserList(userList=>[...fetchedLists]);
                setLoaded(loaded=>true);
            }
        )
        .catch(error => {
            console.log(error);
        });
    }
    
    const getRestaurants=async()=> {
        {names.map((value) => {
            getListInfo(value);
        })}
    }

    const delRestaurant=async(docName, resName)=>{
        console.log(docName, resName)
        const res = await firestore.doc(`users/${uid}/pocketList/${docName}/restaurantsList/${resName}`).delete();
        window.location.reload();
    }


    return (
        <>
        
           {<Accordion allowZeroExpanded className="accordion accordion-item pr-4" id="accordionExample">
                {userList.map((item, i) => {
                    return ( 
                        <div className="card mb-3" key={item.listName}>
                            <AccordionItem>
                                <AccordionItemHeading className="card-header ">
                                    <AccordionItemButton className="btn btn-link d-flex align-items-center justify-content-between ">
                                        {item.listName}
                                        <i className="minus"><FaMinus /></i>
                                        <i className="plus"><FaPlus /></i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body accordionList">
                                        <div className="row">
                                            {item.restaurants.map((val, index) => {
                                                return (
                                                    <div key={`${item.restaurantName[index]}-${index}`} className="col-lg-4 column-td-6">
                                                        <div className="restaurant-item">
                                                            <div className="card-image">
                                                                <img src={item.photoURL[index]}  className="card__img" alt="Card" />
                                                            </div>
                                                            <div className="card-content-wrap">
                                                                <div className="card-content">
                                                                    <h4 className="card-title mt-0">{item.restaurantName[index]}</h4>
                                                                    <p className="card-sub">{item.address[index]}</p>
                                                                    <ul className="info-list padding-top-20px">
                                                                        <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.yelpURL[index]}>
                                                                        Link to Yelp
                                                                    </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {(currentUser && currentUser.uid===uid) &&
                                                                    <div className="rating-row">
                                                                        <div className="edit-info-box">
                                                                            <button type="button" className="theme-btn delete-btn border-0 center" onClick={()=>delRestaurant(item.listName,val)}>
                                                                                <span className="la"><FaRegTrashAlt /></span> Delete
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                            <div className="row padding-top-50px"></div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </div>
                    )
                })}
            </Accordion>}
        </>
    );
}

export default AccordionList;
