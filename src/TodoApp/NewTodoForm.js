import React, { useState } from "react";

const NewTodoForm = ({ addTask }) => {
  const INITIAL_STATE = {
    taskName: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    // return new object, use that object to setFormData
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // prop from parent
    addTask(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label for="taskName">Task: </label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
          />
        </div>
        <button className="addTaskBtn">Add Task</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
