import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'
import Slider from "react-slick";

function Testimonial({slideitems}) {
    return (
        <>
            <Slider className="places-carousel testimonial-carousel" dots={true} infinite={true} slidesToScroll={1} slidesToShow={1} centerMode={false} centerPadding="50px" arrows={true}>
                {slideitems.map(slider => {
                    return (
                        <div className="testimonial-item" key={slider.id}>
                            <div className="testi-comment">
                                <span className="testi_quote">
                                    <FaQuoteLeft />
                                </span>
                                <p className="testi__desc">
                                    {slider.content}
                                </p>
                            </div>
                            <div className="testi-content">
                                <img src={slider.img} className="testi__img" alt="testimonial" />
                                <h4 className="tesi__title">{slider.title}</h4>
                                <span className="testi__meta">{slider.designation}</span>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    );
}

export default Testimonial;
