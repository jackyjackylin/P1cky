import React from 'react';
import WidgetAuthor from "./widgets/WidgetAuthor";
import WidgetStaticsInfo from "./widgets/WidgetStaticsInfo";
import WidgetBooking from "./widgets/WidgetBooking";
import WidgetOpenHours from "./widgets/WidgetOpenHours";
import WidgetCategory from "./widgets/WidgetCategory";
import WidgetTags from "./widgets/WidgetTags";
import WidgetSimilarListing from "./widgets/WidgetSimilarListing";
import WidgetSubscribe from "./widgets/WidgetSubscribe";
import WidgetFollow from "./widgets/WidgetFollow";
import sectiondata from "../../store/store";
import { BsCheckCircle } from 'react-icons/bs'

const state = {
    btnText: 'Verified Listing',
    btnIcon: <BsCheckCircle />
}
function ListingDetailsSidebar() {
    return (
        <>
            <div className="author-verified-badge margin-bottom-20px">
                <div className="author__verified-badge" data-toggle="tooltip" data-placement="top" title="Listing has been verified and belongs the business owner or manager">
                    <span className="d-inline-block">{state.btnIcon}</span> {state.btnText}
                </div>
            </div>
            <div className="sidebar section-bg">
                <WidgetAuthor contents={sectiondata.listingDetails.sidebar.widgetAuthor} />
                <WidgetStaticsInfo staticsinfo={sectiondata.listingDetails.sidebar.widgetStaticsInfo} />
                <WidgetBooking />
                <WidgetOpenHours openhours={sectiondata.listingDetails.sidebar.widgetOpenHours} />
                <WidgetCategory wCategories={sectiondata.listingDetails.sidebar.widgetCategories} />
                <WidgetTags tagcontent={sectiondata.listingDetails.sidebar.widgetTags} />
                <WidgetSimilarListing similarcontent={sectiondata.listingDetails.sidebar.widgetSimilarListing} />
                <WidgetSubscribe />
                <WidgetFollow followconnect={sectiondata.listingDetails.sidebar.widgetFollowConnect} />
            </div>
        </>
    );
}

export default ListingDetailsSidebar;
