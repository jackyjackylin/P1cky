import React from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import BannerOneSearchInput from "../banner1/BannerOneSearchInput";
import HighlightedCategory from "../../other/categories/HighlightedCategory";
import sectiondata from "../../../store/store";

export default function BannerTwo({bgImg}) {
    return (
        <>
            <section className="hero-wrapper hero-wrapper2" style={{backgroundImage: 'url('+bgImg+')'}}>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionsHeading title={sectiondata.herobanners.banner2.title} desc={sectiondata.herobanners.banner2.content} />

                            <BannerOneSearchInput />

                            <HighlightedCategory categories={sectiondata.herobanners.banner2.categories} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
