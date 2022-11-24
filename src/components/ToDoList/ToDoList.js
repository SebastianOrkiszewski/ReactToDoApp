import React from 'react'
import { Wrapper } from './ToDoList.styles'
import ToDo from "components/ToDo/ToDo";

const ToDoList = ({list}) => {
  return (
    <Wrapper>
    <ul>{list.map((todo) =>(
      <ToDo text={todo.text} />
      ))}</ul>
       
    </Wrapper>
  )
}

export default ToDoList