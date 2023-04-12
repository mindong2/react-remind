import styled, { keyframes } from "styled-components";

const Box = styled.div`
  background-color: ${({ bgColors }) => bgColors};
  width: 100px;
  height: 100px;
  h2 {
    &:hover {
      color: red;
    }
  }
`;

const Flex = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  //이와같은 방식으로 styled 컴포넌트 자체에 스타일추가도 가능하다
  ${Box} {
    margin-right: 20px;
  }
`;

// 애니메이션
const Ani = keyframes`
  from {
    width: 100px;
  }
  to {
    width: 150px;
  }
 
`;

// 아래 방식처럼 다른 컴포넌트의 요소와 스타일을 불러올수있다.
const Circle = styled(Box)`
  animation: ${Ani} 0.5s linear forwards;
  border-radius: 50%;
`;

// attrs 속성으로 attr 추가가능
const Text = styled.h2.attrs({ className: "h222" })`
  color: #fff;
  font-size: 24px;
`;

function App() {
  return (
    // as로 Flex컴포넌트 (div속성)을 main 속성으로 바꿀수있다
    <Flex as="main">
      <Box bgColors="tomato">
        <Text>Hello</Text>
      </Box>
      <Box bgColors="teal" />
      <Circle bgColors="black" />
    </Flex>
  );
}

export default App;
