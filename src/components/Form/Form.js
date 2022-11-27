import ToDoList from "components/ToDoList/ToDoList";
import React from "react";
import { ButtonWrapper, Wrapper } from "./Form.styles";
import { useState, useEffect } from "react";
import { FcInspection } from 'react-icons/fc';

const Form = () => {
  const [contents, setContents] = useState("");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    getLocalList();
  }, []);

  useEffect(() => {
    handleFilterList();
    saveLocalList();
  }, [list, filter]);

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

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleFilterList = () => {
    switch (filter) {
      case "Finished":
        setFilterList(list.filter((todo) => todo.done === true));
        break;
      case "Unfinished":
        setFilterList(list.filter((todo) => todo.done === false));
        break;
      default:
        setFilterList(list);
        break;
    }
  };

  const saveLocalList = () => {
    localStorage.setItem("list", JSON.stringify(list));
  };

  const getLocalList = () => {
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify([]));
    } else {
      let listLocal = JSON.parse(localStorage.getItem("list"));
      setList(listLocal);
    }
  };

  return (
    <Wrapper>
      <h1>ToDo List <FcInspection size="2rem" /></h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="contents"
          value={contents}
          onChange={handleChange}
        />
        <ButtonWrapper type="submit">Add</ButtonWrapper>
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
