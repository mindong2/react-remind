import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderCont = styled.div`
  position: relative;
  height: 28rem;
  top: -10rem;
  margin-top: 2rem;
  padding: 0 1rem;
`;

export const SliderRow = styled(motion.div)`
  position: absolute;
  left: 1rem;
  right: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  .slideBtn {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(0.5rem);
    font-size: 4rem;
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

  @media screen and (max-width: 768px) {
    .slideBtn {
      width: 4rem;
      height: 4rem;
      top: -6rem;
      left: unset;
      border-radius: 50%;
      font-size: 3rem;
      opacity: 1;
    }
    .prev {
      right: 5rem;
    }
    .next {
      right: 0;
    }
  }
`;

export const SliderItem = styled(motion.div)<{ bgphoto: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  padding: 3rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${({ bgphoto }) => bgphoto});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  color: #fff;
  text-align: center;
  word-break: keep-all;
  font-size: 2.8rem;
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
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.white.lighter};
  font-size: 3.2rem;
  font-weight: bold;
`;
