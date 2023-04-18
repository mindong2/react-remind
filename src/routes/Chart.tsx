// outlet에서 props를 받을때는 useOutletContext를 이용
import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getChartData } from "../utils/apis/api";
import APexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../recoil/theme";
interface ContextType {
  coinId: string;
  state: {
    name: string;
  };
}

interface DateTime {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
const Chart = () => {
  const { coinId, state } = useOutletContext<ContextType>();
  const { isLoading, data: dateTime } = useQuery<DateTime[]>(["ohlcv", coinId], () => getChartData(coinId), { refetchInterval: 5000 });
  const isDark = useRecoilValue(isDarkAtom);
  
  return (
    <>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <APexChart
          type="line"
          series={[
            {
              name: "Price",
              data: dateTime?.map((v) => Number(v.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            chart: {
              height: 350,
              width: 350,
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
            },
            title: {
              text: `Price of ${state.name}`,
              align: "left",
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
            },
            colors: ["red"],
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: dateTime?.map((v) => new Date(v.time_close * 1000).toUTCString()),
            },
          }}
        />
      )}
    </>
  );
};

export default Chart;
