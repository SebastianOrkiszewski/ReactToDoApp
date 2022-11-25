import styled from "styled-components";

export const Wrapper = styled.div`
  width: 550px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  backdrop-filter: blur(0px) saturate(200%);
  -webkit-backdrop-filter: blur(0px) saturate(200%);
  background-color: rgba(243, 243, 243, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  -webkit-box-shadow: 18px 14px 67px -14px rgba(0, 0, 0, 1);
  -moz-box-shadow: 18px 14px 67px -14px rgba(0, 0, 0, 1);
  box-shadow: 18px 14px 67px -14px rgba(0, 0, 0, 1);

  h1 {
    color: ${({ theme }) => theme.colors.white};
  }

  form {
    position: relative;
    display: flex;
    flex-wrap: nowrap;

    @media screen and (max-width: 450px) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  input {
    padding: 10px 40px 10px 10px;
    border-width: 0px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  select {
    margin: 0 20px 0 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    border: none;
    outline: none;
    @media screen and (max-width: 450px) {
      width: 40%;
      padding: 8px 0px 8px 0px;
      margin-top: 3%;
    }
  }
`;

export const ButtonWrapper = styled.button`
  position: absolute;
  cursor: pointer;
  left: 175px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  padding: 9px 9px 9.2px 9px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  @media screen and (max-width: 450px) {
    left: 176px;
  }
`;
