import styled from "styled-components";
import { motion } from "framer-motion";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// motion.div로 styled-components를 만들기위해 아래와같이 작성
const Box = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0 30px;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: { opacity: 0, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      bounce: 0.5,
      // 자식 요소들에게 전달할 delay
      delayChildren: 0.3,
      // 자식요소들의 delay를 각각 계산해서 차례대로 전달
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const Variants = () => {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        {/* 부모의 variants내 속성들을 자식이 상속 -> 부모의 variants내 속성들과 이름을 맞춰주면 생략가능 */}
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
      {/* 
        Framer-motion을 사용하려면 motion 내의 element로 사용 
        react-script 버전이 4.XX이면 콘솔오류 -> Craco로 해결
        <motion.div></motion.div>
      */}
    </Wrapper>
  );
};

export default Variants;
