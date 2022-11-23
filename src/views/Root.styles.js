import styled from 'styled-components';

export const Wrapper = styled.div`
width: 40vw;
height: 80vh;
display: grid;
grid-template-rows: 300px 1fr;
justify-content: center;
border-radius: 10px;
background-color: ${({ theme }) => theme.colors.background};



`;