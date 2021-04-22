import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

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


