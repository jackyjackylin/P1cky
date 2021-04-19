import React from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import BlogDetailContent from "../../components/blogs/BlogDetailContent";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from '../../assets/images/bread-bg.jpg'
import sectiondata from "../../store/store";

const state = {
    breadcrumbimg: breadcrumbimg,
}
function BlogDetail() {
    return (
        <div>
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Blog Detail" MenuPgTitle="Blog" img={state.breadcrumbimg} />

            <section className="blog-single-area padding-top-40px padding-bottom-70px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <BlogDetailContent />
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </div>
    );
}

export default BlogDetail;
