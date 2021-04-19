import React, {useEffect} from 'react';
import {BsChevronUp} from 'react-icons/bs'

function ScrollTopBtn() {
    useEffect(() => {
        /* ======= Back to Top Button and Navbar Scrolling control ======= */
        const scrollToTopBtn= document.querySelector(".back-to-top")
        const rootElement = document.documentElement

        function handleScroll() {
            // do something on scroll
            if ((rootElement.scrollTop ) > 200) {
                //show button
                scrollToTopBtn.style.display = "block"
            } else {
                //hide button
                scrollToTopBtn.style.display = "none"
            }
        }

        function scrollToTop() {
            //scroll to top logic
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        scrollToTopBtn.addEventListener("click", scrollToTop)
        document.addEventListener("scroll", handleScroll)
    })
    return (
        <>
            <div className="back-to-top show-back-to-top">
                <BsChevronUp />
            </div>
        </>
    );
}

export default ScrollTopBtn;
