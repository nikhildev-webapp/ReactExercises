import React, { useState } from 'react'

const TodoList = () => {
    const styles = {
         Container:{
            border: '1px solid #333',
            display: 'inlineBlock',
            padding: '10px',
            width: '350px',
            margin:'10px'
        },
         button: {
              padding: '5px',
              borderRadius: '10px',
              borderColor: '#f01212ff',
              margin:'5px'
          }
    }
    const [todo, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTodos(prevTasks => [...prevTasks, newTask]);
            setNewTask('')
        } else {
            alert('Enter todo')
        }
    }

    const deleteTask = () => {
        setTodos(prevTasks => prevTasks.filter((_i) => i !== index));
    }
    return (
        <>
            <div style={styles.Container}>
               
                    <input type="text" name="todo" id="todo" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
                    <button onClick={addTask} style={styles.button}>savetask</button>
                    <ul>{todo.map((task, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={()=>deleteTask(index)}>Delete</button>
                        </li>
                    ))}</ul>
               
            </div>
        </>
  )
}

export default TodoList