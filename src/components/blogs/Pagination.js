import React from 'react';
import {Link} from "react-router-dom";
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

function Pagination() {
    return (
        <>
            <div className="pagination-wrapper mt-4 text-center">
                <ul className="pagination-list">
                    <li><Link to="#" className="pag__prev"><i><FiChevronsLeft /></i></Link></li>
                    <li><Link to="#">1</Link></li>
                    <li className="pag__active"><Link to="#">2</Link></li>
                    <li><Link to="#">3</Link></li>
                    <li><Link to="#">4</Link></li>
                    <li><Link to="#" className="pag__next"><i><FiChevronsRight /></i></Link></li>
                </ul>
            </div>
        </>
    );
}

export default Pagination;
