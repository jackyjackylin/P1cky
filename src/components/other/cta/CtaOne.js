import React from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import { AiOutlineApple, AiFillAndroid } from 'react-icons/ai'
import Button from "../../common/Button";
import sectiondata from "../../../store/store";

export default function CtaOne() {
    return (
        <>
            {sectiondata.calltoactions.cta2.shapes.map((img, index) => {
                return (
                    <img src={img.img} key={index} alt="CTA Symbol" className="symble-img" />
                )
            })}
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="mobile-img">
                            <img src={sectiondata.calltoactions.cta2.img} alt="mobile-img" />
                        </div>
                    </div>
                    <div className="col-lg-6 ml-auto">
                        <div className="mobile-app-content">
                            <SectionsHeading title={sectiondata.calltoactions.cta2.title} titleClass="mb-3" desc={sectiondata.calltoactions.cta2.content} descClass="font-size-17 mb-4" />
                            <ul className="info-list contact-links">
                                {sectiondata.calltoactions.cta2.featurelists.map((item, index) => {
                                    return (
                                        <li className="d-flex align-items-center mb-2" key={index}>
                                            <span className="la">{item.icon}</span> {item.text}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="btn-box text-left margin-top-40px">
                                <Button text="app store" url="#" className="download-btn">
                                    <span className="la">
                                        <AiOutlineApple />
                                    </span>
                                </Button>
                                <Button text="google play" url="#" className="download-btn">
                                    <span className="la">
                                        <AiFillAndroid />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
