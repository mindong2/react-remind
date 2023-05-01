import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// motion.div로 styled-components를 만들기위해 아래와같이 작성
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const TransformScroll = () => {
  // 애니메이션 상태를 추적 -> 재렌더링 X
  const x = useMotionValue(0);
  // 받아온 motionValue에 따른 수치 전환
  const background = useTransform(x, [-700, 700], ["linear-gradient(135deg, #e09, #d0e)", "linear-gradient(135deg, #0067ee, #00eea7)"]);
  // scrollY -> px 단위 / scrollYProgress -> %단위 0~1
  const { scrollYProgress } = useScroll();
  const scroll = useTransform(scrollYProgress, [0, 1], [2, 0.5]);
  return (
    <Wrapper style={{ background }}>
      {/* <Variants /> */}
      {/* <GestureAndDrag /> */}
      <Box drag="x" dragSnapToOrigin style={{ x, scale: scroll }} />
    </Wrapper>
  );
};

export default TransformScroll;
