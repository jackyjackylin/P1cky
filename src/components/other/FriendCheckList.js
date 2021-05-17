import React, {useEffect, useState,useContext} from 'react';
import {firestore} from '../../firebase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {AuthContext} from "../../components/providers/UserProvider";

function FriendCheckList({friendList, setFriendList}) {
    const [checked, setChecked] = useState([]);
    const [loaded, setLoaded] = useState([]);
    const [friendNames, setFriendNames] = useState([]);
    const {currentUser} = useContext(AuthContext);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        setFriendList(newChecked);
        console.log("newChecked:", newChecked, "checked:", checked);
    };

    useEffect(()=> {
        async function fetch() {
            const tmpList = [];
            const doc = firestore.doc(`users/${currentUser.uid}`).collection('myFriends');
            const listInfo = await doc.get().then (friends => {
                friends.forEach(doc => {
                    console.log(doc.data());
                    tmpList.push({"uid": doc.id, "displayName": doc.data().displayName})
                });
            }).then(()=>{
                console.log(tmpList)
                setFriendNames(tmpList);
                console.log(friendNames)
                setLoaded(true)
            }).catch(error => {
                console.log(error);
            });
        }
        fetch();
    },[])
    
    return (
        <>
            {/* <List className={classes.root}> */}
            <List className=".friend-list-item">
                {loaded && friendNames.map((item, i) => {
                    const labelId = `checkbox-list-label-${item.uid}`;
                    return (
                        <ListItem key={i} role={undefined} dense button onClick={handleToggle(item.uid)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(item.uid) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={item.displayName} />
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
}

export default FriendCheckList;
