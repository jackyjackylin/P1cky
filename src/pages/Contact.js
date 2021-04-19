import React from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import AskQuestionField from "../components/contact/AskQuestionField";
import ContactSidebar from "../components/sidebars/ContactSidebar";
import GeneralMap from "../components/contact/GeneralMap";
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from '../assets/images/bread-bg.jpg'
import sectiondata from "../store/store";

const state = {
    breadcrumbimg: breadcrumbimg,
}
function Contact() {
    return (
        <main className="contact-page">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Contact Us" MenuPgTitle="pages" img={state.breadcrumbimg} />

            <section className="contact-area padding-top-40px padding-bottom-80px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <AskQuestionField title="Get in touch" />
                        </div>

                        <div className="col-lg-5">
                            <ContactSidebar contactinfo={sectiondata.contactdata} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="gmaps">
                <GeneralMap />
                <div className="map-address-box">
                    <ul className="map-address">
                        <li>
                            <span className="la"><GoLocation /></span>
                            <h5 className="map__title">address</h5>
                            <p className="map__desc">
                                {sectiondata.contactdata.mapoverlay.address} <br /> {sectiondata.contactdata.mapoverlay.city}
                            </p>
                        </li>
                        <li>
                            <span className="la"><FiPhone /></span>
                            <h5 className="map__title">phone</h5>
                            <p className="map__desc">Local: {sectiondata.contactdata.mapoverlay.number}</p>
                            <p className="map__desc">Local: {sectiondata.contactdata.mapoverlay.number2}</p>
                        </li>
                        <li>
                            <span className="la"><FaRegEnvelope /></span>
                            <h5 className="map__title">email</h5>
                            <p className="map__desc">{sectiondata.contactdata.mapoverlay.email1}</p>
                            <p className="map__desc">{sectiondata.contactdata.mapoverlay.email2}</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default Contact;
