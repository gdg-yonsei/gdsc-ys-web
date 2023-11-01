import styled from 'styled-components';

import { TopAppBar } from '../components';

function App() {
  return (
    <Container>
      <TopAppBar />
    </Container>
  )
}

export default App;

const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`