import {firestore} from '../../firebase';
import React,{useState, useEffect} from 'react';

export default function FetchListInfo({uid, userList, setUserList}) {
    const [loaded,setLoaded]=useState(false);
    var fetchedLists = [];
    var names = [];

    useEffect(() => {
        if (!loaded) {
            fetchListInfo();
        }
    },[])

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
    return null;
}