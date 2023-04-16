import { useLocation, useParams, Outlet, Link, useMatch } from "react-router-dom";
import { Container, Header, Title, Loader } from "../style/CoinsStyle";
import { useQuery } from "@tanstack/react-query";
import { getInfoData, getPriceData } from "../utils/apis/api";
import { Overview, OverviewItem, Description, TabWrap, Tab } from "../style/DetailStyle";

interface coinNameType {
  state: {
    name: string;
  };
}

/* API 타입정의 할때 console에서 전역으로 저장 (ex -> temp1로 저장 후) 
  key -> Object.keys(temp1).join();으로 가져오고
  values -> Object.values(temp1).map(v => typeof v).join();으로 가져오면 편하다.
*/

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Detail = () => {
  // useLocation은 Link 에서 보내준 값들을 받을 수 있다.
  const { state } = useLocation() as coinNameType;
  const { coinId } = useParams();

  // useMatch는 해당 url 이라면 object return
  const chartMatch = useMatch("/:coinId/chart");
  const priceMatch = useMatch("/:coinId/price");

  // useQuery의 두번째 인자에는 함수가 들어가야하므로 함수 파라미터를 보낼때 -> 콜백
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(["infoData", coinId], () => getInfoData(coinId));
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceInfo>(["priceData", coinId], () => getPriceData(coinId));
  const loading = infoLoading || priceLoading;
  return (
    <Container>
      <Header>
        {/* state에 name이 있으면 보여주고 그렇지 않으면 loading... */}
        <Title>{state?.name}</Title>
      </Header>

      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>

          <Description>{infoData?.description}</Description>

          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <TabWrap>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`} state={state}>
                Chart
              </Link>
            </Tab>

            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`} state={state}>
                Price
              </Link>
            </Tab>
          </TabWrap>
          {/* chart / price */}
          <Outlet />
        </>
      )}
    </Container>
  );
};

export default Detail;
