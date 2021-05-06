import React, {useState, useContext} from 'react';
import SignInOptions from "./SignInOptions";
import {Link, Redirect} from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import { auth, generateUserDocument} from "../../../firebase";
import {AuthContext} from "../../providers/UserProvider";

function SignUpBox({title, subtitle}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    const isPasswordConfirmed = (password,confimPassword) => {
        if(password && confimPassword && password === confimPassword) return true;
        return false;
    }
    const createUserWithEmailAndPasswordHandler = async (event, email, password, displayName, confirmpassword) => {
        event.preventDefault();

        if(!isPasswordConfirmed(password, confirmpassword)){
            // password is not matching, you can show error to your user
            alert("Confirm Password is not matched");
        }
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          console.log(displayName);
          generateUserDocument(user, {displayName});
        }
        catch(error){
          alert('Error Signing up with email and password');
        }
        setEmail("");
        setPassword("");
        setDisplayName("");
        setConfirmpassword("");
    };
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
            setEmail(value);
        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        } else if (name === "confirmPassword") {
            setConfirmpassword(value);
        }
    }
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
      return <Redirect to="/" />;
    }

    return (
        <>
            <div className="billing-form-item mb-0">
                <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
                    <h3 className="widget-title font-size-28 pb-0">
                        {title}
                    </h3>
                    <p className="font-size-16 font-weight-medium">
                        {subtitle}
                    </p>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">
                                <SignInOptions />
                                <div className="col-lg-12">
                                    <div className="account-assist mt-4 mb-4 text-center">
                                        <p className="account__desc">or</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Display Name:</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input type="text" className="form-control"  name="displayName" value={displayName} id="displayName" placeholder="First name" onChange={event => onChangeHandler(event)}/>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Last name</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input className="form-control" type="text" name="text" placeholder="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Username</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input className="form-control" type="text" name="text" placeholder="Username" />
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Email</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FaRegEnvelope />
                                                </span>
                                            <input type="email" className="form-control"  name="userEmail" value={email} id="userEmail" placeholder="Enter email" onChange={event => onChangeHandler(event)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Password</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FiLock />
                                                </span>
                                            <input type="password" className="form-control"  name="userPassword" value={password} id="userPassword" placeholder="Password" onChange={event => onChangeHandler(event)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Confirm Password</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FiLock />
                                                </span>
                                            <input  type="password" className="form-control" name="confirmPassword" value={confirmpassword} id="confirmPassword" placeholder="Confirm password" onChange={event => onChangeHandler(event)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="chb13" />
                                            <label htmlFor="chb13">I Agree to P1cky's <Link to="#" className="color-text">Privacy Policy</Link></label>
                                        </div>
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="chb14" />
                                            <label htmlFor="chb14">I Agree to P1cky's <Link to="#" className="color-text">Terms of Services</Link></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="btn-box margin-top-20px margin-bottom-20px">
                                        <button className="theme-btn border-0" type="submit" onClick={event => {createUserWithEmailAndPasswordHandler(event, email, password, displayName, confirmpassword);}}>
                                            Register account
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="font-weight-medium">
                                        Already have an account? <Link to="/login" className="color-text">Login</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpBox;