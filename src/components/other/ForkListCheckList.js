import React,{useState, useEffect} from 'react';
import {firestore} from '../../firebase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

function ForkListCheckList({uid}) {
    const [checked, setChecked] = useState([]);
    const [loaded, setLoaded] = useState([]);
    const [names, setNames] = useState([]);

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
        forkList();
    }

    const forkList = async _ => {
        const promises= checked.map(async item => {
            firestore.doc(`users/${uid}/pocketList/${item}`).get().then((doc)=>{
                console.log(doc);
            })

        })
        const res = await Promise.all(promises)
        //window.location.reload();
    }
    
    

    return (
        <>
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
            <div className="btn-box">
                <button type="button" className="theme-btn border-0 button-danger mr-1 hide-fork-list" data-dismiss="modal">
                    Cancel
                </button>
                <button className="theme-btn border-0 button-success" type='button' onClick={(e)=>{onSubmit(e)}}>
                    Fork
                </button>
            </div>
        </>
    );
}

export default ForkListCheckList;
