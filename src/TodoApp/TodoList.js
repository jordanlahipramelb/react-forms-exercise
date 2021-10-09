import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const renderTasks = () => {
    return (
      <ul>
        {tasks.map(({ id, taskName }) => (
          <Todo id={id} taskName={taskName} removeTask={removeTask} />
        ))}
      </ul>
    );
  };

  const addTask = (task) => {
    //   add id to task
    let newTask = { ...task, id: uuid() };
    setTasks((tasks) => [...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <NewTodoForm addTask={addTask} />
      {renderTasks()}
    </div>
  );
};

export default TodoList;
