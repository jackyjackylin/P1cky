import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { FaRegEnvelope } from 'react-icons/fa'
import { auth } from "../../../firebase";


function RecoverPassBox() {

    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const sendResetEmail = event => {
        event.preventDefault();
        console.log(email);
        auth.sendPasswordResetEmail(email)
          .then(() => {
            setEmailHasBeenSent(true);
            setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
          })
          .catch(() => {
            setError("Error resetting password");
          });
    };
    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
        if(name === 'resetEmail') {
            console.log(email);
            setEmail(value);
        }
    };

    return (
        <>
            <section className="form-shared padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="billing-form-item mb-0">
                                <div className="billing-title-wrap">
                                    <h3 className="widget-title font-size-28">Recover Password!</h3>
                                    <p className="font-size-16 font-weight-medium">Enter the email of your account
                                        to reset password.
                                        Then you will receive a link to email to reset the password.If you have any
                                        issue about reset password <Link to="/contact" className="color-text">contact us</Link>
                                    </p>
                                </div>
                                <div className="billing-content">
                                    <div className="contact-form-action">
                                        <form method="post">
                                            <div className="input-box">
                                                <label className="label-text">Your Email</label>
                                                <div className="form-group">
                                                    <span className="la form-icon"><FaRegEnvelope /></span>
                                                    <input className="form-control" type="email" name="resetEmail" placeholder="Enter email address" onChange = {(event) => onChangeHandler(event)}/>
                                                </div>
                                            </div>
                                            <div className="btn-box margin-top-20px margin-bottom-20px">
                                                <button className="theme-btn border-0" type="submit" onClick={(event) => {sendResetEmail(event);}}>
                                                    reset password
                                                </button>
                                            </div>
                                            <p className="font-weight-medium">
                                                <Link to="/login" className="color-text">Login </Link>
                                                or
                                                <Link to="/sign-up" className="color-text"> Register</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RecoverPassBox;
