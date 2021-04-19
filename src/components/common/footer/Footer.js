import React from 'react';
import Copyright from "./Copyright";
import FooterLeftWidget from "./FooterLeftWidget";
import FooterQuickLinkWidget from "./FooterQuickLinkWidget";
import FooterCategoryWidget from "./FooterCategoryWidget";
import FooterContactWidget from "./FooterContactWidget";
import sectiondata from "../../../store/store";

function Footer() {
    return (
        <>
            <section className="footer-area section-bg padding-top-140px padding-bottom-60px">
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <div className="container">
                    <div className="row">
                        <FooterLeftWidget footerleftcnts={sectiondata.footerdata}/>
                        <FooterQuickLinkWidget footerquicklink={sectiondata.footerdata.footerquicklinks} />
                        <FooterCategoryWidget footercategory={sectiondata.footerdata.footercategories} />
                        <FooterContactWidget footercontact={sectiondata.footerdata.footercontact} />
                    </div>

                    {/* Copyright */}
                    <Copyright />
                </div>
            </section>
        </>
    );
}

export default Footer;
