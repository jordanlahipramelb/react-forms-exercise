import React from "react";

const Task = ({ id, taskName, removeTask }) => {
  const handleRemoveTask = () => removeTask(id);
  return (
    <div>
      <li>{taskName}</li>
      <button onClick={handleRemoveTask}>X</button>
    </div>
  );
};

export default Task;
