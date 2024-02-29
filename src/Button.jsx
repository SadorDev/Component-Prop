import React from "react";

const Button = ({ inputText }) => {
  const press = () => {
    alert(`Hello, ${inputText}`);
  };

  return <button onClick={press}> Click Me </button>;
};

export default Button;
