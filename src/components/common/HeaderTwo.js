import React, {useEffect} from 'react'
import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderAuthorAccess from "../other/account/HeaderAuthorAccess";
import logosrc from '../../assets/images/logo2.png'

const state = {
    logo: logosrc
}
export default function HeaderTwo() {
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
            <header className="header-area header-area3 p-0">
                <div className="header-menu-wrapper after-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-full-width">
                                    {/* Logo */}
                                    <div className="logo">
                                        <Logo url={state.logo} />
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
