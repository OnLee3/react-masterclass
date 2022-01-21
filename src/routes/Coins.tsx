import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from 'react-helmet'
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

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
    background-color: ${props => props.theme.boxColor};
    color: ${props => props.theme.textColor};
    font-size: 1.25rem;
    font-weight: 500;

    margin-bottom : 0.75rem;
    border-radius: 1.5rem;
    a {
        display: flex;
        align-items: center;
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
    font-size: 1.5rem;
`;

const Img = styled.img`
    width: 2em;
    height: 2em;
    margin-right: 0.75rem;
`;

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

interface ICoinsProps {
}

function Coins({}:ICoinsProps) {
    const setDarkAtom = useSetRecoilState(isDarkAtom)
    const toggleDarkAtom = () => {
        setDarkAtom(current => !current);
    }
    const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins)

    return (
        <Container>
            <Helmet>
                <title>코인</title>
            </Helmet>
            <Header>
                <Title>코인</Title>
                <button onClick={toggleDarkAtom}>Toggle Mode</button>
            </Header>
    {isLoading    
            ? <Loader>
                Loading...
              </Loader> 
            : <CoinsList>
                {data?.slice(0,100).map((coin) => { 
                    return <Coin key={coin.id}>
                        <Link to={{
                            pathname:`/${coin.id}`,
                            state: {
                                name: coin.name
                            }
                        }}>
                            <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                })}
            </CoinsList>}
        </Container>
    )
}

export default Coins;