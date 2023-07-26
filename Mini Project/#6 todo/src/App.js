import { useState } from 'react';
import './App.css';

function App() {


  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    const trimmedTask = taskInput.trim();
    if (trimmedTask === '') {
      alert('Please enter a valid task.');
      return;
    }

    setTasks([...tasks, trimmedTask]);
    setTaskInput('');
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
    <>

      <div className='main_div'>
        <div className="Todo_div">

          <h1>Todo List</h1>
          <input type="text" value={taskInput} onChange={(e) =>
            setTaskInput(e.target.value)} placeholder="Enter task" />
          <button onClick={addTask}>+</button>

          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" />
                  <span>{task}</span>
                </label>
                <button onClick={() => removeTask(index)}>-</button>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </>
  );
}

export default App;
