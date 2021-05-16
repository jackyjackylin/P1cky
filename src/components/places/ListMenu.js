import Popup from 'reactjs-popup';
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai'
import React,{ useEffect, useState, useContext } from 'react';
import {firestore} from '../../firebase';
import {AuthContext} from "../../components/providers/UserProvider";
const ListMenu = () => {
  const [listNames, setListNames] = useState([])
  const {currentUser} = useContext(AuthContext);


  useEffect(()=>{
     fetch()
  },[])

  async function fetch() {
    console.log("fetch")
    const doc = firestore.doc(`users/${currentUser.uid}`).collection('pocketList');
    const listInfo = await doc.get()
    var names = [];
    listInfo.forEach(doc => {
          names.push(doc.id);
      });
    setListNames(listNames=>names)
  }
  


  return (
  // <div className="menu">
    <Popup
      trigger={<div className="menu-item"> <AiOutlinePlusCircle/>To pocket list </div>}
      position="left center"
      on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: '0px', border: '10px', "zIndex": "10000"}}
      arrow={true}
    >
      <div className="menu">
        {listNames.map((name)=> {
          return(
            <div className="menu-item sub-menu"> {name} </div>
          )
        })}
      </div>
    </Popup>
  );
  // </div>
};

export default ListMenu;