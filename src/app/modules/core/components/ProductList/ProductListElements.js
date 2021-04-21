import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";

export const ProductListContainer = styled.div`
height:auto;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
flex-wrap:"wrap";
/* background: #010606; */
/* border: 1px solid blue; */
width:100%;
min-height:1000px;
padding:5rem;

@media screen  and (max-width: 768px){
    height: 1100px;
}
@media screen  and (max-width: 480px){
    height: 1300px;
}
`


export const Wrapper = styled.div`
max-width: 1100px;
margin: 5rem auto;
/* margin-bottom: 48px; */
display:flex;
justify-content:flex-start;
/* align-items: center; */
gap:2rem;
flex-wrap:wrap;
padding: 0 50px;
width:100%;
height:auto;
/* min-height: 800px; */
/* border: 1px solid blue; */

@media screen and (max-width: 1000px){
}

@media screen and (max-width: 768px){
    padding: 0 20px;
}
`

export const ProductCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2 ease-in-out;
padding: 25px 10px;
width:300px;
min-height:400px;

&:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
}
`
export const CardLinkR = styled(LinkR)`
   outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #010606;
`


export const H1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const TitleWrapper = styled.div`
width:97%;
height:auto;
/* border:1px solid red; */
font-size: 1.25rem;
margin-bottom: 10px;
/* white-space:wrap; */
overflow:hidden;
display:flex;
justify-content: center;
align-items: center;
position:relative
`

export const H2 = styled.p`
width:90%;
height:auto;
/* border:1px solid red; */
font-size: 1.25rem;
/* margin-bottom: 10px; */
display:flex;
justify-content: center;
align-items: center;
position:absolute,
white-space:nowrap;
`

export const P = styled.p`
font-size:1rem;
text-align: center;

`
