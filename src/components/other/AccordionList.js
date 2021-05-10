import {firestore} from '../../firebase';
import { FaPlus, FaMinus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import React,{useState, useEffect} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {Link} from "react-router-dom";
import sectiondata from "../../store/store";
import FetchListInfo from '../common/FetchListInfo'

function AccordionList({uid, accordionItems}) {
    const [userList,setUserList]=useState([])
    
    return (
        <>
            
            <Accordion allowZeroExpanded className="accordion accordion-item pr-4" id="accordionExample">
            <FetchListInfo uid={uid} userList={userList} setUserList={setUserList}/>
                {userList.map((item, i) => {
                    return ( 
                        <div className="card mb-3" key={i}>
                            <AccordionItem>
                                <AccordionItemHeading className="card-header ">
                                    <AccordionItemButton className="btn btn-link d-flex align-items-center justify-content-between ">
                                        {item.listName}
                                        <i className="minus"><FaMinus /></i>
                                        <i className="plus"><FaPlus /></i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body">
                                        <div className="row">
                                            {item.restaurants.map((val, index) => {
                                                return (
                                                    <div key={i} className="col-lg-4 column-td-6">
                                                        <div className="card-item">
                                                            <div className="card-image">
                                                                <img src={item.photoURL[index]} className="card__img" alt="Card" />
                                                            </div>
                                                            <div className="card-content-wrap">
                                                                <div className="card-content">
                                                                    <h4 className="card-title mt-0">{val}</h4>
                                                                    <p className="card-sub">{item.comments[index]}</p>
                                                                </div>
                                                                <div className="rating-row">
                                                                    <div className="edit-info-box">
                                                                        <button type="button" className="theme-btn button-success border-0 mr-1">
                                                                            <span className="la"><FaRegEdit /></span> Edit
                                                                        </button>
                                                                        <button type="button" className="theme-btn delete-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                            <span className="la"><FaRegTrashAlt /></span> Delete
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </div>
                    )
                })}

            </Accordion>
        </>
    );
}

export default AccordionList;
