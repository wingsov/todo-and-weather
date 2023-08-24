import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() !== ""){
            addTodo(value);
            setValue("")
        }
    }


    return (
        <form
            className="TodoForm"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="todo-input"
                placeholder="Что в планах на сегодня?"
                onChange={handleChange}
                value={value}
            />
            <button
                className="todo-btn"
                type="submit"
            >
                Добавьте задачу
            </button>
        </form>

    );
};

export default TodoForm;