import React, {useState,useEffect}  from 'react'
import GeneralHeader from "../../components/common/GeneralHeader";
import Banner6 from "../../components/banner/banner6/Banner6";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from '../../assets/images/bread-bg.jpg'
import { FiSearch } from 'react-icons/fi'
import googleMapReact from 'google-map-react';
const states = {
    breadcrumbimg: breadcrumbimg
}
function AddListing() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const google = window.google;
        if (typeof google === 'object' && typeof google.maps === 'object') {
            console.log("123");
            setLoaded(true);
        }
        else {
            window.initMap = () => setLoaded(true)
            const gmapScriptEl = document.createElement(`script`)
            gmapScriptEl.src =`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`
            document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
        }
    },[]);

    return (
        <main className="add-listing">
            <GeneralHeader />

            {/* Breadcrumb */}
            {/* <Breadcrumb CurrentPgTitle="Add Listing" MenuPgTitle="Listings" img={states.breadcrumbimg} /> */}

            {/* Banner */}
            {loaded && (            
            <Banner6 title="Add restaurants to your lists!" />
            )}

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
