import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalBox = styled(motion.div)`
  position: fixed;
  top: 10rem;
  left: 0;
  right: 0;
  width: 72rem;
  height: 76rem;
  margin: 0 auto;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.black.lighter};
  overflow: auto;
  z-index: 1003;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
  }
  &.active::before {
    height: 48rem;
  }
  img {
    max-width: 100%;
    vertical-align: top;
    -webkit-user-drag: none;
  }
  @media screen and (max-width: 425px) {
    top: 20rem;
    width: 90%;
    height: auto;
    &::before {
      height: 0;
    }
  }
`;

export const ModalCont = styled.div`
  .content {
    position: relative;
    top: -13rem;
    display: flex;
    gap: 0 2rem;
    padding: 2rem;
  }
  .poster {
    flex: 0.8;
    border-radius: 1rem;
    overflow: hidden;
    img {
      height: 100%;
      max-height: 46rem;
    }
  }

  .modal-text {
    flex: 1.2;
    color: ${({ theme }) => theme.white.lighter};
    overflow-y: "auto";
    max-height: 50%;
    h3 {
      font-size: 3.2rem;
    }
    p {
      margin-top: 1rem;
      max-height: 36rem;
      font-size: 1.6rem;
      line-height: 1.4;
      overflow-y: auto;
    }
    .stars {
      color: #ffea2a;
    }
  }

  @media screen and (max-width: 425px) {
    .content {
      top: 0;
    }
    .poster {
      display: none;
    }
  }
`;

export const OverLay = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 1002;
`;

export const ModalClose = styled(motion.div)`
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.white.lighter};
  cursor: pointer;
`;

export const PlaceHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 3.2rem;
  font-weight: bold;
`;
