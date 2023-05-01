import styled from "styled-components";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;

// motion.div로 styled-components를 만들기위해 아래와같이 작성
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVariants = {
  hover: { scale: 1.1, rotateZ: "90deg" },
  tap: { scale: 1, borderRadius: "100px" },
  // drag: { backgroundColor: "rgba(0,0,0,0.8)", transition: { duration: 0.2 } },
};

const GestureAndDrag = () => {
  const biggerBoxRef = useRef(null);

  const x = useMotionValue(0);
  useMotionValueEvent(x, "change", (latest) => {
    console.log(latest);
  });

  return (
    <Wrapper>
      {/* <Variants /> */}
      <BiggerBox ref={biggerBoxRef}>
        <Box variants={myVariants} drag dragConstraints={biggerBoxRef} dragElastic={0.5} dragSnapToOrigin whileHover="hover" whileTap="tap" />
      </BiggerBox>
    </Wrapper>
  );
};

export default GestureAndDrag;
