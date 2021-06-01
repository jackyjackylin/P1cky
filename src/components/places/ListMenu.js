import Popup from 'reactjs-popup';
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai'
import React,{ useEffect, useState, useContext } from 'react';
import {firestore} from '../../firebase';
import {AuthContext} from "../providers/UserProvider";
import Tooltip from '@material-ui/core/Tooltip';
import {Scrollbars} from 'react-custom-scrollbars';
import { FiHeart } from 'react-icons/fi'
const ListMenu = ({item, isNearby}) => {
  const [listNames, setListNames] = useState([])
  const {currentUser} = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [price, setPrice] = useState("");

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };


  useEffect(()=>{
     fetch()
  },[])

  useEffect(()=>{
    console.log(open)
  },[open])

  const addToLists = async (list) => {
    handleTooltipOpen()
    console.log(list,item)
    let data = {
      photoURL: item.image_url,
      yelpID: item.id,
      location:{
          address: item.location.display_address,
          city: item.location.city,
          state: item.location.state,
          country: item.location.country,
          zipCode: item.location.zip_code
      },
      name: item.name,
      categories: item.categories,
      rating: item.rating? item.rating: "",
      price: item.price? price: "",
      phone: item.display_phone,
      yelpURL: item.url,
  }
    const userRef = await firestore.doc(`users/${currentUser.uid}/pocketList/${list}/restaurantsList/${data.yelpID}`).set(data)
    
    // console.log(item)
    // e.preventDefault();
  }
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
      trigger={isNearby? <div className="menu-item-love"><FiHeart/></div> : (<div className="menu-item"><AiOutlinePlusCircle/>To pocket list</div>)}
      position="left bottom"
      on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: '0px', border: '10px', "zIndex": "10000"}}
      arrow={true}
    >
      <div className="menu">
        <Tooltip
              title="Successfully added to the list"
              PopperProps={{
                disablePortal: true,
              }}
              placement="top-end"
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener>
                <div></div>
        </Tooltip>
        <Scrollbars style={{ width: 200, height: 150 }}>
        {listNames.map((name,index)=> {
          return(
              <div className="menu-item sub-menu" key={index} onClick={()=>addToLists(name)} onMouseLeave={handleTooltipClose} > 
                {name}
              </div>
          )
        })}
         </Scrollbars>
        
      </div>
    </Popup>
  );
  // </div>
};

export default ListMenu;