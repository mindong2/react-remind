import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderCont = styled.div`
  position: relative;
  height: 280px;
  top: -100px;
  margin-top: 20px;
  padding: 0 10px;
`;

export const SliderRow = styled(motion.div)`
  position: absolute;
  left: 10px;
  right: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  .slideBtn {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    font-size: 40px;
    color: ${({ theme }) => theme.white.darker};
    opacity: 0;
    z-index: 99;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
`;

export const SliderItem = styled(motion.div)<{ bgphoto: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 30px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${({ bgphoto }) => bgphoto});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  word-break: keep-all;
  font-size: 28px;
  cursor: pointer;
  &:first-of-type,
  &:last-of-type {
    transform-origin: center right;
  }

  &:hover span {
    transition-delay: 0.3s;
    opacity: 1;
  }
  span {
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
`;
export const SlideTitle = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.white.lighter};
  font-size: 32px;
  font-weight: bold;
`;
