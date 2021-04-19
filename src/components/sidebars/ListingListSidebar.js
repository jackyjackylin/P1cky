import React from 'react';
import WidgetSearch from "./widgets/WidgetSearch";
import WidgetFilterCategory from "./widgets/WidgetFilterCategory";
import WidgetFilterPrice from "./widgets/WidgetFilterPrice";
import WidgetFilterTags from "./widgets/WidgetFilterTags";
import WidgetFilterFeatures from "./widgets/WidgetFilterFeatures";
import WidgetSortBy from "./widgets/WidgetSortBy";
import WidgetFilterRatings from "./widgets/WidgetFilterRatings";
import WidgetPostedBy from "./widgets/WidgetPostedBy";
import Button from "../common/Button";
import sectiondata from "../../store/store";
import { BsChevronRight } from 'react-icons/bs'

function ListingListSidebar() {
    return (
        <>
            <div className="sidebar">
                <WidgetSearch />
                <WidgetFilterCategory catitems={sectiondata.listing.sidebar.widgetFilterCategory.items} title={sectiondata.listing.sidebar.widgetFilterCategory.title} />
                <WidgetFilterPrice />
                <WidgetFilterTags tagitems={sectiondata.listing.sidebar.widgetFilterTags.tags} title={sectiondata.listing.sidebar.widgetFilterTags.title} />
                <WidgetFilterFeatures featureitems={sectiondata.listing.sidebar.widgetFilterFeatures.features} title={sectiondata.listing.sidebar.widgetFilterFeatures.title} />
                <WidgetSortBy sortitems={sectiondata.listing.sidebar.widgetSortby.items} title={sectiondata.listing.sidebar.widgetSortby.title} />
                <WidgetFilterRatings />
                <WidgetPostedBy items={sectiondata.listing.sidebar.widgetPostedby.items} title={sectiondata.listing.sidebar.widgetPostedby.title} />
                <div className="sidebar-widget">
                    <div className="btn-box">
                        <Button text="apply filter" url="#" className="d-block w-100 text-center">
                            <span className="d-inline-block"><BsChevronRight /></span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListingListSidebar;
