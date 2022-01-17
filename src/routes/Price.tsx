import styled from 'styled-components';
interface PriceProps {
    priceData: {
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
    } | undefined
}
const PriceWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const OverviewNumber = styled.span<{isGreen: boolean}>`
    color: ${props => props.isGreen ? '#4cd137' : '#e84118'}
`;

function Price({priceData}: any ){
    return (
        <PriceWrapper>
            <Overview>
                <span>15분</span>
                <OverviewNumber isGreen={priceData.percent_change_15m > 0}>
                    {priceData.percent_change_15m}
                </OverviewNumber>
            </Overview>
            <Overview>
                <span>30분</span>
                <OverviewNumber isGreen={priceData.percent_change_30m > 0}>
                    {priceData.percent_change_30m}
                </OverviewNumber>
            </Overview>
            <Overview>
                <span>1시간</span>
                <OverviewNumber isGreen={priceData.percent_change_1h > 0}>
                    {priceData.percent_change_1h}
                </OverviewNumber >
            </Overview>
            <Overview>
                <span>6시간</span>
                <OverviewNumber isGreen={priceData.percent_change_6h > 0}>
                    {priceData.percent_change_6h}
                </OverviewNumber>
            </Overview>
            <Overview>
                <span>12시간</span>
                <OverviewNumber isGreen={priceData.percent_change_12h > 0}>
                    {priceData.percent_change_12h}
                </OverviewNumber >
            </Overview>
            <Overview>
                <span>1일</span>
                <OverviewNumber isGreen={priceData.percent_change_24h > 0}>
                    {priceData.percent_change_24h}
                </OverviewNumber>
            </Overview>
            <Overview>
                <span>7일</span>
                <OverviewNumber isGreen={priceData.percent_change_7d > 0}>
                    {priceData.percent_change_7d}
                </OverviewNumber>
            </Overview>
            <Overview>
                <span>1개월</span>
                <OverviewNumber isGreen={priceData.percent_change_30d > 0}>
                    {priceData.percent_change_30d}
                </OverviewNumber>
            </Overview>
            <Overview>
                <span>1년</span>
                <OverviewNumber isGreen={priceData.percent_change_1y > 0}>
                    {priceData.percent_change_1y}
                </OverviewNumber>
            </Overview>
        </PriceWrapper>
    )
}

export default Price;