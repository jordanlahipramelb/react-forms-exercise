import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ handleCreateBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target; //name and value attr of inputs

    // return new object, use that object to setFormData
    setFormData((formData) => ({
      ...formData, // formData that is already in the state
      [name]: value, // name and value attr of inputs
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreateBox({ ...formData, id: uuid() }); //adds an id to the box
    setFormData({
      width: "",
      height: "",
      backgroundColor: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            id="height"
            name="height"
            placeholder="Size in em"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            id="width"
            name="width"
            placeholder="Size in em"
            onChange={handleChange}
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            type="text"
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
        </div>
        <button id="newBoxButton">Add new box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
