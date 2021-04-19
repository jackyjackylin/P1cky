import React from 'react';
import { FiSearch } from 'react-icons/fi'

function WidgetSearchTwo() {
    return (
        <>
            <div className="sidebar-widget">
                <div className="contact-form-action">
                    <form>
                        <div className="form-group">
                            <span className="form-icon">
                                <FiSearch />
                            </span>
                            <input className="form-control" type="text" placeholder="Search..." />
                            <button type="submit" className="theme-btn submit-btn border-0">search</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default WidgetSearchTwo;
