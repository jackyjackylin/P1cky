import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'

function BlogCommentFields() {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-box">
                            <label className="label-text">Name</label>
                            <div className="form-group">
                                <span className="form-icon"><AiOutlineUser /></span>
                                <input className="form-control" type="text" name="name" placeholder="Your Name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-box">
                            <label className="label-text">Email</label>
                            <div className="form-group">
                                <span className="form-icon"><FaRegEnvelope /></span>
                                <input className="form-control" type="email" name="email" placeholder="Email Address" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="input-box">
                            <label className="label-text">Message</label>
                            <div className="form-group">
                                <span className="form-icon"><BsPencil /></span>
                                <textarea className="message-control form-control" name="message" placeholder="Write Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="upload-btn-box">
                            <button className="theme-btn border-0" type="submit" value="submit">
                                <i className="la la-paper-plane"></i> Submit comment
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default BlogCommentFields;
