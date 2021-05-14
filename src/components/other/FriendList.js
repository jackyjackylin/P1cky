import {firestore} from '../../firebase';
import React,{useEffect, useState} from 'react';
import {FaRegTrashAlt } from 'react-icons/fa'
import userDefaultImg from "../../assets/images/userDefaultImg.jpg"; 

function FriendList ({uid}) {

    const [fetchedLists, setFetchedLists] = useState([]);
    const [friends, setFriends] = useState([]);
    const [loaded,setLoaded]=useState(false);
    
    useEffect(() => {
        async function fetchFriend() {
            console.log("fetch")
            const doc = firestore.doc(`users/${uid}`).collection('myFriends');
            var tmpList = [];
            const FriendInfo = await doc.get().then (response => {
                response.forEach(doc => {
                    tmpList.push(doc.id);
                });
            }).then (()=>{
                setFriends(tmpList);
            }).catch(error => {
                console.log(error);
            });
        }
        fetchFriend()
    },[])

    useEffect(()=> {
        friends.map((value) => {
            var tmpList = {
                listName: value,
                displayName: [],
                bioData: [],
                photoURL: []
            }
            console.log("list:", value);
            const friendRef = firestore.doc(`users/${value}`);  
            friendRef.get().then((snapshot)=>{
                try {
                    tmpList.displayName.push(snapshot.data().displayName);
                    tmpList.bioData.push(snapshot.data().bioData);
                    tmpList.photoURL.push(snapshot.data().photoURL);
                    setFetchedLists(fetchedLists=>[...fetchedLists , tmpList]);
                    console.log(fetchedLists);
                } catch (error) {
                    console.log("Error dispaly Friends' Info", error);
                }
            }).then(()=>{
                setLoaded(true);
            })
        })
    },[friends]);

    // const delRestaurant=async(docName, resName)=>{
    //     console.log(docName, resName)
    //     const res = await firestore.doc(`users/${uid}/myLists/${docName}/restaurantsList/${resName}`).delete();
    //     window.location.reload();
    // }

    return (
        <>
            {loaded && fetchedLists.map((item, i) => {
                return(
                    <div key={i} className="col-lg-4 column-td-6">
                        <div className="card-item">
                            <div className="card-image-wrap"> 
                                <div className="card-image">
                                    <img src={item.photoURL===null? userDefaultImg: item.photoURL} className="card__img" alt="Card" />
                                </div>
                            </div>
                            <div className="card-content-wrap">
                                <div className="card-content">
                                    <h4 className="card-title mt-0">{item.displayName}</h4>
                                    <p className="card-sub">{item.bioData}</p>
                                </div>
                                <div className="rating-row">
                                    <div className="edit-info-box">
                                    <button type="button" className="theme-btn delete-btn border-0">
                                        <span className="la"><FaRegTrashAlt /></span> Delete
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
         </>
    );
}

export default FriendList;
