import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #e09, #d0e);
`;

// motion.div로 styled-components를 만들기위해 아래와같이 작성
const Box = styled(motion.div)`
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  font-size: 28px;
`;

/* 
  AnumatePresence와 자식요소에 custom prop을 추가 후 아래와같이 함수형식으로 넣는다
  뒤로 갈때는 오른쪽에서 왼쪽, 반대일 경우는 왼쪽에서 오른쪽
*/
const BoxVars = {
  invisible: (isBack: boolean) => ({ x: isBack ? -500 : 500, scale: 0, opacity: 0 }),
  visible: { x: 0, scale: 1, opacity: 1 },
  exit: (isBack: boolean) => ({ x: isBack ? 500 : -500, scale: 0, opacity: 0 }),
};

const Slider = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextBtn = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };

  const prevBtn = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };

  return (
    <>
      <Wrapper>
        <AnimatePresence custom={back}>
          {/* react에서 key값이 바뀌면 re-rendering 하기때문에 각각 다른 element로 생각한다. */}
          <Box key={visible} variants={BoxVars} custom={back} initial="invisible" animate="visible" exit="exit">
            {visible}
          </Box>
        </AnimatePresence>
        <button type="button" onClick={nextBtn}>
          next
        </button>
        
        <button type="button" onClick={prevBtn}>
          prev
        </button>
      </Wrapper>
    </>
  );
};

export default Slider;
