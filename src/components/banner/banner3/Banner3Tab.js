import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GiPositionMarker } from 'react-icons/gi'
import { IoMdMusicalNotes } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { FaSearchPlus } from 'react-icons/fa'
import BannerOneSearchInput from "../banner1/BannerOneSearchInput";
import BannerThreeSearchInput2 from "./BannerThreeSearchInput2";
import BannerThreeSearchInput3 from "./BannerThreeSearchInput3";

function Banner3Tab() {
    return (
        <>
            <Tabs>
                <div className="tab-shared">
                    <TabList className="nav nav-tabs" id="myTab">
                        <Tab>
                            <div className="nav-link theme-btn radius-rounded">
                                <span>
                                    <GiPositionMarker />
                                </span> places
                            </div>
                        </Tab>
                        <Tab>
                            <div className="nav-link theme-btn radius-rounded">
                                <span>
                                    <IoMdMusicalNotes />
                                </span> Events
                            </div>
                         </Tab>
                        <Tab>
                            <div className="nav-link theme-btn radius-rounded">
                                <span>
                                    <FaSearchPlus />
                                </span> Jobs
                            </div>
                         </Tab>
                        <Tab>
                            <div className="nav-link theme-btn radius-rounded">
                                <span>
                                    <AiOutlineHome />
                                </span> Real Estate
                            </div>
                         </Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <BannerOneSearchInput />
                </TabPanel>
                <TabPanel>
                    <BannerThreeSearchInput2 />
                </TabPanel>
                <TabPanel>
                    <BannerOneSearchInput />
                </TabPanel>
                <TabPanel>
                    <BannerThreeSearchInput3 />
                </TabPanel>
            </Tabs>
        </>
    );
}

export default Banner3Tab;
