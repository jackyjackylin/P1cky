import { FaPlus, FaMinus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import {firestore} from '../../firebase';
import React,{useState, useEffect} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// import FetchListInfo from '../common/FetchListInfo'

function AccordionList ({uid}) {
    const [loaded,setLoaded]=useState(false);
    const [userList, setUserList] = useState([]);
    var fetchedLists = [];
    var names = [];

    useEffect(() => {
        if (!loaded) {
            fetchListInfo();
        }
    },[])
    const getListInfo=async(value)=>{
        console.log("list:", value);
        var tmpList = {
            listName: value,
            restaurants: [],
            comments: [],
            photoURL: []
        }
        const ref = firestore.doc(`users/${uid}/myLists/${value}`).collection('restaurantsList');
        const collections = await ref.get()
        .then(collections=>{
            collections.forEach(collection => {
                tmpList.restaurants.push(collection.id);
                tmpList.comments.push(collection.data().comments);
                tmpList.photoURL.push(collection.data().photoURL);
                console.log("tmp:", tmpList);
            });
            fetchedLists.push(tmpList)
        })
        .then(()=>{
            console.log("fetched:", fetchedLists);
            setUserList(fetchedLists);
            console.log("final:", userList);
            setLoaded(true);
        })
        .catch(error => {
            console.log(error);
        });
    }
    const fetchListInfo=async()=>{
        const doc = firestore.doc(`users/${uid}`).collection('myLists');
        const listInfo = await doc.get()
        .then (response => {
            response.forEach(doc => {
                names.push(doc.id);
            });
        }).then (()=>{
            getRestaurants();
            setLoaded(true);
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    
    const getRestaurants=async()=> {
        {names.map((value) => {
            getListInfo(value);
        })}
    }


    return (
        <>
            <Accordion allowZeroExpanded className="accordion accordion-item pr-4" id="accordionExample">
                {userList.map((item, i) => {
                    console.log("now:", item)
                    return ( 
                        <div className="card mb-3" key={i}>
                            <AccordionItem>
                                <AccordionItemHeading className="card-header ">
                                    <AccordionItemButton className="btn btn-link d-flex align-items-center justify-content-between ">
                                        {item.listName}
                                        <i className="minus"><FaMinus /></i>
                                        <i className="plus"><FaPlus /></i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body">
                                        <div className="row">
                                            {item.restaurants.map((val, index) => {
                                                return (
                                                    <div key={i} className="col-lg-4 column-td-6">
                                                        <div className="card-item">
                                                            <div className="card-image">
                                                                <img src={item.photoURL[index]} className="card__img" alt="Card" />
                                                            </div>
                                                            <div className="card-content-wrap">
                                                                <div className="card-content">
                                                                    <h4 className="card-title mt-0">{val}</h4>
                                                                    <p className="card-sub">{item.comments[index]}</p>
                                                                </div>
                                                                <div className="rating-row">
                                                                    <div className="edit-info-box">
                                                                        <button type="button" className="theme-btn button-success border-0 mr-1">
                                                                            <span className="la"><FaRegEdit /></span> Edit
                                                                        </button>
                                                                        <button type="button" className="theme-btn delete-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                            <span className="la"><FaRegTrashAlt /></span> Delete
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
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

            </Accordion>
        </>
    );
}

export default AccordionList;
