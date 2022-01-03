import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 1.5rem;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    font-size: 1.25em;
    font-weight: 500;

    margin-bottom : 0.75rem;
    border-radius: 1.5rem;
    a {
        display: block;
        padding: 1.5rem;
        transition: color 0.2s ease-in-out;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    color:${props => props.theme.accentColor};
`;

const coins = [
    {
        "id": "btc-bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": 1,
        "is_new": false,
        "is_active": true,
        "type": "coin"
      },
      {
        "id": "eth-ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": 2,
        "is_new": false,
        "is_active": true,
        "type": "coin"
      },
      {
        "id": "bnb-binance-coin",
        "name": "Binance Coin",
        "symbol": "BNB",
        "rank": 3,
        "is_new": false,
        "is_active": true,
        "type": "coin"
      },
]

function Coins() {
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            <CoinsList>
                {coins.map((coin) => { 
                    return <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                })}
            </CoinsList>
        </Container>
    )
}

export default Coins;