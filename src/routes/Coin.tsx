import { useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

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

const Title = styled.h1`
    font-size: 3rem;
    color:${props => props.theme.accentColor};
`;

const Loader = styled.span`
    display: block;
    text-align: center;
    font-size: 1.5em;
`;

interface RouteParams {
    coinId: string;
}

interface RouteState {
    name:string;
}

function Coin() {
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();
    return (
    <Container>
        <Header>
            <Title>{state?.name || "Loading..."}</Title>
        </Header>
    {loading    
    ? (<Loader>
        Loading...
       </Loader>) : null}
    </Container>)
}

export default Coin;