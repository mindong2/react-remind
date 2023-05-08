import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchWrap = styled.div`
  padding: 30px;
  padding-top: 150px;
  min-width: 100vh;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.black.veryDark};
  color: ${({ theme }) => theme.white.lighter};
`;

export const SearchName = styled.h2`
  font-size: 38px;
  font-weight: bold;
`;

export const NoResult = styled.h3`
  font-size: 38px;
  font-weight: bold;
`;

export const SearchList = styled.ul`
  display: flex;
  margin-top: 50px;
  gap: 30px;
  flex-wrap: wrap;
`;

export const SearchItem = styled(motion.li)`
  position: relative;
  width: 32%;
  height: 500px;
  background-color: ${({ theme }) => theme.black.lighter};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  h3 {
    color: ${({ theme }) => theme.white.lighter};
    font-size: 32px;
    font-weight: bold;
  }
`;

export const SearchImg = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 280px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${({ bgphoto }) => bgphoto});
  background-size: cover;
`;

export const SearchInfo = styled.div`
  padding: 15px;
  color: ${({ theme }) => theme.white.lighter};

  h4 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1;
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    line-height: 1.4;
  }
`;

export const SearchInput = styled.input``;
