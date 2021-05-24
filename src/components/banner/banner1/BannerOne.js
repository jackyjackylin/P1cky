import React, {useContext} from 'react';
import BannerOneHeroHeading from './BannerOneHeroHeading'
import BannerOneSearchInput from './BannerOneSearchInput'
import BannerOneCategories from './BannerOneCategories'
import sectiondata from "../../../store/store";
import {AuthContext} from "../../providers/UserProvider";


export default function BannerOne({loaded,toggleShowPop,itemList,setPopItemList,lat,lng}) {
    const {currentUser} = useContext(AuthContext);

    return (
        <>
            <section className="hero-wrapper" style={{backgroundImage: 'url('+sectiondata.herobanners.banner1.bgimage+')'}}>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            {/* Banner One Hero Heading */}
                            <BannerOneHeroHeading
                                title={sectiondata.herobanners.banner1.title}
                                content={sectiondata.herobanners.banner1.content}
                                titleHighlight={sectiondata.herobanners.banner1.titleHighlight} />

                            {/* Banner One Categories */}
                            {currentUser && <BannerOneCategories
                                title={sectiondata.categories.featuredcategories.title}
                                items={sectiondata.categories.featuredcategories.items}
                                connector={sectiondata.categories.featuredcategories.connector}
                            />}

                            {/* Banner One Search Input */}
                            {loaded&& 
                            <BannerOneSearchInput toggleShowPop={toggleShowPop} itemList={itemList} setPopItemList={setPopItemList} userLat={lat} userLng={lng} />}
                            

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
