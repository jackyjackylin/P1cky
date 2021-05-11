import React,{useState, useEffect} from 'react';
import ListsBtn from "../common/ListsBtn";
import FetchListInfo from '../common/FetchListInfo'
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
    const [userList,setUserList]=useState([])
    // const classes = useStyles();
    const [checked, setChecked] = useState([]);

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
    
    return (
        <>
            <FetchListInfo uid={uid} userList={userList} setUserList={setUserList}/>
            {/* <List className={classes.root}> */}
            <List className=".add-to-lists-list-item">
                {userList.map((item, i) => {
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
                            <ListItemText id={labelId} primary={item.listName} />
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
}

export default ButtonList;
