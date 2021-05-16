
import PlaceOne from "../../components/places/PlaceOne";

import ResultPage from "../../components/places/ResultPage";
import React, {useEffect, useState} from 'react';
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai'
function PlacePop({showPop,toggleShowPop,itemList,itemId,nextItemId,isPocketList}) {


    if( itemList  && showPop){
        return (
            <div className="modal-form text-center">
            <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-bg"></div> 
                <ResultPage isPocketList={isPocketList} item={itemList[itemId]} toggleShowPop={toggleShowPop} showPop={showPop} nextItemId={nextItemId}/>        
            </div>
            </div>
        )
    }
    else
    return null;
}

export default PlacePop;