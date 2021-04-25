import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /* background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")}; */
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "#000")};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 1111;
  width:100%;

  /* border: 1px solid red; */

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1111;
  width: 100%;
  padding: 0 24px;
  max-width: 97.5vw;
    /* border: 1px solid red; */
  
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  /* border: 1px solid red; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  color:#fff !important;
  /* border: 1px solid blue; */
`;
export const NavSLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    /* border-bottom: 3px solid #01bf71; */
    /* border-bottom: 3px solid rgb(194, 100, 21); */
    /* border-bottom: 3px solid rgba(92,39,251,1); */
    border-bottom: 3px solid var(--primary-color-main);
  }
`;

export const NavRLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    /* border-bottom: 3px solid #01bf71; */
    /* border-bottom: 3px solid rgb(194, 100, 21); */
    /* border-bottom: 3px solid rgba(92,39,251,1); */
    border-bottom: 3px solid var(--primary-color-main);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavBtnLink = styled(LinkR)`
  border-radius: 4px;
  /* background: rgb(194, 100, 21); */
  /* background: rgba(92,39,251,1); */
  /* background:  #01bf71; */
  background: var(--primary-color-main);
  white-space: nowrap;
  padding: 10px 22px;
  margin-left: 24px;
  margin-right: 24px;
  /* color: #010606; */
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    position: relative;
    top: 0.5px;
  }
`;
