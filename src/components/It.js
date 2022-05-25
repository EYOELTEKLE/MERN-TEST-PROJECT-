import styled from 'styled-components'

const It = styled.div`
display: flex;
margin: 5px;
flex-direction: column;
justify-content: center;
align-content: flex-start;


border: 2px solid green;
margin-left: 35%;
margin-right: 35%;
background: black;

& input
{
    margin: 6px;
    background: white;
    color: black;
}

& button
{
    width: 90px;
    height: 40px;
    margin-bottom: 5px;
}


`
export default It;