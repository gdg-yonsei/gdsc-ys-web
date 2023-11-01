import styled from "styled-components";

import { useExperimentalSemanticColor } from "../../hooks";

function TopAppBar() {
  const { background } = useExperimentalSemanticColor();

  console.log(background);

  return (
    <Container>
      <LeftContainer>

      </LeftContainer>
      <CenterContainer>

      </CenterContainer>
      <RightContainer>

      </RightContainer>
    </Container>
  )
}

export default TopAppBar;

const Container = styled.header`
  width: 100%;
  height: 64px;

  padding: 14px 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftContainer = styled.div`
  height: 100%;
`

const CenterContainer = styled.div`
  flex: 1;
  height: 100%;
`

const RightContainer = styled.div`
  height: 100%;
`