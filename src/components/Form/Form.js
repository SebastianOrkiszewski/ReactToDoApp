import ToDoList from "components/ToDoList/ToDoList";
import React from "react";
import { Wrapper } from "./Form.styles";
import { useState } from "react";

const Form = () => {
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('')
  }

  return (
    <Wrapper>
      <h1>ToDo List{text}</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="text" value={text} onChange={handleChange} />
        <button type="submit">Add</button>
        <select name="" id="">
          <option value="">All</option>
          <option value="">x</option>
          <option value="">x</option>
        </select>
      </form>
      <ToDoList />
    </Wrapper>
  );
};

export default Form;
