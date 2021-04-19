import React, {Component} from 'react';
import SectionsHeading from "../common/SectionsHeading";
import IconBoxOne from "../other/iconboxes/IconBoxOne";
import ModalVideo from "react-modal-video";
import { FiPlay } from 'react-icons/fi'
import sectiondata from "../../store/store";

class HowItWork3 extends Component {
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
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={sectiondata.howitworks.hiw5.videoid} onClose={() => this.setState({ isOpen: false })} />
                <section className="hiw-area earn-money-area get-started-area padding-top-100px text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title={sectiondata.howitworks.hiw5.sectitle} desc={sectiondata.howitworks.hiw5.seccontent} />
                        </div>

                        <IconBoxOne items={sectiondata.howitworks.hiw5.items} />

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hiw-video-btn before-none mt-3 mb-5">
                                    <img src={sectiondata.howitworks.hiw5.videoBg} alt="video-img" />
                                    <div className="video-text">
                                        <p className="video__desc">
                                            {sectiondata.howitworks.hiw5.videoBtn}
                                        </p>
                                        <span className="mfp-iframe video-popup-btn icon-element-2"
                                              onClick={this.openModal}
                                              title="Play Video">
                                            <span className="d-inline-block">
                                                <FiPlay />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default HowItWork3;
