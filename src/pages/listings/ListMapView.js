import React from 'react';
import {FiRefreshCw} from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import PlaceListing from "../../components/places/PlaceListing";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from "../../components/common/GenericHeader";
import MapViewCluster from "../../components/contact/MapViewCluster";
import sectiondata from "../../store/store";

function ListMapView() {
    return (
        <main className="List-map-view">
            {/* Header */}
            <GeneralHeader />

            {/* Mapview */}
            <MapViewCluster />


            {/* Place List */}
            <section className="card-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <GenericHeader />
                        </div>

                        <div className="col-lg-4">
                            <ListingListSidebar />
                        </div>

                        <div className="col-lg-8">
                            <PlaceListing listitems={sectiondata.listing.listinglists} />
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

export default ListMapView;
