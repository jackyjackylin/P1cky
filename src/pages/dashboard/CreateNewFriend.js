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
                firestore.doc(`users/${uid}`).collection('myFriends').doc(`${doc.id}`).set(data)
                .then(()=>console.log("Add Friend!!"))
                .then(()=>window.location.reload(true))
            });
        })
        .catch((error) => {
            console.log("Error fetching user data:", error);
            alert("Can not Find The User")
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input-box">
                    <div className="form-group">
                        <input onChange={handleInput} className="form-control" type="text" name="text" placeholder="Enter your Friends' Email" />
                    </div>
                </div>
                <div className="btn-box">
                    <button type="button" className="theme-btn border-0 button-success mr-1 hide-friend" data-dismiss="modal">
                        Cancel
                    </button>
                    <button className="theme-btn border-0 button-danger" type='submit'>
                        Add!
                    </button>
                </div>
            </form>
            
        </>
    );
}

export default CreateNewFriend;