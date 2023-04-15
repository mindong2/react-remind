import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Header, CoinList, Coin, Title, Loader, Img } from "../style/CoinsStyle";

interface CoinType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<CoinType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>coins</Title>
      </Header>

      <CoinList>
        {loading ? (
          <Loader>loading...</Loader>
        ) : (
          coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.name}`} state={{ name: `${coin.name}` }}>
                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt="" />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))
        )}
      </CoinList>
    </Container>
  );
};

export default Coins;
