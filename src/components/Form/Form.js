import ToDoList from "components/ToDoList/ToDoList";
import React from "react";
import { Wrapper } from "./Form.styles";
import { useState, useEffect } from "react";

const Form = () => {
  const [contents, setContents] = useState("");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    handleFilterList()
  },[list, filter])

  const handleChange = (e) => {
    setContents(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...list,
      { text: contents, done: false, id: Math.random() * 999 },
    ]);
    setContents("");
  };

  const handleFilterList = (e) => {
    switch(filter) {
      case"Finished":
      setFilterList(list.filter((todo) => todo.done === true)) 
      break;
      case"Unfinished":
      setFilterList(list.filter((todo) => todo.done === false)) 
      break;
      default:
      setFilterList(list);
      break;
    }
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <Wrapper>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="contents"
          value={contents}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
        <select onChange={handleFilter} name="" id="">
          <option value="All">All</option>
          <option value="Finished">Finished</option>
          <option value="Unfinished">Unfinished</option>
        </select>
      </form>
      <ToDoList list={list} setList={setList} filterList={filterList} />
    </Wrapper>
  );
};

export default Form;
