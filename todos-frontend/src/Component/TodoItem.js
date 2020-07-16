import React from "react";
import classes from './TodoItem.module.css';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
    <li className={classes.task}>
        <span
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        onClick={onToggle}>
        {name}
        </span>
        <span onClick={onDelete} className={classes.delete}> X</span>
    </li>
);

export default TodoItem;