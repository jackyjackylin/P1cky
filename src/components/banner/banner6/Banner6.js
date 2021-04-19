import React from 'react';
import { FiSearch } from 'react-icons/fi'

function Banner6({title}) {
    return (
        <>
            <section className="breadcrumb-area faq-breadcrumb">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="breadcrumb__title">
                                        {title}
                                    </h2>
                                    <div className="contact-form-action">
                                        <form method="post">
                                            <div className="row">
                                                <div className="col-lg-7 mx-auto">
                                                    <div className="input-box">
                                                        <div className="form-group mb-0">
                                                            <button type="button" className="theme-btn submit-btn border-0">
                                                                <span className="d-inline-block"><FiSearch /></span>
                                                            </button>
                                                            <input className="form-control" type="text" name="name" placeholder="Search your question here..." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Banner6;