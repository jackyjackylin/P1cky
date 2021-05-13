import {firestore} from '../../firebase';
import React,{useState, useEffect} from 'react';

function CreateNewFriend({uid}) {
    const [listName, setListName]=useState('')

    const data = {
    }

    const handleInput = (val) => {
        setListName(val.target.value);
    };

    const onSubmit= e => {
        console.log("uiddd:", uid);
        e.preventDefault();
        firestore.doc(`users/${uid}`).collection('myFriends').doc(`${listName}`).set(data)
        .then(()=>console.log("Add Friend!!"))
        .then(()=>window.location.reload(true))
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