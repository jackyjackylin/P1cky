import React, {useEffect, useState} from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from "react-router-dom";
import sectiondata from "../../store/store";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)


    useEffect(() => {
        function showResNavMenu() {
            this.classList.toggle('active')
        }
        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if (target.matches('.side-menu-ul li')) {
                        showResNavMenu.call(target, e)
                        break
                    }
                }
            }, false
        )
    })

    return (
        <>
            <div className="main-menu-content">
                <nav>
                    <ul>
                        {sectiondata.headermenu.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path}>{item.title} {item.dropdown ? <FiChevronDown /> : ''}</Link>
                                    {
                                        item.dropdown ? (
                                            <ul className="dropdown-menu-item">
                                                {item.dropdown.map((ditem, index2) => {
                                                    return (
                                                        <li key={index2}><Link to={ditem.path}>{ditem.title}</Link></li>
                                                    )
                                                })}
                                        </ul>
                                        ) : ''
                                    }

                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
            </div>
            <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close" onClick={() => setNavOpen(!navOpen)}></div>
                </div>
                <div className="side-menu-wrap">
                    <ul className="side-menu-ul">

                        {sectiondata.headermenu.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link to={item.path}>{item.title}</Link> {item.dropdown ? <span className="la-angle-down"><FiChevronDown /></span> : ''}
                                    {
                                        item.dropdown ? (
                                            <ul className="dropdown-menu-item">
                                                {item.dropdown.map((ditem, di) => {
                                                    return (
                                                        <li key={di}><Link to={ditem.path}>{ditem.title}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        ) : ''
                                    }

                                </li>
                            )
                        })}

                    </ul>
                    <div className="side-nav-button">
                        <Link to="/login" className="theme-btn">login</Link>
                        <Link to="/sign-up" className="theme-btn">Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
