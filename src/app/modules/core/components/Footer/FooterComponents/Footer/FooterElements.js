import styled from 'styled-components';

export const Container = styled.div`
padding: 80px 60px;
/* background: radial-gradient(circle,rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%); */
/* background: radial-gradient(circle,var(--primary-color-main) 0%, var(--secondary-color-main) 100%); */
background: radial-gradient(circle,var(--secondary-color-main) 0%, var(--secondary-color-main) 100%);
`
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
max-width: 1000px;
margin: 0 auto;`

export const Column = styled.div`
display:flex;
flex-direction: column;
text-align: left;
/* margin-left: 10px; */
/* border: 1px solid black; */
width:15rem
`

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
grid-gap: 20px;

@media (max-width: 1000px){
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));

}

`



export const Link = styled.a`
color:#fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
&:hover {
    /* color: #ff9c00; */
    /* color: #000; */
    color: var(--primary-color-main) ;
    transition: 200ms ease-in
}`
export const Title = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;`