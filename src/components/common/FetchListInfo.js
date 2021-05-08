import firestore from '../../firebase';
import React,{useState, useEffect} from 'react';
import { response } from 'express';

export default function FetchListInfo({uid}) {
    useEffect(() => {
        getListInfo();
    }, [])
    const getListInfo=async()=>{
        if (!uid) return null;
            try {
                const resposne = await firestore.doc(`users/${uid}`).collection(myLists).get();
                // const userDocument = await firestore.doc(`users/${uid}`).get();
                console.log(resposne);
                return {
                    uid,
                    ...resposne.data()
                };
            } catch (error) {
            console.error("Error fetching user", error);
        }
    }
}