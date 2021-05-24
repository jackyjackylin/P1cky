import React, {useState, useContext} from 'react';
import SignInOptions from "./SignInOptions";
import {AiOutlineUser} from 'react-icons/ai'
import {FiLock} from 'react-icons/fi'
import {Link, Redirect} from "react-router-dom";
import { auth } from "../../../firebase";
import {AuthContext} from "../../providers/UserProvider";

function LoginBox({title, subtitle}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
          alert(error);
          console.error("Error signing in with password and email", error);
        });
    };    
    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
        if(name === 'userEmail') {
            setEmail(value);
        }else if(name === 'userPassword'){
            setPassword(value);
        }
    };
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
                </div> ㄙㄛ
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">

                                {/* <SignInOptions /> */}

                                {/* <div className="col-lg-12">
                                    <div className="account-assist mt-4 mb-4 text-center">
                                        <p className="account__desc">or</p>
                                    </div>
                                </div> */}
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Username, or email</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input type="email" className="form-control"  name="userEmail" value = {email} placeholder="Username, or email" id="userEmail" onChange = {(event) => onChangeHandler(event)}/>
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
                                            <input type="password" className="form-control"  name="userPassword" value = {password} placeholder="Your Password" id="userPassword" onChange = {(event) => onChangeHandler(event)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <div className="custom-checkbox mr-0 d-flex align-items-center justify-content-between">
                                            {/* <div>
                                                <input type="checkbox" id="chb1" />
                                                <label htmlFor="chb1">Remember Me</label>
                                            </div> */}
                                            <div>
                                                <Link to="/recover" className="color-text font-weight-medium">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="btn-box margin-top-20px margin-bottom-20px">
                                        <button className="theme-btn border-0" type="submit"  onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                                            Login now
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="font-weight-medium">Not a member? <Link to="/sign-up" className="color-text"> Register</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginBox;