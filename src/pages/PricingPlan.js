import React from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import Plans from "../components/other/plans/Plans";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from '../assets/images/bread-bg.jpg'
import sectiondata from "../store/store";

const state = {
    breadcrumbimg: breadcrumbimg,
}
function PricingPlan() {
    return (
        <main className="pricing-plan-page">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Pricing Plans" MenuPgTitle="pages" img={state.breadcrumbimg}/>

            {/* Pricing Plan */}
            <section className="pricing-area padding-top-70px padding-bottom-90px">
                <div className="container">
                    <Plans plans={sectiondata.pricingplan} />
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

export default PricingPlan;
