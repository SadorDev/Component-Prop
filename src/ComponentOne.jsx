import React from "react";
import ComponentThree from "./ComponentThree";

const ComponentOne = () => {
  const userName = "John doe";

  return (
    <>
      <h1> This is App #1</h1>
      <ComponentThree thisProp={userName} />
    </>
  );
};

export default ComponentOne;
