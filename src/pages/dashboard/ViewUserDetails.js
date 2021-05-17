import React, {useEffect, useState,useContext} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLocation} from "react-router-dom";
import { BsBookmark } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineUser, AiOutlinePlusCircle} from 'react-icons/ai'
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";
import FriendList from "../../components/other/FriendList";
import {AuthContext} from "../../components/providers/UserProvider";
import AccordionList from "../../components/other/AccordionList";
import ForkListCheckList from '../../components/other/ForkListCheckList';




function ViewUserDetails() {
    const {currentUser} = useContext(AuthContext);
    const [displayName, setDisplayName] = useState();
    const [bioData, setBioData] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [listName, setListName] = useState("");
    const [userList, setUserList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const { state } = useLocation();
    useEffect(()=> {
        if (state) {
            console.log("state:",state.users)
            setDisplayName(state.users.displayName);
            setBioData(state.users.bioData);
            setLocation(state.users.location);
            setPhoneNumber(state.users.phoneNumber);
            setEmail(state.users.email);
            setPhotoURL(state.users.photoURL);
            setListName(state.users.listName);
            setLoaded(true);
        }
    },[state])

    
    useEffect(() => {
        const body = document.querySelector('body')
        function showDeleteListModal(e) {
            body.classList.add('fork-list-modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
        }

        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if(target.matches('.forkList')){
                        showDeleteListModal.call(target,e)
                        break
                    }
                }
            },false
        )
        function hideDeleteListModal(e) {
            body.classList.remove('fork-list-modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }

        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if (target.matches('.fork-list-modal .modal-bg, .btn-box .hide-fork-list')) {
                        hideDeleteListModal.call(target, e)
                        break
                    }
                }
            }, false
        )
    })


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
                                    <div className="btn-box">
                                        <div  className="theme-btn forkList"><span className="la"><AiOutlinePlusCircle /></span> Fork PocketLists</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="tab-content" id="nav-tabContent">
                                    <TabPanel>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="user-profile-action">
                                                    <div className="user-pro-img mb-4">
                                                        <img src= {photoURL}  alt="User Image"  width="331" height="368"/>
                                                    </div>
                                                    <div className="user-details">
                                                        <h2 className="user__name widget-title pb-2">
                                                            {displayName}
                                                        </h2>
                                                        <div className="section-heading">
                                                            <p className="sec__desc font-size-15 line-height-24">
                                                            {bioData}
                                                            </p>
                                                        </div>
                                                        <ul className="list-items mt-3">
                                                            <li>
                                                                <span className="la d-inline-block"><GiPositionMarker /></span> {location}
                                                            </li>
                                                            <li className="text-lowercase">
                                                                <span className="la d-inline-block"><FiPhone /></span> {phoneNumber}
                                                            </li>
                                                            <li className="text-lowercase">
                                                                <span className="la d-inline-block"><FaRegEnvelope /></span> {email}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                {loaded && <AccordionList uid={listName} userList={userList} setUserList={setUserList}/>}
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            {<FriendList uid={listName}/>}
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
            <div className="modal-form text-center">
                <div className="modal fade fork-list-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-lg" role="document" >
                        <div className="modal-content p-4">
                            {loaded && <ForkListCheckList uid={listName}/>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ViewUserDetails;
