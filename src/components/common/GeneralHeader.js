import React, {useEffect} from 'react'
import Navbar from './Navbar'
import HeaderAuthorAccess from '../other/account/HeaderAuthorAccess'
import Logo from './Logo'
import logosrc from '../../assets/images/logo.png'

export default function GeneralHeader() {
    useEffect(() => {
        const headerwrap= document.querySelector(".header-menu-wrapper")
        const rootElement = document.documentElement

        function handleScroll() {
            if ((rootElement.scrollTop ) > 10) {
                headerwrap.classList.add('header-fixed')
            } else {
                headerwrap.classList.remove('header-fixed')
            }
        }
        document.addEventListener("scroll", handleScroll)
    })
    return (
        <>
            <header className="header-area">
                <div className="header-menu-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-full-width">
                                    {/* Logo */}
                                    <div className="logo">
                                        <Logo url={logosrc} />
                                    </div>

                                    {/* Navbar */}
                                    <Navbar />

                                    {/* Author Access */}
                                    <HeaderAuthorAccess />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
