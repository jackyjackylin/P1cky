import React from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import BlogTwoColumns from "../../components/blogs/BlogTwoColumns";
import Pagination from "../../components/blogs/Pagination";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from '../../assets/images/bread-bg.jpg'
import sectiondata from "../../store/store";

const state = {
    breadcrumbimg: breadcrumbimg,
}
function BlogLeftSidebar() {
    return (
        <main className="blog-left-sidebar-page">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Blog Left Sidebar" MenuPgTitle="Blog" img={state.breadcrumbimg} />

            <section className="blog-left-sidebar padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                        <div className="col-lg-8">
                            <BlogTwoColumns blitems={sectiondata.blogfullwidth.bl2colitems} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer*/ }
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default BlogLeftSidebar;
