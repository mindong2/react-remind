import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap:10px;
  grid-template-columns: repeat(3, 1fr);
`;

const BoardWrap = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div<{isDragging : boolean}>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.isDragging ? '#f7f1e3' : props.theme.cardColor};
  transition : background-color .25s ease-in-out;
`;

const Title = styled.h2`
text-align: center;
font-weight: 600;
margin-bottom: 10px;
font-size: 18px;
`;

export {Wrapper, Boards, BoardWrap, Card, Title}