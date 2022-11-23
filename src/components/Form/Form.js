import ToDoList from "components/ToDoList/ToDoList";
import React from "react";
import { Wrapper } from "./Form.styles";

const Form = () => {
  return (
    <Wrapper>
      <h1>ToDo List</h1>
      <form action="">
        <input type="text" />
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
