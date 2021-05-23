import {firestore} from '../../firebase';
import React,{useState} from 'react';

function CreateNewFriend({uid}) {
    const [friend, setFriend]=useState('')

    const data = {
    }

    const handleInput = (val) => {
        setFriend(val.target.value);
    };

    const onSubmit= e => {
        console.log(uid);
        console.log(friend);
        e.preventDefault();
        firestore.collection("users").where("email", "==", friend).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(uid!==doc.id){
                    firestore.doc(`users/${uid}`).collection('myFriends').doc(`${doc.id}`).set({"displayName": doc.data().displayName})
                    .then(()=>console.log("Add Friend!!"))
                    .then(()=>window.location.reload(true))
                }else{
                    console.log("Can not Add self as Friend");
                    alert("Can not Add self as Friend");
                    window.location.reload();
                }
            });
        }).catch((error) => {
            console.log("Error fetching user data:", error);
            alert("Can not Find The User")
        });

    }

    return (
        <>
            <div className="input-box">
                <div className="form-group">
                    <input onChange={handleInput} className="form-control" type="text" name="text" placeholder="Enter your Friends' Email" />
                </div>
            </div>
             <div className="btn-box">
                <button type="button" className="theme-btn border-0 button-success mr-1 hide-friend" data-dismiss="modal">
                        Cancel
                </button>
                <button className="theme-btn border-0 button-danger" onClick={(e)=>onSubmit(e)}>
                        Add!
                </button>
            </div>            
        </>
    );
}

export default CreateNewFriend;