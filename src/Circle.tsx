import React from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

//styled components에서 props를 받을때는 제네릭
const Container = styled.div<CircleProps>`
  background-color: ${({ bgColor }) => bgColor};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid ${({ borderColor }) => borderColor};
`;

// 상위 컴포넌트에서 props를 받아오지 않아도 위와같이 default를 정해둘 수 있다. (props를 받으면 해당 프랍스의 텍스트로 바뀜)

const Circle = ({ bgColor, borderColor, text = "default text" }: CircleProps) => {
  return (
    <div>
      {bgColor}
      <Container bgColor={bgColor} />
      {}
      {/* ??는 앞에꺼가 있으면 앞에꺼 없으면 뒤에꺼로 */}
      <Container borderColor={borderColor ?? bgColor} bgColor="tomato" />
    </div>
  );
};

export default Circle;
