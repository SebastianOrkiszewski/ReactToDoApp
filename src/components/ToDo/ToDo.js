import React from "react";
import { InputText, Wrapper } from "./ToDo.styles";
import { FcFullTrash, FcExpand } from 'react-icons/fc';

const ToDo = ({ text, list, setList, todo }) => {
  const handleDelete = () => {
    setList(list.filter((element) => element.id !== todo.id));
  };
  const handleDone = () => {
    setList(
      list.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };
  return (
    <Wrapper>
      <InputText className={`${todo.done === true ? "done-task" : ""}`}>
        {text}
      </InputText>
      <div>
        <button onClick={handleDone}><FcExpand size="1.1rem"/></button>
        <button onClick={handleDelete}><FcFullTrash size="1.1rem" /></button>
      </div>
    </Wrapper>
  );
};

export default ToDo;
