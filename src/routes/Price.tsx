import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { PriceInfo } from "./Detail";
import { Overview, OverviewItem } from "../style/DetailStyle";

interface PriceContextType {
    coinId: string;
    state: {
        name: string;
    };
    priceData: PriceInfo;
}
const PriceWrap = styled.div`
    margin-top: 30px;
    text-align: center;
    .center {
        justify-content: center;
    }
    h3 {
        font-size: 28px;
        color: ${({ theme }) => theme.textColor};
    }
`;

const Price = () => {
    const { priceData } = useOutletContext<PriceContextType>();
    return (
        <PriceWrap>
            <h3>Price Info of {priceData.name}</h3>
            <Overview className="center">
                <OverviewItem>
                    <span>Market cap</span>
                    <span>{priceData.quotes.USD.market_cap}</span>
                </OverviewItem>
            </Overview>

            <Overview className="center">
                <OverviewItem>
                    <span>Market cap Change For 24h</span>
                    <span>{priceData.quotes.USD.market_cap_change_24h}</span>
                </OverviewItem>
            </Overview>

            <Overview className="center">
                <OverviewItem>
                    <span>Volume For 24h</span>
                    <span>{priceData.quotes.USD.volume_24h}</span>
                </OverviewItem>
            </Overview>
            <Overview className="center">
                <OverviewItem>
                    <span>All Time High Price</span>
                    <span>{priceData.quotes.USD.ath_price}</span>
                </OverviewItem>
            </Overview>
            <Overview className="center">
                <OverviewItem>
                    <span>All Time High Date</span>
                    <span>{priceData.quotes.USD.ath_date}</span>
                </OverviewItem>
            </Overview>
        </PriceWrap>
    );
};

export default Price;
