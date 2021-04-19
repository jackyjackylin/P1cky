import React from 'react';
import {Link} from "react-router-dom";
import Button from "../components/common/Button";
import { RiReplyLine } from 'react-icons/ri'
import Copyright from "../components/common/footer/Copyright";
import errorimg from '../assets/images/404-img.png'

const state = {
    img: errorimg
}
function Error() {
    return (
        <main className="error-page">
            <section className="error-area padding-top-140px">
                <div className="error-shape"></div>
                <div className="error-actions">
                    <ul>
                        <li><Link to="/">Back to Home</Link></li>
                        <li><Link to="/faq">Help</Link></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="error-content text-center">
                                <img src={state.img} alt="error" className="w-100"/>
                                    <div className="section-heading padding-top-30px">
                                        <h3 className="sec__title pt-0 before-none">Oops! Page not found.</h3>
                                        <p className="sec__desc">
                                            The page you are looking for might have been removed,
                                            had its name changed, or is temporarily unavailable.
                                            You can check out our <Link to="/faq" className="color-text">Help
                                            Center</Link>
                                        </p>
                                    </div>
                                    <div className="or-box margin-top-30px margin-bottom-35px">
                                        <span>or</span>
                                    </div>
                                    <div className="btn-box">
                                        <Button text="back to home" url="/">
                                            <span className="la"><RiReplyLine /></span>
                                        </Button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <Copyright />
                </div>
            </section>
        </main>
    );
}

export default Error;
