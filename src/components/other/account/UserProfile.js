import React, {Component} from 'react';
import GeneralHeader from "../../common/GeneralHeader";
import Breadcrumb from "../../common/Breadcrumb";
import UserSidebar from "./UserSidebar";
import PlaceGrid from "../../places/PlaceGrid";
import Button from "../../common/Button";
import { FiRefreshCw } from 'react-icons/fi'
import NewsLetter from "../cta/NewsLetter";
import Footer from "../../common/footer/Footer";
import ScrollTopBtn from "../../common/ScrollTopBtn";
import sectiondata from "../../../store/store";

const states = {
    BreadcrumbImg: require('../../../assets/images/bread-bg.jpg')
}
function UserProfile() {
    return (
        <main className="user-profile">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="User Profile" MenuPgTitle="Pages"  img={states.BreadcrumbImg} />

            <section className="user-profile-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-content">
                                <UserSidebar usercontent={sectiondata.userprofile.sidebar} />
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <h3 className="widget-title">{sectiondata.userprofile.sidebar.name}'s Listings</h3>
                            <div className="title-shape"></div>
                            <div className="row two-clmn margin-top-35px">
                                <PlaceGrid griditems={sectiondata.placesgrid} />
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="button-shared text-center">
                                        <Button text="load more listing" url="#" className="border-0">
                                            <span><FiRefreshCw /></span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default UserProfile;
