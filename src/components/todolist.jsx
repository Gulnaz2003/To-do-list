import React, { useState, useEffect } from "react";
import "./todolist.css";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue === "") {
      alert("You must write !");
    } else {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo">
      <h2>Todo List</h2>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Add a task..."
          value={inputValue}
          onChange={InputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
