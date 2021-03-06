import React, { useState , useContext} from 'react'
import { FiPlus, FiPlusCircle, FiBookmark, FiSearch } from 'react-icons/fi';
import { BsListCheck, BsQuestion, BsGear, BsPower } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import {Link} from "react-router-dom";
import Button from "../../common/Button";
import {AuthContext} from "../../providers/UserProvider";
import { auth } from "../../../firebase";
import userDefaultImg from "../../../assets/images/userDefaultImg.jpg"; 


export default function HeaderAuthorAccess() {
    const [AuthorAccessOpen, setAuthorAccessOpen] = useState(false)
    const { currentUser } = useContext(AuthContext);

    const signOutUser = (event) => {
        auth.signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
        });
    }

    return (
        <>
            <div className="logo-right-content">
                <ul className="author-access-list">
                    {currentUser ? <li>Hi {currentUser.displayName}</li>:
                    <li>
                        <Link to="/login">login</Link>
                        <span className="or-text">or</span>
                        <Link to="/sign-up">Sign up</Link>
                    </li>
                    }
                    {currentUser && window.location.pathname.split("/").pop()!="" &&
                    <li>
                        <Button text="Pick by filter" url="/" >
                            <FiSearch />
                        </Button>
                    </li>
                    }                   
                </ul>
                {currentUser && <div className="side-user-menu-open" onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}>
                    <AiOutlineUser />
                </div>}
            </div>

            {/* Side User panel */}
            <div className={AuthorAccessOpen ? 'side-user-panel active' : 'side-user-panel'}>
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close" onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}></div>
                </div>
                <div className="side-menu-wrap side-user-menu-wrap">

                    <div className="side-user-img">
                        <img src= {currentUser? (currentUser.photoURL==""? userDefaultImg : currentUser.photoURL) : userDefaultImg} alt="User" />
                        <h4 className="su__name">{currentUser? currentUser.displayName: ""}</h4>
                        <span className="su__meta">{currentUser? currentUser.bioData: ""}</span>
                        <div className="avatar-icon">
                            <Link to="/dashboard" data-toggle="tooltip" data-placement="top" title="Change Avatar"> <FiPlus /></Link>
                        </div>
                    </div>

                    <ul className="side-menu-ul">
                        <li><Link to={{
                            pathname: "/dashboard",
                            state: {
                              index: 1, // save the current location and pass with route push
                            }
                        }}><AiOutlineUser className="user-icon" /> My Profile</Link></li>
                        <li><Link to={{
                            pathname: "/dashboard",
                            state: {
                                index: 0, // save the current location and pass with route push
                            }
                        }}><BsListCheck className="user-icon" /> My Listings</Link></li>
                        <li><Link to={{
                            pathname: "/dashboard",
                            state: {
                                index: 2, // save the current location and pass with route push
                            }
                        }}><FiBookmark className="user-icon" /> My Friends</Link></li>
                        {/* <li><Link to="/dashboard"><FiPlusCircle className="user-icon" /> Add to List</Link></li> */}
                        <li><div className="dropdown-divider"></div></li>
                        <li><Link to="/" onClick={event => {signOutUser(event);}}><BsPower className="user-icon" /> Sign Out</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
