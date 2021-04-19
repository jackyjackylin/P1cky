import React, { useState } from 'react'
import { FiPlus, FiPlusCircle, FiBookmark, FiSearch } from 'react-icons/fi';
import { BsListCheck, BsQuestion, BsGear, BsPower } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import {Link} from "react-router-dom";
import Button from "../../common/Button";
import userimg from '../../../assets/images/team1.jpg'

export default function HeaderAuthorAccess() {
    const [AuthorAccessOpen, setAuthorAccessOpen] = useState(false)

    return (
        <>
            <div className="logo-right-content">
                <ul className="author-access-list">
                    <li>
                        <Link to="/login">login</Link>
                        <span className="or-text">or</span>
                        <Link to="/sign-up">Sign up</Link>
                    </li>
                    <li>
                        <Button text="add listing" url="/add-listing/new" >
                            <FiPlusCircle />
                        </Button>
                    </li>
                </ul>
                <div className="side-user-menu-open" onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}>
                    <AiOutlineUser />
                </div>
            </div>

            {/* Side User panel */}
            <div className={AuthorAccessOpen ? 'side-user-panel active' : 'side-user-panel'}>
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close" onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}></div>
                </div>
                <div className="side-menu-wrap side-user-menu-wrap">

                    <div className="side-user-img">
                        <img src={userimg} alt="User" />
                        <h4 className="su__name">Mark Williamson</h4>
                        <span className="su__meta">Joined 3 years ago</span>
                        <div className="avatar-icon">
                            <Link to="/dashboard" data-toggle="tooltip" data-placement="top" title="Change Avatar"> <FiPlus /></Link>
                        </div>
                    </div>

                    <ul className="side-menu-ul">
                        <li><Link to="/dashboard"><AiOutlineUser className="user-icon" /> My Profile</Link></li>
                        <li><Link to="/dashboard"><BsListCheck className="user-icon" /> My Listings</Link></li>
                        <li><Link to="/dashboard"><FiBookmark className="user-icon" /> My Bookmarks</Link></li>
                        <li><Link to="/dashboard"><FiPlusCircle className="user-icon" /> add listing</Link></li>
                        <li><div className="dropdown-divider"></div></li>
                        <li><Link to="#"><BsQuestion className="user-icon" /> help</Link></li>
                        <li><Link to="#"><BsGear className="user-icon" /> Settings</Link></li>
                        <li><Link to="#"><BsPower className="user-icon" /> Sign Out</Link></li>
                    </ul>
                    <div className="side-user-search contact-form-action">
                        <form method="post">
                            <div className="form-group mb-0">
                                <FiSearch className="form-icon" />
                                <input className="form-control" type="search" name="search-field" placeholder="Search by keywords" />
                            </div>
                            <button type="button" className="theme-btn border-0">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
