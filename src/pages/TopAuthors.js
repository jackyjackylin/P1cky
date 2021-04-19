import React from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import Authors from "../components/sliders/Authors";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from '../assets/images/bread-bg.jpg'
import sectiondata from "../store/store";

const state = {
    breadcrumbimg: breadcrumbimg
}
function TopAuthors() {
    return (
        <main className="top-authors">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Top Authors" MenuPgTitle="pages" img={state.breadcrumbimg} />

            {/* Authors */}
            <section className="author-area  padding-bottom-100px bg-img-transparent before-none">
                <div className="container-fluid">
                    <Authors authoritems={sectiondata.authors.sliders} />
                </div>
            </section>

            {/* Newsletter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default TopAuthors;
