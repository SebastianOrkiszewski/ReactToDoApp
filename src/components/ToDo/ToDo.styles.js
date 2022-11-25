import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
  padding-top: 3%;
  border-top: solid 1px grey;

  li {
    color: white;
  }

  button {
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green};
    margin: 0px 5px 0px 5px;
  }

  div {
  }
`;

export const InputText = styled.li.attrs({ activeClassName: "done-task" })`
  color: black;

  &.done-task {
    color: red;
    text-decoration: line-through;
  }
`;
