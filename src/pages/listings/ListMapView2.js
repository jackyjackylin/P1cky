import React from 'react';
import {FiRefreshCw} from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PlaceGrid from "../../components/places/PlaceGrid";
import MapViewCluster from "../../components/contact/MapViewCluster";
import GenericHeader from "../../components/common/GenericHeader";
import sectiondata from "../../store/store";


function ListMapView2() {
    return (
        <main className="List-map-view2">
            {/* Header */}
            <GeneralHeader />

            {/* Place List */}
            <section className="card-area margin-top-190px padding-bottom-100px">
                <div className="container">
                    <div className="row align-items-start">

                        <div className="col-lg-8 ">
                            <div className="home-map">
                                <div className="map-container map-height w-100">
                                    <MapViewCluster />
                                </div>
                            </div>
                            <div className="margin-top-30px">
                                <GenericHeader />
                            </div>
                            <div className="row twocol align-items-start justify-content-start">
                                <PlaceGrid griditems={sectiondata.placesgrid} />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <ListingListSidebar />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="button-shared text-center">
                                <Button text="load more" url="#" className="border-0">
                                    <span className="d-inline-block">
                                        <FiRefreshCw />
                                    </span>
                                </Button>
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

export default ListMapView2;
