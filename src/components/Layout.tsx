import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  background: linear-gradient(135deg, #e09, #d0e);
`;

// motion.div로 styled-components를 만들기위해 아래와같이 작성
const Box = styled(motion.div)`
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

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #247df1;
`

const Layout = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Wrapper onClick={() => setClicked(prev => !prev)}>
        {/* 
          <Box style={{justifyContent:!clicked ? "flex-start" : "center", alignItems : !clicked ? "flex-start" : 'center'}}>
            layout 속성을 넣으면 layout이 변경될때 애니메이션 효과가 들어간다.
            <Circle layout></Circle>
          </Box>
        */}

        {/* 같은 layoutId를 가지는 요소들 사이에서는 이동하는것처럼 보임 (같은 엘리먼트로 인식) 데모확인 */}
        <Box>
          {!clicked ? <Circle layoutId="circle" style={{borderRadius:35, scale:1}}></Circle> : null}
        </Box>
        <Box>
          {clicked ? <Circle layoutId="circle" style={{borderRadius:0, scale:0.5}}></Circle> : null}
        </Box>
      </Wrapper>
    </>
  );
};

export default Layout;
