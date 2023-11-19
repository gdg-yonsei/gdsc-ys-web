import type { CSSProperties } from 'react';

import { useSemanticColor } from '@gdsc-ys/color';
import styled from 'styled-components';

function App() {
  const { background, border } = useSemanticColor();

  const styles: Record<string, CSSProperties> = {
    upper: {
      backgroundColor: background.common.secondary,
      borderBottomWidth: '1px',
      borderBottomColor: border.primary,
      borderBottomStyle: 'solid',
    },
    lower: {
      backgroundColor: background.common.primary,
    }
  }

  return (
    <Container>
      <TestDiv style={styles.upper}>
        <Button>나를 눌러보세요!</Button>
      </TestDiv>
      <TestDiv style={styles.lower}>제발 되라!!</TestDiv>
    </Container>
  )
}

export default App;

const Button = styled.button`
  all: unset;

  padding: 8px 16px;
  border-radius: 16px;

  background-color: var(--button-primary-background-common);
  color: var(--button-primary-label-common);
  scale: 1;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, scale 0.1s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: var(--button-primary-background-active);
    color: var(--button-primary-label-active);
  }

  &:active {
    background-color: var(--button-primary-background-pressed);
    color: var(--button-primary-label-pressed);
    scale: 0.96;
    transition: scale 0.3s ease-in-out;
  }
`;

const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TestDiv = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;