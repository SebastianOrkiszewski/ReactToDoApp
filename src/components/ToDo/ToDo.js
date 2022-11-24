import React from 'react'
import { Wrapper } from './ToDo.styles'

const ToDo = ({text}) => {
  return (
    <Wrapper>
        <li>{text}</li>
        <button></button>
        <button></button>
    </Wrapper>
  )
}

export default ToDo