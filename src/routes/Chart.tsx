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
    // const { isLoading, data: dateTime } = useQuery<DateTime[]>(["ohlcv", coinId], () => getChartData(coinId), { refetchInterval: 5000 });
    const { isLoading, data: dateTime } = useQuery<DateTime[]>(["ohlcv", coinId], () => getChartData(coinId));
    const isDark = useRecoilValue(isDarkAtom);
    const chartData = dateTime?.map((v) => {
        return {
            x: new Date(Number(v.time_close)),
            y: [Number(v.open), Number(v.high), Number(v.low), Number(v.close)],
        };
    });
    return (
        <>
            {isLoading ? (
                "Loading Chart..."
            ) : (
                <APexChart
                    type="candlestick"
                    series={[
                        {
                            name: "candle",
                            data: chartData ?? [],
                        },
                    ]}
                    options={{
                        chart: {
                            type: "candlestick",
                            height: 350,
                            width: 350,
                            background: "transparent",
                        },
                        theme: {
                            mode: isDark ? "dark" : "light",
                        },
                        title: {
                            text: `Price of ${state.name}`,
                            align: "left",
                        },
                        tooltip: {
                            enabled: true,
                        },
                        xaxis: {
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            labels: { show: true },
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
