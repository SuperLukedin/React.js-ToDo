import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemAvatar } from '@material-ui/core';
import './Todo.css'

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar>                    
            </ListItemAvatar>
                <ListItemText primary="Todo" secondary={props.todo} />
            </ListItem>            
        </List>
           
    )
}

export default Todo
