import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1 m-2 ">
      {name}
    </button>
  );
};

export default Button;
