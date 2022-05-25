import styled from 'styled-components'
import {keyframes} from 'styled-components'


const rotation = keyframes`

0%
{
  transform:rotate(0deg)
}
25%  {transform:rotate(90deg)}
50%  {transform:rotate(180deg)}
75%  {transform:rotate(270deg)}
100% {transform:rotate(360deg)}


`
const Loading = styled.div`

position:absolute;
display: flex;
justify-content: center;
align-items: center;
color:chartreuse;
height:70px;
width:70px;
top:8.5%;
left:50%;

background:red;
opacity:1;
border-radius: 7px;
border:2px solid blue ;
align-self:center;
animation-name:${rotation};
animation-duration:7s;
animation-iteration-count:infinite;



`
export default Loading