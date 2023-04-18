import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 50px 30px;
  transition:all .15s ease-in-out;
`;
const Header = styled.header`
  position: relative;
  font-size: 48px;
  text-align: center;
  a {
    position: absolute;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.textColor};
  }
`;
const CoinList = styled.ul``;

const Coin = styled.li`
  margin: 20px auto;
  max-width: 480px;
  border-radius: 10px;
  transition:all .15s ease-in-out;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  border:1px solid ${({theme}) => theme.borderColor};
  overflow:hidden;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 15px;
    transition: all 0.15s linear;
    &:hover {
      background-color:${({theme}) => theme.hoverColor};
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  width: 100%;
  margin: 0 auto;
  font-size: 24px;
`;

const Img = styled.img`
  width: 25px;
  margin-right: 15px;
`;

export { Container, Header, CoinList, Coin, Title, Loader, Img };
