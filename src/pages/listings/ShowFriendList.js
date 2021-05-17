import React, {useEffect, useState, useContext} from 'react';
import {AuthContext} from "../../components/providers/UserProvider";
import FriendCheckList from "../../components/other/FriendCheckList";
import FriendPocketCheckList from "../../components/other/FriendPocketCheckList";
import {firestore} from "../..//firebase";

const body = document.querySelector('body')

function hideFriendListModal(e) {
    // console.log("hide pick from pocket list")
    body.classList.remove('friend-pocket-list-modal-open')
    body.classList.remove('friend-list-modal-open')
    body.style.paddingRight = '0'
    // e.preventDefault()
}


export default function ShowFriendList({popItemList,toggleShowPop,setPopItemId,setIsPocketList,setPopItemList}) {
    const [friendList, setFriendList] = useState([]);
    const [lists, setLists] = useState([]);
    const [choice, setChoice] = useState(-1);
    const [choiceLength, setChoiceLength] = useState(-1);
    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        if(currentUser)
            console.log(`${currentUser.uid} Show`)
    },[currentUser])
    
    useEffect(() => {
        console.log(`The ${choice}th from all ${choiceLength} choices`)
    },[choice,choiceLength])
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }

    const getAllFromPocketList = async(docName) => {
        const ref = firestore.doc(`users/${docName.userid}`).collection('pocketList').doc(docName.listName).collection('restaurantsList');
        const collections = await ref.get();
        let tmpList = []
        collections.forEach(collection => {
            console.log(collection);
            tmpList.push({...collection.data(), id: collection.id})
        })
        return  [...tmpList]
    }
    
    const randomPick = async() =>{
        let randomList = []

        Promise.all(lists.map(async(item, i) => {
            let oneList = await getAllFromPocketList(item)
            oneList.map(restaurant => randomList.push(restaurant))
        })).then(() => {
            console.log(randomList)
            let choice = getRandomInt(0, randomList.length);
            console.log(choice)
            hideFriendListModal()
            setIsPocketList(true)
            console.log(randomList.slice(choice,choice+1))
            setPopItemList(popItemList=> randomList.slice(choice,choice+1))
            toggleShowPop(true)
        })
    }
    
    return(
        <main>
        <div className="modal-form text-center">
            <div className="modal fade friend-list-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-bg"></div>
                <div className="modal-dialog modal-lg" role="document" >
                    <div className="modal-content p-4">
                        <span className="pick-from-list-text">
                            Choose one or multiple friends
                            <br></br>  
                            we'll show their lists for you!
                        </span>
                        {currentUser && <FriendCheckList friendList={friendList} setFriendList={setFriendList} />}
                        <div className="btn-box">
                            <div className="btn-box">
                                <div className="theme-btn button-success friendPocketList" data-dismiss="modal"><span className="la"></span> Go</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-form text-center">
            <div className="modal fade friend-pocket-list-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-bg"></div>
                <div className="modal-dialog modal-lg" role="document" >
                    <div className="modal-content p-4">
                        <span className="pick-from-list-text">
                            Choose one or multiple pocket lists
                            <br></br>  
                            we'll pick one restaurant for you!
                        </span>
                        {currentUser && <FriendPocketCheckList friendList={friendList} setFriendList={setFriendList} lists={lists} setLists={setLists} />}
                        <div className="btn-box">
                            <button type="button" className="theme-btn border-0 button-success mr-1" onClick={randomPick} data-dismiss="modal">
                                Go
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}

