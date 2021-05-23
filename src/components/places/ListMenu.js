import Popup from 'reactjs-popup';
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai'
import React,{ useEffect, useState, useContext } from 'react';
import {firestore} from '../../firebase';
import {AuthContext} from "../../components/providers/UserProvider";
import Tooltip from '@material-ui/core/Tooltip';

const ListMenu = ({item}) => {
  const [listNames, setListNames] = useState([])
  const {currentUser} = useContext(AuthContext);
  const [selectList,setSelectList] = useState("")
  const [open, setOpen] = React.useState(false);
  const [restaurant, setRes] = useState("");
  const [restaurantName, setName] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [photoURL, setPhotoURL] = useState("");
  const [yelpID, setYelpID] = useState("");
  const [address, setAddress] = useState([])
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [phone, setPhone] = useState("");
  const [yelpURL, setYelpURL] = useState("");
  const [rating, setRating] = useState();
  const [price, setPrice] = useState("");


  // useEffect(() => {
  //   setName(item.name)
  //   setPhotoURL(item.image_url)
  //   setYelpID(item.id)
  //   setCity(item.location.city)
  //   setZipCode(item.location.zip_code)
  //   setState(item.location.state)
  //   setCountry(item.location.country)
  //   setAddress(item.location.display_address)
  //   setCategories(item.categories)
  //   setPhone(item.display_phone)
  //   setRating(item.rating)
  //   setYelpURL(item.url)
  //   if (item.price) {
  //       setPrice(item.price)
  //   }else{
  //       console.log("no price")
  //       setPrice("")
  //   }
  // },[])

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
        {listNames.map((name,index)=> {
          return(
              <div className="menu-item sub-menu" onClick={()=>addToLists(name)} onMouseLeave={handleTooltipClose} > 
                {name}
              </div>
          )
        })}
        
      </div>
    </Popup>
  );
  // </div>
};

export default ListMenu;