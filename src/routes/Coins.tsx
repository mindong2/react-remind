import { Link } from "react-router-dom";
import { Container, Header, CoinList, Coin, Title, Loader, Img } from "../style/CoinsStyle";
import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../utils/apis/api";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
  // react-query는 캐시에 저장해서 useEffect처럼 들어올때마다 불러오지않는다 (아래처럼 isLoading, data 명명가능)
  const { isLoading, data: Coins } = useQuery<CoinType[]>(["coinsType"], getCoins);
  return (
    <Container>
      {/* react-helmet -> 헬멧에 작성한 코드가 html의 head로 들어간다 */}
      <HelmetProvider>
        <Helmet>
          <title>Coins List</title>
        </Helmet>
      </HelmetProvider>
      <Header>
        <Title>coins</Title>
      </Header>

      <CoinList>
        {isLoading ? (
          <Loader>loading...</Loader>
        ) : (
          Coins?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: `${coin.name}` }}>
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
