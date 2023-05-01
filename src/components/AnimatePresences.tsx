import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

// motion.div로 styled-components를 만들기위해 아래와같이 작성
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars = {
  initial: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, rotateZ: "180deg" },
  exit: { y: 50, scale: 0, opacity: 0 },
};

const AnimatePresences = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prev) => !prev);
  return (
    <>
      <Wrapper>
        {/* 
          자식이 사라질때 애니메이션 정의가능
          일반적으로 react.js에서 상태값이 변하므로 transition을 주지못하지만 AnimatePresence로 구현가능
         */}
        <AnimatePresence>{visible ? <Box variants={boxVars} initial="initial" animate="visible" exit="exit" /> : null}</AnimatePresence>
      </Wrapper>
      <button onClick={toggleVisible}>click</button>
    </>
  );
};

export default AnimatePresences;
