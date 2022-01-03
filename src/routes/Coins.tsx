import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
    padding: 0px 1.5rem;
    max-width: 35rem;
    margin: 0 auto;
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

const Loader = styled.span`
    display: block;
    text-align: center;
    font-size: 1.5em;
`;

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {

    const [ coins, setCoin ] = useState<CoinInterface[]>([])
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoin(json.slice(0, 100))
            setLoading(false);
        })()
    }, [])

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
    {loading    
            ? <Loader>
                Loading...
              </Loader> 
            : <CoinsList>
                {coins.map((coin) => { 
                    return <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                })}
            </CoinsList>}
        </Container>
    )
}

export default Coins;