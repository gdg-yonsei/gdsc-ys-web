import type { DependencyList } from "react";

export interface Position {
  x: number;
  y: number;
}

export interface ScrollProps {
  prevPos: Position;
  currPos: Position;
}

export interface useScrollProps {
  effect: (props: ScrollProps) => void;
  deps?: DependencyList;
  element?: ElementRef;
  useWindow?: boolean;
  wait?: number;
  boundingElement?: ElementRef;
}
