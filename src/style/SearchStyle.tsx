import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchWrap = styled.div`
  padding: 3rem;
  padding-top: 15rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.black.veryDark};
  color: ${({ theme }) => theme.white.lighter};
`;

export const SearchName = styled.h2`
  font-size: 3.8rem;
  font-weight: bold;
`;

export const NoResult = styled.h3`
  font-size: 3.8rem;
  font-weight: bold;
`;

export const SearchList = styled.ul`
  display: flex;
  margin-top: 5rem;
  gap: 3rem;
  flex-wrap: wrap;
`;

export const SearchItem = styled(motion.li)`
  position: relative;
  width: 32%;
  height: 50rem;
  background-color: ${({ theme }) => theme.black.lighter};
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;

  h3 {
    color: ${({ theme }) => theme.white.lighter};
    font-size: 3.2rem;
    font-weight: bold;
  }

  @media screen and (max-width: 1000px) {
    width: 48%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchImg = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 28rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${({ bgphoto }) => bgphoto});
  background-size: cover;
`;

export const SearchInfo = styled.div`
  padding: 1.5rem;
  color: ${({ theme }) => theme.white.lighter};

  h4 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1;
  }

  p {
    margin-top: 2rem;
    font-size: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    line-height: 1.4;
  }
`;

export const SearchInput = styled.input``;
