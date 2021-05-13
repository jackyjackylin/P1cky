import React,{useState, useEffect} from 'react';
import {firestore} from '../../firebase';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

function DeleteListCheckList({uid}) {
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
            const doc = firestore.doc(`users/${uid}`).collection('myLists');
            const listInfo = await doc.get()
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
        checked.map((item, i) => {
            deleteList(item);
        })
        setTimeout(() => {window.location.reload();}, 500);
        // window.location.reload();
    }

    const deleteList = async _ => {
        const promises= checked.map(async item => {
            const res = await firestore.doc(`users/${uid}/myLists/${item}`).delete();
            console.log(item)
        })
        const res = await Promise.all(promises)
        window.location.reload();
    }
    
    return (
        <>
            <List className=".delete-lists-item">
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
            {/* <form onSubmit={onSubmit}> */}
                <div className="btn-box">
                    <button type="button" className="theme-btn border-0 button-success mr-1 hide-delete-list" data-dismiss="modal">
                        Cancel
                    </button>
                    <button className="theme-btn border-0 button-danger" type='button' onClick={(e)=>{
                        console.log("uid:", uid);
                        console.log("checked:", checked);
                        e.preventDefault();
                        deleteList();
                    }}>
                        Delete
                    </button>
                </div>
            {/* </form> */}
        </>
    );
}

export default DeleteListCheckList;
