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

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 640px;
  div {
    width: 200px;
  }
  div:first-of-type,
  div:last-of-type {
    width: 400px;
  }
`

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
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Modal = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  font-size: 28px;
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

const OverlayVar = {
  invisible : {
    backgroundColor:'rgba(0,0,0,0)'
  },
  visible : {
    backgroundColor:'rgba(0,0,0,0.7)'
  },
  exit : {
    backgroundColor:'rgba(0,0,0,0)'
  }
}

const arr = [1,2,3,4];
 
const App = () => {
  const [id, setId] = useState<null | string>(null)
  return (
    <>
      <Wrapper>
        <Grid>
          { arr.map(v => <Box key={v.toString()} onClick={()=> setId(v.toString())} layoutId={v.toString()}>{v}</Box>)}
       </Grid>
       <AnimatePresence>
        { id !== null
        ? <Overlay variants={OverlayVar} initial="invisible" animate="visible" exit="exit">
            <Modal layoutId={id?.toString()}>
              {id}
              <button type="button" onClick={() => setId(null)}>X</button>
            </Modal>
          </Overlay>
        : null }
       </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default App;
