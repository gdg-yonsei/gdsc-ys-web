import { Dispatch, SetStateAction } from "react";

export interface HamburgerMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
