import React, {useEffect, useState,useContext} from 'react';
import {firestore} from '../../firebase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {AuthContext} from "../../components/providers/UserProvider";
import {Scrollbars} from 'react-custom-scrollbars';

function ForkListCheckList({uid}) {
    const [checked, setChecked] = useState([]);
    const [loaded, setLoaded] = useState([]);
    const [names, setNames] = useState([]);
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
    };

    useEffect(()=> {
        async function fetch() {
            const tmp = [];
            const doc = firestore.doc(`users/${uid}`).collection('pocketList').get()
            .then (response => {
                response.forEach(doc => {
                    tmp.push(doc.id)
                });
                setNames(tmp)
            })
            .then(()=>{
                console.log(names)
                setLoaded(true)
            })
            .catch(error => {
                console.log(error);
            });
        }
        fetch();
    },[])

    const onSubmit= e => {
        console.log("uid:", uid);
        console.log("checked:", checked);
        e.preventDefault();
        forkList().then(()=>alert("Fork Successfully"));
    }

    const forkList = async() => {
        checked.map((item) => {
            forkEachList(item);
        });
    }

    const data = {

    }

    const forkEachList=async(value)=>{
        console.log(currentUser)

        const ref = firestore.doc(`users/${uid}/pocketList/${value}`).collection('restaurantsList');
        const collections = await ref.get()
        .then(collections=>{
            collections.forEach(async (collection) => {
                console.log("current doc:", collection.data())
                firestore.doc(`users/${currentUser.uid}/pocketList/${value}`).set(data)
                firestore.doc(`users/${currentUser.uid}/pocketList/${value}`).collection('restaurantsList').doc(`${collection.id}`).set(collection.data())
                .then(()=>console.log("Add PocketList!!"));
            });
        })
    }

    return (
        <>
            <Scrollbars style={{ width: 500, height: 300}}>
                <List className=".fork-lists-item">
                    {names.map((item, i) => {
                        const labelId = `checkbox-list-label-${item}`;
                        return (
                            <ListItem key={i} role={undefined} dense button onClick={handleToggle(item)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(item) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={item} />
                            </ListItem>
                        );
                    })}
                </List>
            </Scrollbars>
            <div className="btn-box">
                <button type="button" className="theme-btn border-0 button-danger mr-1 hide-fork-list" data-dismiss="modal">
                    Cancel
                </button>
                <button className="theme-btn border-0 button-success hide-fork-list" type='button' onClick={(e)=>{onSubmit(e)}}>
                    Fork
                </button>
            </div>
        </>
    );
}

export default ForkListCheckList;
