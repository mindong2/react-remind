import styled from "styled-components";
import { motion } from "framer-motion";

//  Header.tsx
export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 1.4rem;
  padding: 2rem 6rem;
  color: #fff;
  z-index: 1000;
  @media screen and (max-width: 425px) {
    padding: 1.5rem;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(motion.svg)`
  margin-right: 5rem;
  width: 9.5rem;
  height: 2.5rem;
  fill: ${({ theme }) => theme.red};
  @media screen and (max-width: 425px) {
    margin-right: 3rem;
  }
  path {
    stroke-width: 0.6rem;
    stroke: #fff;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 2rem;
  color: ${({ theme }) => theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.8rem;
  font-weight: 600;
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.white.lighter};
  }
`;

export const Search = styled(motion.form)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0.5rem 1rem;
  border: 0.1rem solid #c8c8c8;
  border-radius: 0.5rem;
  svg {
    height: 2.5rem;
    cursor: pointer;
  }
`;

export const SearchInput = styled(motion.input)`
  transform-origin: right center;
  background-color: transparent;
  outline: none;
  margin-left: 1rem;
  color: #fff;
  @media screen and (max-width: 425px) {
    max-width: 13rem;
  }
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  bottom: -1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.red};
`;

// Common
export const HomeWrap = styled.div`
  background-color: #000;
`;

export const Banner = styled.div<{ bgphoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${({ bgphoto }) => bgphoto});
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding-left: 6rem;
  color: #fff;
  font-size: 2.6rem;
  p {
    line-height: 1.5;
  }
  @media screen and (max-width: 425px) {
    padding-left: 0;
    padding: 2rem;
    padding-top: 4rem;
  }
`;

export const Title = styled.h2`
  font-size: 5.8rem;
  @media screen and (max-width: 425px) {
    text-align: center;
    font-weight: bold;
  }
`;

export const OverView = styled.p`
  width: 50%;
  margin-top: 3rem;
  font-size: 3rem;
  @media screen and (max-width: 425px) {
    width: auto;
    margin-top: 3rem;
    font-size: 2.8rem;
  }
`;
