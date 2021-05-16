import React, {useEffect, useState,useContext} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom";
import { BsListCheck, BsBookmark, BsPencil } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { FiPhone, FiEdit } from 'react-icons/fi'
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlineExclamationCircle,AiFillDelete } from 'react-icons/ai'
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";
import AccordionList from "../../components/other/AccordionList";
import FriendList from "../../components/other/FriendList";
import {AuthContext} from "../../components/providers/UserProvider";
import { auth , firestore,  storage} from "../../firebase";
import userDefaultImg from "../../assets/images/userDefaultImg.jpg"; 
import CreateNewList from "./CreateNewList"
import CreateNewFriend from "./CreateNewFriend"
import firebase from "firebase/app";
import DeleteListCheckList from '../../components/other/DeleteListCheckList';
import Banner6 from "../../components/banner/banner6/Banner6"

function Dashboard() {
    const {currentUser} = useContext(AuthContext);
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isPhotoOpenForm, setIsPhotoOpenForm] = useState(false)
    const [displayName, setDisplayName] = useState();
    const [bioData, setBioData] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [location, setLocation] = useState("");
    const [file, setFile] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [userList, setUserList] = useState([]);

    useEffect(()=> {
        if (currentUser) {
            console.log("uid:",currentUser.uid)
            setDisplayName(currentUser.displayName);
            setBioData(currentUser.bioData);
            setLocation(currentUser.location);
            setPhoneNumber(currentUser.phoneNumber);
            setLoaded(true)
        }
    },[currentUser])

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
        if(name === 'displayName') {
            setDisplayName(value);
        }else if(name === 'bioData'){
            setBioData(value);
        }else if(name === 'phoneNumber'){
            setPhoneNumber(value);
        }else if(name === 'location'){
            setLocation(value);
        }else if(name === 'currentPassword'){
            setCurrentPassword(value);
        }else if(name === 'newPassword'){
            setNewPassword(value);
        }else if(name === 'confirmNewPassword'){
            setConfirmNewPassword(value);
        }
    };
  
    const updateProfile = async() => {
          const userRef = firestore.doc(`users/${currentUser.uid}`);  
          const snapshot = await userRef.get();
          if (snapshot.exists) {
              try {
                userRef.update({
                      displayName: displayName,
                      bioData: bioData,
                      phoneNumber: phoneNumber,
                      location: location,
                  }).then(() => {
                      auth.currentUser.updateProfile({
                          displayName: displayName,
                          bioData: bioData,
                          phoneNumber: phoneNumber,
                          location: location,
                      });
                  }).then(() => {
                      setIsOpenForm(false);
                      window.location.reload();
                  })
              } catch (error) {
                  console.error("Error creating user document", error);
              }
          }
    }

    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    const handleFireBaseUpload = async (event) => {
        const userRef = firestore.doc(`users/${currentUser.uid}`);  
        event.preventDefault();
        const uploadTask = storage.ref(`/images/${currentUser.uid}/${file.name}`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage.ref("images").child(`${currentUser.uid}/${file.name}`).getDownloadURL().then((url) => {
                userRef.update({
                    photoURL: url,
                }).then(() => {
                    auth.currentUser.updateProfile({photoURL: url,})
                }).then(() => {
                    setIsPhotoOpenForm(false);
                    window.location.reload();
                });
            })
        })
    }

    const removePhoto = async (event) => {
        event.preventDefault();
        const userRef = firestore.doc(`users/${currentUser.uid}`);  
        const snapshot = await userRef.get();
        if (snapshot.exists) { 
            await userRef.update({
                photoURL: ""
            }).then(() => {
                auth.currentUser.updateProfile({
                    photoURL: ""
                });
            }).then(() => {
                setIsOpenForm(false);
                window.location.reload();
            })
        }
    }

    const reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }
    
    const isPasswordConfirmed = (password,confimPassword) => {
        if(password && confimPassword && password === confimPassword) return true;
        return false;
    }
    const handlePasswordUpdate = (event) => {
        event.preventDefault();
        if(!isPasswordConfirmed(newPassword, confirmNewPassword)){
            alert("Confirm Password is not matched");
        } 
        reauthenticate(currentPassword).then(() => {
            console.log("Password reauthenticate!");
            var user = firebase.auth().currentUser;
            user.updatePassword(newPassword).then(() => {
                console.log("Password updated!");
                window.location.reload();
            }).catch((error) => { console.log(error); });
            }).catch((error) => { console.log(error); 
        });   
    } 
    

    useEffect(() => {
        const body = document.querySelector('body')
        function showDeleteAcntModal(e) {
            body.classList.add('modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
        }
        
        function showAddListModal(e) {
            body.classList.add('list-modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
        }

        function showAddFriendModal(e) {
            body.classList.add('friend-modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
        }

        function showDeleteListModal(e) {
            body.classList.add('delete-list-modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
        }

        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if (target.matches('.delete-account-info .delete-account, .card-item .card-content-wrap .delete-btn')) {
                        showDeleteAcntModal.call(target, e)
                        break
                    }else if(target.matches('.btn-box .createNewList')){
                        showAddListModal.call(target,e)
                        break
                    }else if(target.matches('.createNewFriend')){
                        showAddFriendModal.call(target,e)
                        break
                    }else if(target.matches('.deleteList')){
                        showDeleteListModal.call(target,e)
                        break
                    }
                }
            },false
        )
        function hideDeleteAcntModal(e) {
            body.classList.remove('modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }

        function hideAddListModal(e) {
            body.classList.remove('list-modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }

        function hideAddFriendModal(e) {
            body.classList.remove('friend-modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }

        function hideDeleteListModal(e) {
            body.classList.remove('delete-list-modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }

        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if (target.matches('.account-delete-modal .modal-bg')) {
                        hideDeleteAcntModal.call(target, e)
                        break
                    }else if (target.matches('.add-list-modal .modal-bg, .btn-box .hide-list')) {
                        hideAddListModal.call(target, e)
                        break
                    }else if (target.matches('.add-friend-modal .modal-bg, .btn-box .hide-friend')) {
                        hideAddFriendModal.call(target, e)
                        break
                    }else if (target.matches('.delete-list-modal .modal-bg, .btn-box .hide-delete-list')) {
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
            {/* <Breadcrumb CurrentPgTitle="Dashboard" MenuPgTitle="pages" img={sectiondata.dashboard.breadcrumbimg} /> */}
            
            <Banner6 title="Add restaurants to your lists!"/>

            {/*<TestVanillaJs />*/}

            <section className="dashboard-area padding-top-40px padding-bottom-90px">
                <div className="container">
                    <Tabs>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                                    <TabList className="nav nav-tabs border-0" id="nav-tab">
                                        <Tab>
                                            <div className="nav-item nav-link theme-btn pt-0 pb-0 mr-1">
                                                <span className="la"><BsListCheck /></span> Listings
                                            </div>
                                        </Tab>
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
                                        <div  className="theme-btn createNewList"><span className="la"><AiOutlinePlusCircle /></span> create new list</div>
                                        {/* <Link to="/dashboard" className="theme-btn createNewList"><span className="la"><AiOutlinePlusCircle /></span> create new list</Link> */}
                                        {/* <Link to="/add-listing/new" className="theme-btn"><span className="la"><AiOutlinePlusCircle /></span> Add to List</Link> */}
                                        <div  className="theme-btn createNewFriend ml-1"><span className="la"><AiOutlinePlusCircle /></span> Add Friend</div>
                                        {/* <Link to="/dashboard" className="theme-btn createNewList ml-1"><span className="la"><AiOutlinePlusCircle /></span> create new list</Link> */}
                                        {/* <Link to="/add-listing/new" className="theme-btn ml-1"><span className="la"><AiOutlinePlusCircle /></span> Add to List</Link> */}
                                        <div  className="theme-btn deleteList ml-1"><span className="la"><AiFillDelete /></span> delete List</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="tab-content" id="nav-tabContent">
                                    <TabPanel>
                                    <section>
                                        <div className="container">
                                            <div className="row section-title-width section-title-ml-mr-0">
                                                <div className="col-lg-12">
                                                    {loaded && <AccordionList uid={currentUser.uid} userList={userList} setUserList={setUserList}/>}
                                                </div>
                                            </div>
                                            <div className="section-block-2 margin-top-120px"></div>
                                        </div>
                                    </section>
                                    </TabPanel>
                                    
                                    <TabPanel>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="user-profile-action">
                                                    <div className="user-pro-img mb-4">
                                                        <img src= {currentUser? (currentUser.photoURL===""? userDefaultImg : currentUser.photoURL) : userDefaultImg}  alt="User Image"  width="331" height="368"/>
                                                        <div className="dropdown edit-btn">
                                                            <button
                                                                className="theme-btn edit-btn dropdown-toggle border-0 after-none"
                                                                type="button" id="editImageMenu"
                                                                data-toggle="dropdown" aria-haspopup="true"  onClick={() => setIsPhotoOpenForm(!isPhotoOpenForm)}>
                                                                <i className="la la-photo"></i> Edit
                                                            </button>
                                                            <div className={isPhotoOpenForm ? 'dropdown-menu show' : 'dropdown-menu'} aria-labelledby="editImageMenu">
                                                                <div className="upload-btn-box">
                                                                    <form onSubmit={handleFireBaseUpload}>
                                                                        <input  className="input-file-btn" type="file" name="files[]" id="filer_input" multiple="multiple" onChange={handleChange}/>
                                                                        <button className="theme-btn border-0 w-100 button-success" type="submit" value="submit">
                                                                            Save changes
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                                <div className="btn-box mt-3">
                                                                    <button className="theme-btn border-0 w-100" onClick={(event) => removePhoto(event)}>Remove
                                                                        Photo
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="user-details">
                                                        <h2 className="user__name widget-title pb-2">
                                                            {currentUser? currentUser.displayName:""}
                                                        </h2>
                                                        <div className="section-heading">
                                                            <p className="sec__desc font-size-15 line-height-24">
                                                            {currentUser? currentUser.bioData:""}
                                                            </p>
                                                        </div>
                                                        <ul className="list-items mt-3">
                                                            <li>
                                                                <span className="la d-inline-block"><GiPositionMarker /></span> {currentUser? currentUser.location:""}
                                                            </li>
                                                            <li className="text-lowercase">
                                                                <span className="la d-inline-block"><FiPhone /></span> {currentUser? currentUser.phoneNumber:""}
                                                            </li>
                                                            <li className="text-lowercase">
                                                                <span className="la d-inline-block"><FaRegEnvelope /></span> {currentUser? currentUser.email:""}
                                                            </li>
                                                            {/* <li className="text-lowercase">
                                                                <span className="la d-inline-block"><FaGlobeAmericas /></span> {sectiondata.dashboard.website}
                                                            </li> */}
                                                        </ul>
                                                        <div className="user-edit-form mt-7">
                                                            <div className={isOpenForm ? 'dropdown show' : 'dropdown'}>
                                                                <button
                                                                    className="theme-btn edit-form-btn shadow-none w-100 dropdown-toggle after-none"
                                                                    type="button"
                                                                    onClick={() => setIsOpenForm(!isOpenForm)}>
                                                                    <i className="la"><FiEdit /></i> Edit
                                                                </button>
                                                                <div className={isOpenForm ? 'dropdown-menu show' : 'dropdown-menu'}>
                                                                    <div className="contact-form-action">
                                                                        <div className="input-box">
                                                                            <label className="label-text">Name</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><AiOutlineUser /></span>
                                                                                <input type="text" className="form-control"  name="displayName" value={displayName} id="displayName" placeholder="Enter your name" onChange={event => onChangeHandler(event)}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-box">
                                                                            <label className="label-text">Bio Data</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <textarea type="text" className="message-control form-control"  name="bioData" value={bioData} id="bioData" placeholder="Add a bio" onChange={event => onChangeHandler(event)}></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-box">
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><GiPositionMarker /></span>
                                                                                <input type="text" className="form-control"  name="location" value={location} id="location" placeholder="Enter your Location" onChange={event => onChangeHandler(event)}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-box">
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><FiPhone /></span>
                                                                                <input type="text" className="form-control"  name="phoneNumber" value={phoneNumber} id="phoneNumber" placeholder="Enter your Number" onChange={event => onChangeHandler(event)}/>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        <div className="btn-box">
                                                                            <button type="button" className="theme-btn border-0 button-success mr-1" onClick={(event) => updateProfile(event)} >
                                                                                save changes
                                                                            </button>
                                                                            <button type="button" className="theme-btn border-0" onClick={() => setIsOpenForm(!isOpenForm)}>
                                                                                Cancel
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="user-form-action">
                                                    <div className="billing-form-item">
                                                        <div className="billing-title-wrap">
                                                            <h3 className="widget-title pb-0">Change Password</h3>
                                                            <div className="title-shape margin-top-10px"></div>
                                                        </div>
                                                        <div className="billing-content">
                                                            <div className="contact-form-action">
                                                                <form>
                                                                    <div className="input-box">
                                                                        <label className="label-text">Current Password</label>
                                                                        <div className="form-group">
                                                                            <span className="la form-icon"><BsPencil /></span>
                                                                            <input type="password" className="form-control"  name="currentPassword" placeholder="Current Password" onChange={event => onChangeHandler(event)}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="input-box">
                                                                        <label className="label-text">New Password</label>
                                                                        <div className="form-group">
                                                                            <span className="la form-icon"><BsPencil /></span>
                                                                            <input type="password" className="form-control"  name="newPassword" placeholder="New Password" onChange={event => onChangeHandler(event)}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="input-box">
                                                                        <label className="label-text">Confirm New Password</label>
                                                                        <div className="form-group">
                                                                            <span className="la form-icon"><BsPencil /></span>
                                                                            <input type="password" className="form-control"  name="confirmNewPassword" placeholder="Confirm New Password" onChange={event => onChangeHandler(event)}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <button className="theme-btn button-success border-0" onClick={(event) => handlePasswordUpdate(event)}>
                                                                            updated password
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            {loaded && <FriendList uid={currentUser.uid}/>}
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


            {/* Modal */}
            {/* <div className="modal-form text-center">
                <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content p-4">
                            <div className="modal-top border-0 mb-4 p-0">
                                <div className="alert-content">
                                    <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
                                    <h4 className="modal-title mt-2 mb-1">Your account will be deleted permanently!</h4>
                                    <p className="modal-sub">Are you sure to proceed.</p>
                                </div>
                            </div>
                            <div className="btn-box">
                                <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="theme-btn border-0 button-danger">
                                    delete!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="modal-form text-center">
                <div className="modal fade add-friend-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-lg" role="document" >
                        <div className="modal-content p-4">
                            {loaded && <CreateNewFriend uid={currentUser.uid}/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-form text-center">
                <div className="modal fade add-list-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-lg" role="document" >
                        <div className="modal-content p-4">
                            {loaded && <CreateNewList uid={currentUser.uid}/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-form text-center">
                <div className="modal fade delete-list-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div className="modal-bg"></div>
                    <div className="modal-dialog modal-lg" role="document" >
                        <div className="modal-content p-4">
                            {loaded && <DeleteListCheckList uid={currentUser.uid}/>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
