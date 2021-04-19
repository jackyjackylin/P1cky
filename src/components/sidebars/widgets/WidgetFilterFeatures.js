import React, {useState} from 'react';

function WidgetFilterFeatures({featureitems, title}) {
    const [isOpenFilter, setIsOpenFilter] = useState(false)

    return (
        <>
            <div className="sidebar-widget">
                <h3 className="widget-title">
                    {title}
                </h3>
                <div className="title-shape"></div>
                <div className={isOpenFilter ? 'check-box-list show-more-item filter-by-feature mt-4 mb-4 full-height-of-feature' : 'check-box-list show-more-item filter-by-feature mt-4 mb-4'}>
                    {featureitems.map(item => {
                        return (
                            <div className="custom-checkbox" key={item.id}>
                                <input type="checkbox" id={'chb2-'+item.id} />
                                <label htmlFor={'chb2-'+item.id}>
                                    {item.text}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div
                    id="showfilterbyfeature"
                    onClick={() => setIsOpenFilter(!isOpenFilter)}
                    className="showmore-btn font-weight-semi-bold text-capitalize d-block ml-auto mr-auto text-center  radius-rounded p-0">
                    {
                        isOpenFilter ?
                        <span className="lessmore-txt">Show Less</span>
                        :
                        <span className="showmore-txt ">Show More</span>
                    }
                </div>
            </div>
        </>
    );
}

export default WidgetFilterFeatures;
