import React from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Banner4 from "../../components/banner/banner4/Banner4";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategoriesTwo from "../../components/other/categories/BrowseCategoriesTwo";
import PlaceOne from "../../components/places/PlaceOne";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import InfoBox3 from "../../components/other/infoboxes/InfoBox3";
import Button from "../../components/common/Button";
import Testimonial from "../../components/sliders/Testimonial";
import SectionDivider from "../../components/common/SectionDivider";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";
import InfoBoxOne from "../../components/other/infoboxes/infobox1/InfoBoxOne";

function Home4() {
    return (
        <main className="home-4">
            {/* Header */}
            <GeneralHeader />

            {/* Banner */}
            <Banner4 videoUrl={sectiondata.herobanners.banner4.videobgsrc} title={sectiondata.herobanners.banner4.sectitle} content={sectiondata.herobanners.banner4.seccontent} />

            {/* Browse Categories */}
            <section className="cat-area padding-top-100px padding-bottom-90px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.categories.browsecategories2.sectitle} titleClass=" before-none pt-0" desc={sectiondata.categories.browsecategories2.seccontent} />
                    </div>

                    <BrowseCategoriesTwo catitems={sectiondata.categories.browsecategories2.categories} />
                </div>
            </section>

            {/* How it work */}
            <section className="hiw-area text-center padding-top-100px padding-bottom-80px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw6.sectitle} titleClass=" before-none pt-0" desc={sectiondata.howitworks.hiw6.seccontent} />
                    </div>

                    <div className="row padding-top-100px">
                        <InfoBoxOne infoitems={sectiondata.howitworks.hiw6.items} cardcol={3} />
                    </div>

                </div>
            </section>

            {/* Most Visited Place */}
            <section className="card-area text-center padding-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.mostvisitedplaces.sectitle} titleClass=" before-none pt-0" desc={sectiondata.mostvisitedplaces.seccontent} />
                    </div>

                    <PlaceOne places={sectiondata.mostvisitedplaces.places} />
                </div>
            </section>

            {/* FunFacts */}
            <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                <div className="container">
                    <div className="row section-title-width">
                        <SectionsHeading title={sectiondata.funfacts.funfact1.sectitle} titleClass=" text-white before-none pt-0" desc={sectiondata.funfacts.funfact1.seccontent} />
                    </div>

                    <FunFactsOne countitems={sectiondata.funfacts.funfact1.counteritems} />
                </div>
            </section>

            {/* How It Work */}
            <section className="hiw-area padding-top-100px padding-bottom-80px after-none text-center">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw2.sectitle} titleClass=" before-none pt-0" desc={sectiondata.howitworks.hiw2.seccontent} />
                    </div>

                    <InfoBox3 infoitems={sectiondata.howitworks.hiw2.items} isbtnshow={false} />
                </div>
            </section>

            {/* CTA */}
            <section className="cta-area section-bg column-sm-center padding-top-80px padding-bottom-80px">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 text-left">
                            <SectionsHeading title={sectiondata.calltoactions.cta3.title} titleClass=" before-none pt-0 mb-3 font-size-28" descClass=" font-size-17" desc={sectiondata.calltoactions.cta3.content} />
                        </div>

                        <div className="col-lg-3">
                            <div className="btn-box">
                                <Button text={sectiondata.calltoactions.cta3.btntext} url={sectiondata.calltoactions.cta3.btnurl} />
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
                        <SectionsHeading title={sectiondata.testimonialdata.sectitle} titleClass=" before-none pt-0" desc={sectiondata.testimonialdata.seccontent} />
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
                        <SectionsHeading title={sectiondata.latestarticles.sectitle} titleClass=" before-none pt-0" desc={sectiondata.latestarticles.seccontent} />
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

export default Home4;
