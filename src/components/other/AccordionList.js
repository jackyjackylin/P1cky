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

function AccordionList ({uid}) {
    const [loaded,setLoaded]=useState(false);
    const [userList, setUserList] = useState([]);
    var fetchedLists = [];
    var names = [];
    let flag = false;

    useEffect(() => {
        if(!loaded){
            fetch()
        }
    },[loaded])

    async function fetch() {
        console.log("fetch")
        const doc = firestore.doc(`users/${uid}`).collection('myLists');
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
            comments: [],
            photoURL: []
        }
        const ref = firestore.doc(`users/${uid}/myLists/${value}`).collection('restaurantsList');
        const collections = await ref.get()
        .then(collections=>{
            collections.forEach(collection => {
                // console.log("current doc:", collection.id)
                tmpList.restaurants.push(collection.id);
                tmpList.comments.push(collection.data().comments);
                tmpList.photoURL.push(collection.data().photoURL);
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
        const res = await firestore.doc(`users/${uid}/myLists/${docName}/restaurantsList/${resName}`).delete();
        window.location.reload();
    }

    return (
        <>
        
           {<Accordion allowZeroExpanded className="accordion accordion-item pr-4" id="accordionExample">
                {userList.map((item, i) => {
                    console.log("now:", item)
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
                                    <div className="card-body">
                                        <div className="row">
                                            {item.restaurants.map((val, index) => {
                                                return (
                                                    <div key={`${item.listName}-${index}`} className="col-lg-4 column-td-6">
                                                        <div className="restaurant-item">
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
                                                                        <button type="button" className="theme-btn delete-btn border-0" onClick={()=>delRestaurant(item.listName,val)}>
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

            </Accordion>}
        </>
    );
}

export default AccordionList;
