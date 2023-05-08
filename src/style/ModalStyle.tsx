import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalBox = styled(motion.div)`
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  width: 720px;
  height: 760px;
  margin: 0 auto;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.black.lighter};
  overflow: auto;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 405px;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
  }
  img {
    max-width: 100%;
    vertical-align: top;
    -webkit-user-drag: none;
  }
`;

export const ModalCont = styled.div`
  .content {
    position: relative;
    top: -130px;
    display: flex;
    gap: 0 20px;
    padding: 20px;
  }
  .poster {
    flex: 0.8;
    border-radius: 10px;
    overflow: hidden;
    img {
      height: 100%;
      max-height: 460px;
    }
  }
  .modal-text {
    flex: 1.2;
    color: ${({ theme }) => theme.white.lighter};
    overflow-y: "auto";
    max-height: 50%;
    h3 {
      font-size: 32px;
    }
    p {
      margin-top: 10px;
      max-height: 360px;
      font-size: 16px;
      line-height: 1.4;
      overflow-y: auto;
    }
    .stars {
      color: #ffea2a;
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
`;

export const ModalClose = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  color: ${({ theme }) => theme.white.lighter};
  cursor: pointer;
`;

export const PlaceHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 34px;
  font-weight: bold;
`;
