import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { BsCollection } from "react-icons/bs";
//import DisplayName from "react-accessible-accordion/dist/types/helpers/DisplayName";

var firebaseConfig = {
    apiKey: "AIzaSyCozpgaiUZgrrIYQpVNFyN3Vv7noqKIFJM",
    authDomain: "p1cky-89cb0.firebaseapp.com",
    databaseURL: "https://p1cky-89cb0-default-rtdb.firebaseio.com",
    projectId: "p1cky-89cb0",
    storageBucket: "p1cky-89cb0.appspot.com",
    messagingSenderId: "709304539538",
    appId: "1:709304539538:web:3e603c88229f7475db094b",
    measurementId: "G-SNKDQXL98K"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  console.log(user);
  const userRef = firestore.doc(`users/${user.uid}`);
  console.log(additionalData);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        //"displayName": displayName, 
        "email": email,
        "photoURL": photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      console.log(userDocument);
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
};



export default firebaseConfig;