import {firestore} from '../../firebase';
import React, {useEffect, useState,useContext} from 'react';
import {FaRegTrashAlt, FaIdBadge } from 'react-icons/fa'
import userDefaultImg from "../../assets/images/userDefaultImg.jpg"; 
import { Link } from "react-router-dom";
import {AuthContext} from "../../components/providers/UserProvider";

function FriendList ({uid}) {
    const [fetchedLists, setFetchedLists] = useState([]);
    const [friends, setFriends] = useState([]);
    const [loaded,setLoaded]=useState(false);
    const {currentUser} = useContext(AuthContext);
    useEffect(() => {
        async function fetchFriend() {
            console.log("fetch")
            console.log(uid)
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
                photoURL: [],
                location:[],
                phoneNumber:[],
                email:[],
            }
            console.log("list:", value);
            const friendRef = firestore.doc(`users/${value}`);  
            friendRef.get().then((snapshot)=>{
                try {
                    tmpList.displayName.push(snapshot.data().displayName);
                    tmpList.bioData.push(snapshot.data().bioData);
                    tmpList.photoURL.push(snapshot.data().photoURL);
                    tmpList.location.push(snapshot.data().location);
                    tmpList.phoneNumber.push(snapshot.data().phoneNumber);
                    tmpList.email.push(snapshot.data().email);
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

    const delFriend=async(docName)=>{
        console.log(docName)
        const res = await firestore.doc(`users/${uid}/myFriends/${docName}/`).delete();
        window.location.reload();
    }

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
                                    <p className="card-sub">{item.email}</p>
                                </div>
                                <div className="rating-row">
                                    <div className="edit-info-box">
                                    <Link to={{pathname: `/view-contact-details/${item.listName}`, state: { users: item}}}>
                                        <button type="button" className="theme-btn button-success border-0 ml-1">
                                            <span className="la"><FaIdBadge /></span> View
                                        </button>
                                    </Link>
                                    {(currentUser.uid===uid) && <button type="button" className="theme-btn delete-btn border-0 ml-1" onClick={()=>delFriend(item.listName)}>
                                        <span className="la"><FaRegTrashAlt /></span> Delete
                                    </button>}
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
