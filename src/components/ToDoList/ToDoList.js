import React from "react";
import { Wrapper } from "./ToDoList.styles";
import ToDo from "components/ToDo/ToDo";

const ToDoList = ({ list, setList, filterList }) => {
  return (
    <Wrapper>
      <ul>
        {filterList.map((todo) => (
          <ToDo 
          list={list}
          setList={setList}
          todo={todo}
          text={todo.text}
          key={todo.id} 
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default ToDoList;
