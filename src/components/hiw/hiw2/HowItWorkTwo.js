import React, {Component} from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import ModalVideo from "react-modal-video";
import {FiPlay} from 'react-icons/fi'
import InfoBox2 from "../../other/infoboxes/InfoBox2";
import sectiondata from "../../../store/store";

class HowItWorkTwo extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={sectiondata.howitworks.hiw3.videoid} onClose={() => this.setState({ isOpen: false })} />
                <section className="hiw-area hiw-2 earn-money-area padding-top-100px padding-bottom-80px text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title={sectiondata.howitworks.hiw3.sectitle} desc={sectiondata.howitworks.hiw3.seccontent} />
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hiw-video-btn before-none mt-5 mb-5">
                                    <img src={sectiondata.howitworks.hiw3.videoImg} alt="video-img" />
                                    <div className="video-text">
                                        <span className="mfp-iframe video-popup-btn icon-element-2"
                                           onClick={this.openModal}
                                           title="Play Video">
                                            <FiPlay />
                                        </span>
                                        <p className="video__desc">
                                            {sectiondata.howitworks.hiw3.videobtn}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <InfoBox2 infoitems={sectiondata.howitworks.hiw3.items} />
                    </div>
                </section>
            </>
        );
    }
}

export default HowItWorkTwo;
