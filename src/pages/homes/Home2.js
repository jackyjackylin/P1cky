import React from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import BannerTwo from "../../components/banner/banner2/BannerTwo";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import SectionsHeading from "../../components/common/SectionsHeading";
import PopularDestination from "../../components/places/PopularDestination";
import Button from "../../components/common/Button";
import { BsEye } from 'react-icons/bs'
import SectionDivider from "../../components/common/SectionDivider";
import HowItWorkTwo from "../../components/hiw/hiw2/HowItWorkTwo";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import FunFactsTwo from "../../components/other/funfacts/FunFactsTwo";
import InfoBox3 from "../../components/other/infoboxes/InfoBox3";
import Authors from "../../components/sliders/Authors";
import Testimonial from "../../components/sliders/Testimonial";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import sectiondata from "../../store/store";

function Home2() {
    return (
        <main className="home-2">
            {/* Header */}
            <GeneralHeader />

            {/* Banner */}
            <BannerTwo bgImg={sectiondata.herobanners.banner2.bgimage} />

            {/* Popular Destination */}
            <section className="cat-area destination-area padding-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.populardestination.sectitle} desc={sectiondata.populardestination.seccontent} />
                    </div>

                    <div className="row mt-5">
                        <PopularDestination destinations={sectiondata.populardestination.destinations} />
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="button-shared mt-4 text-center">
                                <Button text={sectiondata.populardestination.viewmorebtn} url={sectiondata.populardestination.viewmorebtnurl}>
                                    <span className="la">
                                        <BsEye />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* How it Work */}
            <HowItWorkTwo />

            <SectionDivider />

            {/* Recommended Place */}
            <section className="card-area padding-top-100px padding-bottom-90px text-center">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.recommendedplaces.sectitle} desc={sectiondata.recommendedplaces.seccontent} />
                    </div>
                    <RecommendedPlace recommendplaces={sectiondata.recommendedplaces.items} />
                </div>
            </section>

            {/* FunFacts */}
            <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.funfacts.funfact2.sectitle} titleClass="text-white" desc={sectiondata.funfacts.funfact2.seccontent} />
                    </div>

                    <FunFactsTwo funfactitems={sectiondata.funfacts.funfact2.counteritems} />
                </div>
            </section>

            {/* How It Work */}
            <section className="hiw-area padding-top-100px padding-bottom-80px after-none text-center">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw2.sectitle} desc={sectiondata.howitworks.hiw2.seccontent} />
                    </div>

                    <InfoBox3 infoitems={sectiondata.howitworks.hiw2.items} isbtnshow={true} />
                </div>
            </section>

            {/* Authors */}
            <section className="author-area padding-top-100px padding-bottom-100px">
                <div className="container-fluid">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.authors.sectitle} titleClass="text-white" desc={sectiondata.authors.seccontent} />
                    </div>

                    <Authors authoritems={sectiondata.authors.sliders} />
                </div>
            </section>

            {/* Testimonial */}
            <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
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

            <SectionDivider />

            {/* Blog */}
            <section className="blog-area padding-top-100px padding-bottom-80px">
                <div className="container">
                    <div className="row section-title-width section-title-ml-mr-0">
                        <div className="col-lg-8">
                            <SectionsHeading title={sectiondata.latestarticles.sectitle} desc={sectiondata.latestarticles.seccontent} />
                        </div>
                        <div className="col-lg-4">
                            <div className="btn-box h-100 d-flex align-items-center justify-content-end">
                                <Button text={sectiondata.latestarticles.btntext} url={sectiondata.latestarticles.btnurl} className=" margin-top-100px" />
                            </div>
                        </div>
                    </div>

                    <LatestBlog latestarticles={sectiondata.latestarticles.items} />
                </div>
            </section>

            {/* CTA 2 */}
            <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px section-bg">
                <CtaOne />
            </section>

            {/* Client Logo */}
            <ClientLogo logos={sectiondata.clientlogos} />

            {/* NewsLetter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default Home2;
