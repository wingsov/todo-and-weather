import React from 'react';
import {BsPencilSquare, BsTrash} from "react-icons/bs";

const Todo = ({task, removeTodo, toggleComplete, editTodo}) => {


    return (
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>
                <BsPencilSquare className="pencil" onClick={() => editTodo(task.id)}/>
                <BsTrash className="trash" onClick={() => removeTodo(task.id)}/>
            </div>
        </div>
    );
};

export default Todo;