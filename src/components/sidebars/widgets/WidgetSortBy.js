import React from 'react';

function WidgetSortBy({sortitems, title}) {
    return (
        <>
            <div className="sidebar-widget">
                <h3 className="widget-title">
                    {title}
                </h3>
                <div className="title-shape"></div>
                <div className="check-box-list mt-4">

                    {sortitems.map(item => {
                        return (
                            <div className="custom-checkbox" key={item.id}>
                                <input type="checkbox" id={'chb3-'+item.id} />
                                <label htmlFor={'chb3-'+item.id}>
                                    {item.title}
                                </label>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    );
}

export default WidgetSortBy;
