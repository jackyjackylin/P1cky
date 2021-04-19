import React from 'react';
import WidgetAuthorTwo from "./widgets/WidgetAuthorTwo";
import WidgetCategory from "./widgets/WidgetCategory";
import WidgetTags from "./widgets/WidgetTags";
import WidgetSubscribe from "./widgets/WidgetSubscribe";
import WidgetFollow from "./widgets/WidgetFollow";
import WidgetSearchTwo from "./widgets/WidgetSearchTwo";
import WidgetPopularPost from "./widgets/WidgetPopularPost";
import sectiondata from "../../store/store";

function BlogSidebar() {
    return (
        <>
            <div className="sidebar section-bg">
                <WidgetSearchTwo />
                <WidgetAuthorTwo contents={sectiondata.blogsidebar.wAuthor} />
                <WidgetCategory wCategories={sectiondata.listingDetails.sidebar.widgetCategories} />
                <WidgetTags tagcontent={sectiondata.listingDetails.sidebar.widgetTags} />
                <WidgetPopularPost ppitems={sectiondata.blogsidebar.wPopularPosts} />
                <WidgetSubscribe />
                <WidgetFollow followconnect={sectiondata.listingDetails.sidebar.widgetFollowConnect} />
            </div>
        </>
    );
}

export default BlogSidebar;
