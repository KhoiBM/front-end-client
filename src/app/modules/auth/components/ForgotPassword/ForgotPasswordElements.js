import styled from 'styled-components'


export const FormWrapper = styled.form`
border-radius: 4px;
border: 0 solid var(--border-color-main);
background-color:#fff;
width: 22rem;
height:200px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
/* background-color: red; */

`


export const InputText = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 0 solid var(--border-color-main);
  border-radius: 4px;
  text-indent: 5px;
  text-decoration: none;
  font-style: italic;
  font-weight: 500;
  background-color: var(--bg-secondary-color-main);
  
  &:focus{
    border-bottom: 2px solid var(--primary-color-main);
  }
  &::placeholder{
    text-indent:8px
  }
`

