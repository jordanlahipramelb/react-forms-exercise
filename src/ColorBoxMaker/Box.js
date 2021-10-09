import React from "react";

const Box = ({ id, width, height, backgroundColor, handleRemoveBox }) => {
  // function created in parent element (BoxList) and passed down to child via props
  const removeBox = () => handleRemoveBox(id);
  /** Function in parent component *******************
   const handleRemoveBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };
   *******************************************************/

  return (
    <div>
      <div
        className="Box"
        style={{
          backgroundColor,
          width: `${width}em`,
          height: `${height}em`,
        }}
      />
      <button onClick={removeBox}> X </button>
    </div>
  );
};

export default Box;
