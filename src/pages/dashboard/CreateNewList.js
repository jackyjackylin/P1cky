import {firestore} from '../../firebase';
import React,{useState, useEffect} from 'react';

function CreateNewList({uid}) {
    const [listName, setListName]=useState('')

    const data = {
    }

    const handleInput = (val) => {
        setListName(val.target.value);
    };

    const onSubmit= e => {
        console.log("uiddd:", uid);
        e.preventDefault();
        firestore.doc(`users/${uid}`).collection('myLists').doc(`${listName}`).set(data)
        .then(()=>console.log("uploaded"))
        .then(()=>window.location.reload(true))
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input-box">
                    <div className="form-group">
                        <input onChange={handleInput} className="form-control" type="text" name="text" placeholder="Enter the name of your new list" />
                    </div>
                </div>
                <div className="btn-box">
                    <button type="button" className="theme-btn border-0 button-success mr-1 hide-list" data-dismiss="modal">
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

export default CreateNewList;