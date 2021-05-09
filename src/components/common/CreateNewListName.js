import {firestore} from '../../firebase';
import React,{useState, useEffect} from 'react';

export default function CreateNewListName({uid, listName}) {
    const [loaded,setLoaded]=useState(false);
    const data = {
        restaurants: ['avc', '123jkj'],
        comments: ['Good!', '']
    }

    const addNewList=async()=>{
        const res = await firestore.doc(`users/${uid}`).collection('myLists').doc(listName).set(data);
        setLoaded(true);
        console.log("uploaded!")
    }
    useEffect(() => {
        if (!loaded) {
            addNewList();
        }
    },[])
    return null;
}