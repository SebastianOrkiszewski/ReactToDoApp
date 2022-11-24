import ToDoList from "components/ToDoList/ToDoList";
import React from "react";
import { Wrapper } from "./Form.styles";
import { useState } from "react";


const Form = () => {
  const [contents, setContents] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setContents(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list,{text:contents, done:false, id: Math.random() * 100}], )
    setContents('')
  }

  return (
    <Wrapper>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="contents" value={contents} onChange={handleChange} />
        <button type="submit">Add</button>
        <select name="" id="">
          <option value="">All</option>
          <option value="">x</option>
          <option value="">x</option>
        </select>
      </form>
      <ToDoList list={list} setList={setList}/>
      
    </Wrapper>
  );
};

export default Form;
