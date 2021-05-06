import React from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Banner6 from "../../components/banner/banner6/Banner6";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from '../../assets/images/bread-bg.jpg'
import { FiSearch } from 'react-icons/fi'
const states = {
    breadcrumbimg: breadcrumbimg
}
function AddListing() {
    return (
        <main className="add-listing">
            <GeneralHeader />

            {/* Breadcrumb */}
            {/* <Breadcrumb CurrentPgTitle="Add Listing" MenuPgTitle="Listings" img={states.breadcrumbimg} /> */}

            {/* Banner */}
            <Banner6 title="Add restaurants to your lists!" />


            {/* <section className="faq-area padding-top-100px padding-bottom-100px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-content">
                            <div className="contact-form-action">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-lg-7 mx-auto">
                                            <div className="input-box">
                                                <div className="form-group mb-0">
                                                    <button type="button" className="theme-btn submit-btn border-0">
                                                        <span className="d-inline-block"><FiSearch /></span>
                                                    </button>
                                                    <input className="form-control" type="text" name="name" placeholder="Search your restaurants here..." />
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
            </section> */}

            
            {/* <section className="faq-area padding-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row section-title-width section-title-ml-mr-0">
                        <div className="col-lg-12">
                            <SectionsHeading title={sectiondata.accordions.sectitle} desc={sectiondata.accordions.seccontent} />
                            <AccordionList accordionItems={sectiondata.accordions.items} />
                        </div>
                    </div>

                    <div className="section-block-2 margin-top-120px"></div>
                </div>
            </section> */}

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>

    );
}

export default AddListing;
