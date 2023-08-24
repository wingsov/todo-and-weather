import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import {nanoid} from "nanoid";
import EditForm from "./EditForm";
import Todo from "./Todo"

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos,
            {
                id: nanoid(5),
                task: todo,
                completed: false,
                isEditing: false,
            }])
    };


    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, completed: !todo.completed} : todo
        ))
    };

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    };


    return (
        <div className="TodoWrapper">
            <h2>Задачи на сегодня</h2>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ?
                    (<EditForm
                        editTodo={editTask}
                        task={todo}
                    />) :
                    (<Todo
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                    />)
            ))}
        </div>
    );
};

export default TodoWrapper;