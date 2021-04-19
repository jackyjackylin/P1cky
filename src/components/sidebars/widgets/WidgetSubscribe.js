import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa'

const state = {
    title: 'Subscribe',
    subtitle: 'You can unsubscribe at any time',
    btnText: 'Go'
}
function WidgetSubscribe() {
    return (
        <>
            <div className="sidebar-widget">
                <h3 className="widget-title">
                    {state.title}
                </h3>
                <div className="title-shape"></div>
                <div className="subscribe-form padding-top-30px">
                    <div className="contact-form-action">
                        <form>
                            <div className="form-group mb-1">
                                <span className="form-icon">
                                    <FaRegEnvelope />
                                </span>
                                <input className="form-control" type="email" name="text" placeholder="Enter your email" />
                                <button type="submit" className="theme-btn submit-btn border-0">
                                    {state.btnText}
                                </button>
                            </div>
                            <p className="font-size-14 font-weight-medium">
                                {state.subtitle}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WidgetSubscribe;
