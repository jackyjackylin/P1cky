import React, {useEffect, useState,useContext} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLocation, Link } from "react-router-dom";
import { BsListCheck, BsBookmark, BsPencil } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { FiPhone, FiEdit } from 'react-icons/fi'
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlineExclamationCircle,AiFillDelete } from 'react-icons/ai'
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";
import FriendList from "../../components/other/FriendList";
import {AuthContext} from "../../components/providers/UserProvider";
import userDefaultImg from "../../assets/images/userDefaultImg.jpg"; 




function ViewUserDetails() {
    const {currentUser} = useContext(AuthContext);
    const [displayName, setDisplayName] = useState();
    const [bioData, setBioData] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [loaded, setLoaded] = useState(false);
    const { state } = useLocation();
    useEffect(()=> {
        if (state) {
            console.log("state:",state.users)
            setDisplayName(state.users.displayName);
            //setBioData(currentUser.bioData);
            //setLocation(currentUser.location);
            //setPhoneNumber(currentUser.phoneNumber);
            //setLoaded(true)
        }
    },[state])

    return (
        <main className="dashboard-page">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Dashboard" MenuPgTitle="pages" img={sectiondata.dashboard.breadcrumbimg} />

            <section className="dashboard-area padding-top-40px padding-bottom-90px">
                <div className="container">
                    <Tabs>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                                    <TabList className="nav nav-tabs border-0" id="nav-tab">
                                        <Tab>
                                            <div className="nav-item nav-link theme-btn pt-0 pb-0 mr-1">
                                                <span className="la"><AiOutlineUser /></span> Profile
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="nav-item nav-link theme-btn pt-0 pb-0 mr-1">
                                                <span className="la"><BsBookmark /></span> Friends
                                            </div>
                                        </Tab>
                                    </TabList>
                                    {/* <div className="btn-box">
                                        <div  className="theme-btn createNewFriend ml-1"><span className="la"><AiOutlinePlusCircle /></span> Add Friend</div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="tab-content" id="nav-tabContent">
                                    <TabPanel>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="user-profile-action">
                                                    <div className="user-pro-img mb-4">
                                                        <img src= {state.users.photoURL}  alt="User Image"  width="331" height="368"/>
                                                    </div>
                                                    <div className="user-details">
                                                        <h2 className="user__name widget-title pb-2">
                                                            {state.users.displayName}
                                                        </h2>
                                                        <div className="section-heading">
                                                            <p className="sec__desc font-size-15 line-height-24">
                                                            {state.users.bioData}
                                                            </p>
                                                        </div>
                                                        <ul className="list-items mt-3">
                                                            <li>
                                                                <span className="la d-inline-block"><GiPositionMarker /></span> {state.users.location}
                                                            </li>
                                                            <li className="text-lowercase">
                                                                <span className="la d-inline-block"><FiPhone /></span> {state.users.phoneNumber}
                                                            </li>
                                                            <li className="text-lowercase">
                                                                <span className="la d-inline-block"><FaRegEnvelope /></span> {state.users.email}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            {<FriendList uid={state.users.listName}/>}
                                        </div>
                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </section>

            {/* Footer */}
            <Footer />
            <ScrollTopBtn />
        </main>
    );
}

export default ViewUserDetails;
