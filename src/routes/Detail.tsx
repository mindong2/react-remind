import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Header, Title, Loader } from "../style/CoinsStyle";

interface coinNameType {
  state: {
    name: string;
  };
}

const Coin = () => {
  // useLocation은 Link 에서 보내준 값들을 받을 수 있다.
  const { state } = useLocation() as coinNameType;
  const { coinId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState({});
  const [price, setPrice] = useState({});
  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
      setInfo(infoData);
      setPrice(priceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        {/* state에 name이 있으면 보여주고 그렇지 않으면 loading... */}
        <Title>{state?.name || "loading..."}</Title>

        {loading ? <Loader>loading...</Loader> : null}
      </Header>
    </Container>
  );
};

export default Coin;
