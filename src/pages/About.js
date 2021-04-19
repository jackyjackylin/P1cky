import React from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Banner5 from "../components/banner/banner5/Banner5";
import ImageBox from "../components/about/ImageBox";
import About2 from "../components/about/About2";
import FunFactsThree from "../components/other/funfacts/FunFactsThree";
import {Link} from "react-router-dom";
import { FiPlus } from 'react-icons/fi'
import SectionsHeading from "../components/common/SectionsHeading";
import Testimonial from "../components/sliders/Testimonial";
import HowItWork4 from "../components/hiw/HowItWork4";
import TeamOne from "../components/team/TeamOne";
import Button from "../components/common/Button";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import sectiondata from "../store/store";

function About() {
    return (
        <main className="about-page">
            {/* Header */}
            <GeneralHeader />

            {/* Banner */}
            <Banner5 />

            <section className="blog-area padding-top-50px padding-bottom-80px before-none after-none">
                <div className="container">
                    <ImageBox items={sectiondata.aboutdata.imagebox} />
                </div>
            </section>

            <section className="about-area padding-bottom-100px">
                <div className="container">
                    <About2 aboutcontent={sectiondata.aboutdata.aboutst2} />
                </div>
            </section>

            <section className="funfact-area section-bg before-none after-none padding-top-100px padding-bottom-100px text-center">
                <div className="container">
                    <div className="row">
                        <FunFactsThree items={sectiondata.funfacts.funfact3} />
                    </div>
                    <div className="row">
                        <div className="col-lg-3 column-td-6 mx-auto">
                            <div className="cta-text-box mt-4">
                                <Link to="/add-listing/new" className="d-flex justify-content-center align-items-center">
                                    <i className="la"><FiPlus /></i> Add Your Business
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                {sectiondata.testimonialdata.tmimage.map((tmimg, index) => {
                    return (
                        <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                    )
                })}
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.testimonialdata.sectitle} desc={sectiondata.testimonialdata.seccontent} />
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto mt-4">
                            <Testimonial slideitems={sectiondata.testimonialdata.sliders} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="hiw-area padding-top-100px padding-bottom-90px after-none text-center section-bg">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw7.sectitle} desc={sectiondata.howitworks.hiw7.seccontent} />
                    </div>
                    <div className="row mt-5">
                        <HowItWork4 items={sectiondata.howitworks.hiw7.items} />
                    </div>
                </div>
            </section>

            {/* Team Area */}
            <section className="team-area padding-top-100px padding-bottom-70px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.teamdata.sectitle} desc={sectiondata.teamdata.seccontent} />
                    </div>

                    <div className="row mt-5">
                        <TeamOne teams={sectiondata.teamdata.teams} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-area padding-bottom-100px text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-width text-center">
                                <SectionsHeading title={sectiondata.calltoactions.cta4.title} desc={sectiondata.calltoactions.cta4.content} />
                                <div className="btn-box mt-4 text-center">
                                    <Button text={sectiondata.calltoactions.cta4.btntext} url={sectiondata.calltoactions.cta4.btnurl} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NewsLetter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default About;
