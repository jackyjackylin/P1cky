import React, {Component} from 'react';
import ModalVideo from 'react-modal-video'
import {Link} from "react-router-dom";
import {FiPlay} from 'react-icons/fi'
import img1 from '../../../assets/images/video-img.jpg';

class HowItWorkOneVideo extends Component {
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
    hiwcontent = {
        img: img1,
        btnText: 'watch how it works'
    }
    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='R2kiP9Qu7Pc' onClose={() => this.setState({ isOpen: false })} />
                <div className="hiw-video-btn">
                    <img src={this.hiwcontent.img} alt="video-img" />
                    <div className="video-text">
                        <Link className="mfp-iframe video-popup-btn icon-element-2"
                           onClick={this.openModal}
                           to="#"
                           title="Play Video">
                            <FiPlay />
                        </Link>
                        <p className="video__desc">{this.hiwcontent.btnText}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default HowItWorkOneVideo;