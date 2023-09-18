import { ImageProps } from "next/image";

export interface UpperLogoProps extends Omit<ImageProps, "width" | "height"> {}
