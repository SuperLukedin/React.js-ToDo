import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemAvatar, Button } from '@material-ui/core';
import './Todo.css'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar>                    
            </ListItemAvatar>
                <ListItemText primary="Todo" secondary={props.todo.todo} />
            </ListItem>
            <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.todo.id).delete()} />        
        </List>
           
    )
}

export default Todo
