import { CSSProp, css } from "styled-components";

interface DeviceSize {
  [key: string]: string;
}

const deviceSize: DeviceSize = {
  mobile: "420px",
  tablet: "768px",
  laptop: "1025px",
} as const;

export const MEDIA_QUERIES = {
  MOBILE: `screen and (max-width: ${deviceSize.mobile})`,
  TABLET: `screen and (max-width: ${deviceSize.tablet})`,
  LAPTOP: `screen and (max-width: ${deviceSize.laptop})`,
} as const;

const medias = Object.keys(deviceSize).reduce(
  (acc, label: keyof typeof deviceSize) => {
    acc[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
      @media screen and (max-width: ${deviceSize[label]}) {
        ${css(literals, ...args)};
      }
    `;

    return acc;
  },
  {} as Record<keyof typeof deviceSize, (literals: TemplateStringsArray, ...args: any[]) => CSSProp>,
);

export default medias;
