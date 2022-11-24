import React from 'react'
import { InputText, Wrapper } from './ToDo.styles'


const ToDo = ({text, list, setList, todo}) => {
    
    const handleDelete = () => {
setList(list.filter((element) => element.id !== todo.id))
    }
    const handleDone = () => {
        setList(
            list.map((item) => {
            if(item.id === todo.id) {
                    return {
                        ...item, done: !item.done
                    }
                }
                return item;
            })
        )
    }
  return (
    <Wrapper>
        <InputText className={`InputText ${(todo.done == true) ? "done-task" : "" }`}>{text}</InputText>
        <button onClick={handleDone}>F</button>
        <button onClick={handleDelete}>D</button>
    </Wrapper>
  )
}

export default ToDo