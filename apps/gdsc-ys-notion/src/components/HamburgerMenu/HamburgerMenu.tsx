import { styled } from "styled-components";

import type { HamburgerMenuProps } from "./HamburgerMenu.type";

const HamburgerMenu = ({ open, setOpen }: HamburgerMenuProps) => {
  const onClickBurger = () => setOpen((prev) => !prev);

  return (
    <BurgerContainer onClick={onClickBurger}>
      <div />
      <div />
      <div />
    </BurgerContainer>
  );
};

export default HamburgerMenu;

const BurgerContainer = styled.button<Partial<HamburgerMenuProps>>`
  width: 32px;
  height: 32px;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 32px;
    height: 4px;

    position: relative;

    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: white;
  }
`;
