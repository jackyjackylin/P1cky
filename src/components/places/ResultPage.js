import React ,{useContext} from 'react';
import Popup from 'reactjs-popup';
import {AuthContext} from "../providers/UserProvider";
import ListMenu from "./ListMenu";
import {IoIosLink} from 'react-icons/io'
import { AiOutlineEye, AiFillDollarCircle} from 'react-icons/ai'
import { FiPhone, FiHeart, FiX } from 'react-icons/fi'
import { FaMoneyBillWave } from 'react-icons/fa'
import { nanoid } from 'nanoid';
import Slider from "react-slick";
import {GiChickenOven} from 'react-icons/gi';
import {
    IoMdStar,
    IoMdStarHalf
} from "react-icons/io";
import noImage from "../../assets/images/noImage.png"; 
const rating_to_star = [[],[ <IoMdStarHalf />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStarHalf />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStarHalf />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar className="last-star" />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarHalf />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar className="last-star" />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStarHalf />],
[ <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />]];
function parseLocation(business){
    let location = business.location;
    let res = business.alias
    let addr = ["address1","address2","address3"]

      
    for(let i = 0; i < addr.length; i++){
        let val = addr[i]
        if(location[val] == null) continue
        
        location[val].split(' ').filter((val)=> val!="Ste"  ).forEach((value, index, array)=> res = res+"+"+value)
    }
    res += "+" + location["city"]
    res += "+" + location["state"]
    res += "+" + location["zip_code"]
    res += "+" + location["country"]

    console.log(res);
    return res;
}
function getDirection(business){
    let parsedAddr = parseLocation(business);
    // let params ={
    //     destination: dest
    // }
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${parsedAddr}`);
}

function ResultPage({isPocketList,item,toggleShowPop,showPop,nextItemId}){
    const {currentUser} = useContext(AuthContext);

    try {
        console.log(item)
        return(
            <div className="row mt-5">
                <div className="col-lg-12">
                            <div className="card-item popup-window" >
                                <div className="card-area">
                                <a href="#" className="card-image-wrap">
                                    <div className="card-image">
                                        <img src={item.image_url?item.image_url: item.photoURL? item.photoURL: noImage} width="362" height="242" className="card__img" alt="Place" />
                                        {/* { <span className={item.is_close ? 'badge badge-closed': 'badge' }>{item.is_close ? "Close" : "Open"}</span> } */}
                                        <span className="badge-toggle"  data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                            {showPop ? <FiX/> : <FiHeart/>}
    
                                        </span>  
                                    </div>
                                </a>
                                
                                <div className={`card-content-wrap  popup-window-content`}>
                                    <div className="card-content popup-card">
                                        <a href="#" className="card-title-wrapper">
                                            <h5 className="card-meta">
                                                <span>{<GiChickenOven />}</span> 
                                                <i key={nanoid()}>{item.categories[0].title.trim()}</i>
                                                {(item.categories.length>1) && <i key={nanoid()}> &amp; {item.categories[1].title.trim()}</i>}
                                            </h5>
                                            <h4 className="card-title">{item.name}
                                                <i>{item.titleIcon}</i>
                                            </h4>
                                            <p className="card-sub">
                                                <i>{item.location.city}, {item.location.state} {item.location.zip_code}</i>
                                            </p>
                                        </a>
                                        <ul className="info-list popup-content">
                                            <li>
                                                <span className="la d-inline-block"><FiPhone /></span> {item.display_phone?item.display_phone:item.phone}
                                            </li>
                                            <li>
                                                <span className="la d-inline-block"><IoIosLink style={{fontSize: "0.73em"}}/></span>  <a href={item.url}>
                                                    Link to Yelp
                                                </a>
                                            </li>
                                            <li>
                                                <div className="info-button-row">
                                                    <div>
                                                        <span className="la d-inline-block"><FaMoneyBillWave />  </span> 
                                                        {String(item.price).split('').map(()=> {
                                                            return (
                                                                <a key={nanoid()}> <AiFillDollarCircle /> </a>
                                                            )   
                                                        })}      
                                                    </div>
                                                    <div>
                                                        
                                                        <button className="result button theme-btn green" type="submit" onClick={()=>getDirection(item)}> Get Direction</button>
                                                        {!isPocketList &&
                                                            <button className="result button theme-btn" type="submit" onClick={nextItemId}> Next</button>
                                                        }
                                                        {!isPocketList && currentUser &&
                                                            <ListMenu item={item}/>
                                                        }
                                                        
                                                    </div>
                                                </div>
    
                                                            
                                            </li>
                                        </ul>
                                    </div> 
                                    <div className="rating-row">
                                        <div className="rating-rating">
                                            <span> {rating_to_star[parseFloat(item.rating)/0.5].map((rating, index) => {
                                                    return (
                                                        <span key={index}>{rating}</span>
                                                    )
                                                })}
                                                </span>
                                            <span className="rating-count">{parseFloat(item.rating)}</span>
                                        </div> 
                                        
                                    </div>
                                </div>
                                </div>
                            </div>
                        )
                </div>
            </div>
        )}
        catch(err){
            console.log(err)
            return null;
        }
    
};

export default ResultPage;