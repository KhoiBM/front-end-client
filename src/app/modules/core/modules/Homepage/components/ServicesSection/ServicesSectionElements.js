import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";

export const ServicesSectionContainer = styled.div`
height:auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
/* border: 1px solid red; */
padding:68px;

@media screen  and (max-width: 768px){
    height: 1100px;
}
@media screen  and (max-width: 480px){
    height: 1300px;
}
`


export const ServicesWrapper = styled.div`
max-width: 1200px;
/* margin: 48px auto; */
/* margin-bottom: 48px; */
/* display: grid; */
/* grid-template-columns: 1fr 1fr 1fr; */
/* grid-gap: 16px; */
display:flex;
justify-content:center;
align-items: center;
gap:16px;
flex-wrap:wrap;
padding: 50px 50px;
height:auto;
/* min-height: 800px; */
/* border: 1px solid red; */

@media screen and (max-width: 1000px){
    /* grid-template-columns: 1fr 1fr; */
}

@media screen and (max-width: 768px){
    /* grid-template-columns: 1fr; */
    padding: 0 20px;
}
`

export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2 ease-in-out;
padding: 15px 10px;
width:300px;
/* border: 1px solid blue; */

&:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
}
`
export const ServicesCardLinkR = styled(LinkR)`
   outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #010606;
`


export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const ServicesH2 = styled.h2`
font-size: 1.25rem;
margin-bottom: 10px;
`

export const ServicesP = styled.p`
font-size:1rem;
text-align: center;

`
