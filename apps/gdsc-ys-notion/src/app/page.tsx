"use client";

import { styled, useTheme } from "styled-components";

import { H1, PageTitle, Space, Stack, Text, UpperLogo } from "@/components/core";

import { BannerImage } from "./components";
import { LoadingDots } from "@/components";

function Home() {
  const theme = useTheme();

  return (
    <Container>
      <BannerImage />
      <Wrapper>
        <LowerPadding>
          <LowerContainer>
            <UpperLogo src={"/images/logo.png"} alt={"GDSC Logo"} />
            <PageTitle label={"Welcome!"} />
            <LoadingDots />
            <Stack.Horizontal>
              <H1 label={"Create"} labelColor={theme.green} containerStyle={{ width: "fit-content" }} />
              <H1 label={"ㆍ"} labelColor={theme.white} containerStyle={{ width: "fit-content" }} />
              <H1 label={"Design"} labelColor={theme.yellow} containerStyle={{ width: "fit-content" }} />
              <H1 label={"ㆍ"} labelColor={theme.white} containerStyle={{ width: "fit-content" }} />
              <H1 label={"Code"} labelColor={theme.red} containerStyle={{ width: "fit-content" }} />
              <H1 label={"ㆍ"} labelColor={theme.white} containerStyle={{ width: "fit-content" }} />
              <H1 label={"Build"} labelColor={theme.blue} containerStyle={{ width: "fit-content" }} />
            </Stack.Horizontal>
            <Text label={"Be a GDSC Developer"} labelStyle={{ fontSize: "24px", marginTop: "-12px" }} bold />
            <Space vertical={24} />
            <H1 label={"Upcoming Event"} />
            <PaddingBottom />
          </LowerContainer>
        </LowerPadding>
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;

  padding-top: 50vh;

  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LowerPadding = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LowerContainer = styled.div`
  width: 900px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

///

const PaddingBottom = styled.div`
  width: 100%;
  height: 100vh;
`;
