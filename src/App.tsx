import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor}
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
  <Wrapper>
    <Title>Hello</Title>
  </Wrapper>
  )
}

export default App;
