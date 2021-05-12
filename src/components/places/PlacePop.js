
import PlaceOne from "../../components/places/PlaceOne";

import ResultPage from "../../components/places/ResultPage";
import React, {useEffect, useState} from 'react';
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai'
function PlacePop({showPop,toggleShowPop,itemList,itemId,nextItemId}) {
    useEffect(() => {
        const body = document.querySelector('body')
    
        function showDeleteAcntModal(e) {
            body.classList.add('modal-open')
            body.style.paddingRight = '17px'
            e.preventDefault()
        }
        // document.addEventListener('click', function (e) {
        //         for (
        //             let target = e.target;
        //             target && target !== this;
        //             target = target.parentNode
        //         ) {
        //             if (target.matches('.button.theme-btn')) {
        //                 console.log("match")
        //                 console.log(showPop)
        //                 showDeleteAcntModal.call(target, e)
        //                 break
        //             }
        //         }
        //     },false
        // )
        function hideDeleteAcntModal(e) {
            body.classList.remove('modal-open')
            body.style.paddingRight = '0'
            e.preventDefault()
        }
        document.addEventListener('click', function (e) {
                for (
                    let target = e.target;
                    target && target !== this;
                    target = target.parentNode
                ) {
                    if (target.matches('.badge-toggle')) {
                        console.log("match hide")
                        hideDeleteAcntModal.call(target, e)
                        // toggleShowPop();
                        setTimeout(function() { toggleShowPop({set:true,val:false}); }, 1000);
                        break
                    }
                }
            }, false
        )
    });
    // if(showPop&& itemList){
    //     return (
    //         <section className="card-area text-center popup-window">
    //             <PlaceOne places={itemList.slice(itemId,itemId+1)} nextItemId={nextItemId}  toggleShowPop={toggleShowPop} showPop={true} className="container popup-window-content"/>  
    //         </section>
            
    //     );
    // }

    // else
    //     return <section></section>

    // return (
    // <div className="modal-form text-center">
    //             <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    //                 <div className="modal-bg"></div>
    //                 <div className="modal-dialog modal-sm" role="document">
    //                     <div className="modal-content p-4">
    //                         <div className="modal-top border-0 mb-4 p-0">
    //                             <div className="alert-content">
    //                                 <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
    //                                 <h4 className="modal-title mt-2 mb-1">Your account will be deleted permanently!</h4>
    //                                 <p className="modal-sub">Are you sure to proceed.</p>
    //                             </div>
    //                         </div>
    //                         <div className="btn-box">
    //                             <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
    //                                 Cancel
    //                             </button>
    //                             <button type="button" className="theme-btn border-0 button-danger">
    //                                 delete!
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>)
    if( itemList && showPop){
        return (
        //     <div className="modal-form text-center">
        //     <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        //         <div className="modal-bg"></div>
        //         <div className="modal-dialog modal-sm" role="document">
        //             <div className="modal-content p-4">
        //                 <div className="modal-top border-0 mb-4 p-0">
        //                     <div className="alert-content">
        //                         <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
        //                         <h4 className="modal-title mt-2 mb-1">Your account will be deleted permanently!</h4>
        //                         <p className="modal-sub">Are you sure to proceed.</p>
        //                     </div>
        //                 </div>
        //                 <div className="btn-box">
        //                     <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
        //                         Cancel
        //                     </button>
        //                     <button type="button" className="theme-btn border-0 button-danger">
        //                         delete!
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <ResultPage itemList={itemList} itemId={itemId} toggleShowPop={toggleShowPop} showPop={showPop}/>
            <div className="modal-form text-center">
            <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-bg"></div> 
                <ResultPage itemList={itemList} itemId={itemId} toggleShowPop={toggleShowPop} showPop={showPop} nextItemId={nextItemId}/>
                    {/* {  <section className="card-area text-center ">
                        <PlaceOne places={itemList.slice(itemId,itemId+1)} nextItemId={nextItemId}  toggleShowPop={toggleShowPop} showPop={showPop} className="container popup-window-content"/>  
                    </section> } */}
                    
            </div>
            </div>
            )
    }
    else
    return (
            <div>
            </div>
            )
}

export default PlacePop;