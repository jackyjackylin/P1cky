import React from 'react';
import { MdStar } from 'react-icons/md'

const state = {
    title: 'Filter by Ratings',
    ratings: [
        {
            active: true,
            icons: [
                <MdStar />,
                <MdStar />,
                <MdStar />,
                <MdStar />,
                <MdStar />,
            ]
        },
        {
            active: false,
            icons: [
                <MdStar />,
                <MdStar />,
                <MdStar />,
                <MdStar />,
            ]
        },
        {
            active: false,
            icons: [
                <MdStar />,
                <MdStar />,
                <MdStar />,
            ]
        },
        {
            active: false,
            icons: [
                <MdStar />,
                <MdStar />,
            ]
        },
        {
            active: false,
            icons: [
                <MdStar />,
            ]
        }
    ]
}
function WidgetFilterRatings() {
    return (
        <>
            <div className="sidebar-widget">
                <h3 className="widget-title">
                    {state.title}
                </h3>
                <div className="title-shape"></div>
                <ul className="rating-list mt-4">

                    {state.ratings.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.icons.map((icon, i) => {
                                    return <span key={i} className="la-star">{icon}</span>
                                })}

                                <label className="review-label">
                                    <input type="radio" defaultChecked={item.active ? 'checked' : ''} name="review-radio" />
                                    <span className="review-mark"></span>
                                </label>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </>
    );
}

export default WidgetFilterRatings;
