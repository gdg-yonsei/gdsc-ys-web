"use client";

import { useState } from "react";
import { styled } from "styled-components";

import { HamburgerMenu } from "../HamburgerMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100vw;
  height: 100px;
  padding: 0 50px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: transparent;
`;
