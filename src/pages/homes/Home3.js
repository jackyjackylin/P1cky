import React from 'react';
import HeaderTwo from "../../components/common/HeaderTwo";
import Banner3 from "../../components/banner/banner3/Banner3";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategories from "../../components/other/categories/BrowseCategories";
import PlaceOne from "../../components/places/PlaceOne";
import SectionDivider from "../../components/common/SectionDivider";
import DreamPlaces from "../../components/places/DreamPlaces";
import Button from "../../components/common/Button";
import { RiRefreshLine } from 'react-icons/ri';
import InfoBox4 from "../../components/other/infoboxes/InfoBox4";
import HowItWork3 from "../../components/hiw/HowItWork3";
import CtaOne from "../../components/other/cta/CtaOne";
import Testimonial from "../../components/sliders/Testimonial";
import LatestBlog from "../../components/blogs/LatestBlog";
import ClientLogo from "../../components/sliders/ClientLogo";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";

function Home3() {
    return (
        <main className="home-3">
            {/* Header */}
            <HeaderTwo />

            {/* Banner Three */}
            <Banner3 bgImg={sectiondata.herobanners.banner3.bgimage} herotitle={sectiondata.herobanners.banner3.title} herocontent={sectiondata.herobanners.banner3.content} />

            {/* Browse Categories */}
            <section className="hero-catagory section-bg padding-top-100px padding-bottom-80px text-center">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.categories.browsecategories.sectitle} desc={sectiondata.categories.browsecategories.seccontent} />
                    </div>

                    <BrowseCategories categories={sectiondata.categories.browsecategories.items} />
                </div>
            </section>

            {/* Most Visited Place */}
            <section className="card-area text-center padding-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.mostvisitedplaces.sectitle} desc={sectiondata.mostvisitedplaces.seccontent} />
                    </div>

                    <PlaceOne places={sectiondata.mostvisitedplaces.places} />
                </div>
            </section>

            <SectionDivider />

            {/* Dream Places */}
            <section className="cat-area destination-area padding-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.dreamplaces.sectitle} desc={sectiondata.dreamplaces.seccontent} />
                    </div>

                    <DreamPlaces places={sectiondata.dreamplaces.places} />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="button-shared mt-4 text-center">
                                <Button text={sectiondata.dreamplaces.loadmoretext} url="#">
                                    <RiRefreshLine />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* How it work 1 */}
            <section className="hiw-area choose-area padding-top-100px padding-bottom-80px after-none">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw4.sectitle} desc={sectiondata.howitworks.hiw4.seccontent} />
                    </div>

                    <InfoBox4 infoitems={sectiondata.howitworks.hiw4.items} />
                </div>
            </section>

            {/* How it work 2 */}
            <HowItWork3 />

            {/* CTA 2 */}
            <section className="cta-area cta-area3 padding-top-60px padding-bottom-100px">
                <CtaOne />
            </section>

            <SectionDivider />

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

            <SectionDivider />

            {/* Blog */}
            <section className="blog-area padding-top-100px padding-bottom-80px">
                <div className="container">
                    <div className="row section-title-width text-center">
                            <SectionsHeading title={sectiondata.latestarticles.sectitle} desc={sectiondata.latestarticles.seccontent} />
                    </div>

                    <LatestBlog latestarticles={sectiondata.latestarticles.items} />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="btn-box text-center mt-4">
                                <Button text="browse posts" url="/blog-grid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Client Logo */}
            <ClientLogo logos={sectiondata.clientlogos} />

            {/* Cta Two */}
            <section className="cta-area cta-area3 column-sm-center section-bg-2 padding-top-70px padding-bottom-70px">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 text-left">
                            <SectionsHeading title={sectiondata.calltoactions.cta3.title} titleClass=" mb-3 text-white font-size-28" descClass=" font-size-17" desc={sectiondata.calltoactions.cta3.content} />
                        </div>

                        <div className="col-lg-3">
                            <div className="btn-box">
                                <Button text={sectiondata.calltoactions.cta3.btntext} url={sectiondata.calltoactions.cta3.btnurl} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default Home3;
