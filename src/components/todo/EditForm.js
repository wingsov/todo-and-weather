import React, {useState} from 'react';

const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleChange = e => {
        setValue(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }

    return (
        <form className = "TodoForm"
              onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="todo-input"
                placeholder='Update Task'
                onChange={handleChange}
                value={value}
            />
            <button
                className='todo-btn'
                type='submit'
            >
                Update Task
            </button>
        </form>
    );
};

export default EditForm;