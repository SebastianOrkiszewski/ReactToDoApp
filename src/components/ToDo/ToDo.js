import React from 'react'
import { Wrapper } from './ToDo.styles'

const ToDo = ({text, list, setList, todo}) => {
    const handleDelete = () => {
setList(list.filter((element) => element.id !== todo.id))
    }
  return (
    <Wrapper>
        <li>{text}</li>
        <button>F</button>
        <button onClick={handleDelete}>D</button>
    </Wrapper>
  )
}

export default ToDo