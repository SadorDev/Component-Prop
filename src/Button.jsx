import React from "react";

const Button = () => {
  const press = () => {
    alert("Hello Sador");
  };

  return <button onClick={press}> Click Me </button>;
};

export default Button;
