import styled from 'styled-components';

export const Wrapper = styled.div`
width: 500px;
height: 80vh;
display: flex;
flex-direction: column;
align-items:center;
border-radius: 10px;
background-color: ${({ theme }) => theme.colors.background};

form{
    position: relative;
    display: flex;
    flex-wrap: nowrap;
}
/* button{
    position: absolute;
    left: 135px;
} */
select{
    margin: 0 10px 0 10px;

}
`;

