import {firestore} from '../../firebase';
import React,{useState, useEffect} from 'react';

export default function FetchListInfo({uid, userList, setUserList}) {
    const [loaded,setLoaded]=useState(false);
    const [wdwed,dwdwd]=useState(false);

    const getListInfo=async()=>{
        const doc = firestore.doc(`users/${uid}`).collection('myLists');
        const listInfo = await doc.get()
        .then (response => {
            const fetchedLists = [];
            response.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                const fetchedList = {
                    listName: doc.id,
                    ...doc.data()
                };
                fetchedLists.push(fetchedList);
            });
            setUserList(fetchedLists);
        })
        .catch(error => {
            console.log(error);
        });

        console.log("userListssss: ",userList);
        setLoaded(true);
    }
    useEffect(() => {
        if (!loaded) {
            getListInfo();
        }
    },[])
    return null;
}