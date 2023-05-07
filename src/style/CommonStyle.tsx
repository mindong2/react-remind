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
  font-size: 14px;
  padding: 20px 60px;
  color: #fff;
  z-index: 1000;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${({ theme }) => theme.red};
  path {
    stroke-width: 6px;
    stroke: #fff;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 20px;
  color: ${({ theme }) => theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.white.lighter};
  }
`;

export const Search = styled(motion.form)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 5px 10px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  svg {
    height: 25px;
    cursor: pointer;
  }
`;

export const SearchInput = styled(motion.input)`
  transform-origin: right center;
  background-color: transparent;
  outline: none;
  margin-left: 10px;
  color: #fff;
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -10px;
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
  height: 100vh;
  padding-left: 60px;
  color: #fff;
  font-size: 26px;
  p {
    line-height: 1.5;
  }
`;

export const Title = styled.h2`
  font-size: 58px;
`;

export const OverView = styled.p`
  width: 50%;
  margin-top: 30px;
  font-size: 30px;
`;
