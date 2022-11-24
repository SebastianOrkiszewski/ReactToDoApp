import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items:center;
`;

export const InputText = styled.li.attrs({activeClassName: 'done-task'})`
color: black;

&.done-task{
    color: red;
    text-decoration: line-through;
}
`;

