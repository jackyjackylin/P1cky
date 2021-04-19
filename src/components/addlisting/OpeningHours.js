import React from 'react';
import Select from "react-select";

const state = {
    selectedHours: null,
    title: 'Opening Hours',
    shortby:[
        {
            value: 2,
            label: '1:00am'
        },
        {
            value: 2,
            label: '2:00am'
        },
        {
            value: 3,
            label: '3:00am'
        },
        {
            value: 4,
            label: '4:00am'
        },
        {
            value: 5,
            label: '5:00am'
        },
        {
            value: 6,
            label: '6:00am'
        },
        {
            value: 7,
            label: '7:00am'
        },
        {
            value: 8,
            label: '8:00am'
        },
        {
            value: 9,
            label: '9:00am'
        },
        {
            value: 10,
            label: '10:00am'
        },
        {
            value: 11,
            label: '11:00am'
        },
        {
            value: 12,
            label: '12:00pm'
        },
        {
            value: 13,
            label: '1:00pm'
        },
        {
            value: 14,
            label: '2:00pm'
        },
        {
            value: 15,
            label: '3:00pm'
        },
        {
            value: 16,
            label: '4:00pm'
        },
        {
            value: 17,
            label: '5:00pm'
        },
        {
            value: 18,
            label: '6:00pm'
        },
        {
            value: 19,
            label: '7:00pm'
        },
        {
            value: 20,
            label: '8:00pm'
        },
        {
            value: 21,
            label: '9:00pm'
        },
        {
            value: 22,
            label: '10:00pm'
        },
        {
            value: 23,
            label: '11:00pm'
        },
        {
            value: 24,
            label: '12:00am'
        },
    ]
}
function OpeningHours() {
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">{state.title}</h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Monday</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Opening Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Closing Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Tuesday</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Opening Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Closing Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Wednesday</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Opening Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Closing Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Thursday</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Opening Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Closing Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Friday</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Opening Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Closing Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Saturday</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Opening Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Closing Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Sunday</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Opening Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <Select
                                            placeholder="Closing Time"
                                            options={state.shortby}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OpeningHours;
