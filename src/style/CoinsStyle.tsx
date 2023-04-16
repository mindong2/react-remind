import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 50px 30px;
`;
const Header = styled.header`
  font-size: 48px;
  text-align: center;
`;
const CoinList = styled.ul``;

const Coin = styled.li`
  margin: 20px auto;
  max-width: 480px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 15px;
    transition: all 0.15s linear;
    &:hover {
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
