import React from 'react';
import InfoBoxOne from "../../other/infoboxes/infobox1/InfoBoxOne";
import HowItWorkOneVideo from "./HowItWorkOneVideo";

function HowItWorkOne({hiw1content}) {
    return (
        <>
            <div className="row padding-top-100px">
                <InfoBoxOne infoitems={hiw1content.items} cardcol={4} />
            </div>

            {/* Video */}
            <div className="row">
                <div className="col-lg-8 mx-auto padding-top-30px">
                    <HowItWorkOneVideo />
                </div>
            </div>
        </>
    );
}

export default HowItWorkOne;
