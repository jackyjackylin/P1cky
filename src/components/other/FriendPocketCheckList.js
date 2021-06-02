import React, {useEffect, useState,useContext} from 'react';
import {firestore} from '../../firebase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {Scrollbars} from 'react-custom-scrollbars';

function FriendPocketCheckList({friendList, setFriendList, lists, setLists}) {
    const [checked, setChecked] = useState([]);
    const [loaded, setLoaded] = useState([]);
    const [pocketsList, setPocketsList] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        setLists(newChecked);
        console.log("newChecked:", newChecked, "checked:", checked);
    };

    const getAllPocketList = async(f) => {
        let tmpList = [];
        const ref = firestore.doc(`users/${f.uid}`).collection('pocketList');
        const response = await ref.get();
        response.forEach(doc => {
            console.log(doc.id);
            console.log(f)
            tmpList.push({userid : f.uid, name:f.displayName, listName: doc.id});
        });
        return tmpList
    }

    const getAllFriendData = async () => {
        const RList = [];
        Promise.all(friendList.map(async(item, i) => {
            let oneList = await getAllPocketList(item);
            console.log(oneList);
            oneList.map(l => RList.push(l))
        })).then(()=>{
            setPocketsList(RList);
            setLoaded(true);
        })
    }

    useEffect(()=> {
        getAllFriendData();
    },[friendList]);

    return (
        <>
            <Scrollbars style={{ width: 500, height: 300 }}>
                <List className=".friend-pocket-list-item">
                    {loaded && pocketsList.map((item, i) => {
                        const labelId = `checkbox-list-label-${item}`;
                        return (
                            <ListItem key={i} role={undefined} dense button onClick={handleToggle(item)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(item) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={item.listName + " (" +item.name+")"} />
                            </ListItem>
                        );
                    })}
                </List>
            </Scrollbars>
        </>
    );
}

export default FriendPocketCheckList;
