import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${inputText}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Say Hello"
      >
        Say Hello
      </input>
      <Button inputText={inputText} />
      <button type="submit"> Click Me!🙂 </button>
    </form>
  );
};

export default Form;
