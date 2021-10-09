import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const handleCreateBox = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };

  // easier to find box to remove with id
  const handleRemoveBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <h1>Color Box Maker</h1>
      <NewBoxForm handleCreateBox={handleCreateBox} />

      <div>
        {boxes.map(({ id, width, height, backgroundColor }) => (
          <Box
            key={id}
            id={id}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            handleRemoveBox={handleRemoveBox}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
