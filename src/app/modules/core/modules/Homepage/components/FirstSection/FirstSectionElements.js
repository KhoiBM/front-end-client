import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';


export const FirstContainer = styled.div`
background: #0c0c0c;
/* background: #fff; */
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
/* height: 1000px; */
width:100%;
height: auto;
min-height:1000px;
position: relative;
z-index: 1;
/* border:1px solid purple; */
/* margin-top:24px; */
/* margin-bottom:24px; */


&:before{
    content: '';
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg,rgba(0,0,0,0.2) 0% rgba(0,0,0,0.6) 100%),linear-gradient(180deg, rgaba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
    /* border: 1px solid red; */
}
`

export const FirstBg = styled.div`
position: absolute;
top:0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow:hidden;
/* border:1px solid white; */
`

export const FirstContent = styled.div`
z-index: 3;
/* max-width: 1200px; */
position: absolute;
top:90;
right: 0;
bottom: 0;
left: 0;
/* padding: 8px 24px; */
flex-direction:column;
align-items: center;
/* border:1px solid white; */
/* border:1px solid red; */
/* width:1000px; */
min-Width:100%;
height:85%;

`
export const FirstContentWrapper = styled.div`
position:relative;
width:100%;
height:100%;
/* border:1px solid blue; */

`

export const FirstH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const FirstP = styled.p`
 margin-top: 24px;
 color: #fff;
 font-size: 24px;
 text-align: center;
 max-width: 600px;

 @media screen (max-width: 768px){
     font-size: 24px;
 }

 @media screennn (max-width: 480px){
     font-size: 18px;
 }
`
export const FirstBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`
