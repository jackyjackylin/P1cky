import React,{useState, useEffect} from 'react';
import {firestore} from '../../firebase';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

function ButtonList({uid, lists, setLists}) {
    // const classes = useStyles();
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
        setLists(newChecked);
        console.log("newChecked:", newChecked, "checked:", checked);
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
    
    return (
        <>
            {/* <List className={classes.root}> */}
            <List className=".add-to-lists-list-item">
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
        </>
    );
}

export default ButtonList;
