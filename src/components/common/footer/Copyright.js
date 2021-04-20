import React from 'react';
import CopyrightMenu from "./CopyrightMenu";
import { FiHeart } from 'react-icons/fi'
import sectiondata from "../../../store/store";

function Copyright() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="copy-right margin-top-50px padding-top-60px">
                        <p className="copy__desc">
                            &copy; Copyright P1cky 2021.
                        </p>

                        {/* <CopyrightMenu copyrightright={sectiondata.footerdata.copyright} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Copyright;
