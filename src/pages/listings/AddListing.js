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

    return (
        <main className="add-listing">
            <GeneralHeader />

            {/* Breadcrumb */}
            {/* <Breadcrumb CurrentPgTitle="Add Listing" MenuPgTitle="Listings" img={states.breadcrumbimg} /> */}

            {/* Banner */}
            <Banner6 title="Add restaurants to your lists!"/>

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>

    );
}

export default AddListing;
