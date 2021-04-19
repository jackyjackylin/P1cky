import React from 'react';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa'

function SignInOptions() {
    return (
        <>
            <div className="col-lg-4">
                <div className="form-group">
                    <button className="theme-btn border-0 w-100" type="submit">
                        <i><FaGoogle /></i> Google
                    </button>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-group">
                    <button className="theme-btn bg-5 border-0 w-100" type="submit">
                        <i><FaFacebookF /></i> facebook
                    </button>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-group">
                    <button className="theme-btn bg-6 border-0 w-100" type="submit">
                        <i><FaTwitter /></i> twitter
                    </button>
                </div>
            </div>
        </>
    );
}

export default SignInOptions;
