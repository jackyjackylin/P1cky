import React from 'react';
import {BsGrid, BsListUl} from "react-icons/bs";
import {FiRefreshCw} from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import {Link} from "react-router-dom";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import Select from "react-select";
import breadcrumbimg from '../../assets/images/bread-bg.jpg'
import PlaceGrid from "../../components/places/PlaceGrid";
import sectiondata from "../../store/store";

const state = {
    selectedCatOp: null,
    title: 'Showing 1 to 6 of 30 entries',
    breadImg: breadcrumbimg,
    navs: [
        {
            path: '/listing-list',
            icon: <BsListUl />,
            active: false,
        },
        {
            path: '/listing-grid',
            icon: <BsGrid />,
            active: false,
        }
    ],
    shortby: [
        {
            value: 0,
            label: 'Short by'
        },
        {
            value: 1,
            label: 'Short by default'
        },
        {
            value: 2,
            label: 'High Rated'
        },
        {
            value: 3,
            label: 'Most Reviewed'
        },
        {
            value: 4,
            label: 'Popular Listing'
        },
        {
            value: 5,
            label: 'Newest Listing'
        },
        {
            value: 6,
            label: 'Older Listing'
        },
        {
            value: 7,
            label: 'Price: low to high'
        },
        {
            value: 8,
            label: 'Price: high to low'
        },
        {
            value: 9,
            label: 'Price: high to low'
        },
        {
            value: 10,
            label: 'Random listing'
        }
    ]
}
function ListRightSidebar() {
    return (
        <main className="list-right-sidebar">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="List Right Sidebar" MenuPgTitle="Listings" img={state.breadImg} />

            {/* Place List */}
            <section className="card-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-12">
                            <div className="generic-header margin-bottom-30px">
                                <ul className="generic-nav">
                                    {state.navs.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={item.path} className={ item.active ? 'active': ' '}>
                                                    <span className="d-inline-block">
                                                        {item.icon}
                                                    </span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="short-option ml-3">
                                    <Select
                                        placeholder="Short by"
                                        options={state.shortby}
                                    />
                                </div>
                                <p className="showing__text text-right">
                                    {state.title}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-8 row align-items-start">
                            <PlaceGrid griditems={sectiondata.placesgridmoreitems} />
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

export default ListRightSidebar;
