import { palette } from '@gdsc-yonsei/color';

const useExperimentalSemanticColor = () => {
  const background = {
    solid: {
      primary: palette.white,
      secondary: palette.blue.o100,
      tertiary: palette.white,
    },
    gray: {
      primary: palette.white,
      secondary: palette.coolGray.o100,
      tertiary: palette.white,
    },
  };

  const button = {
    primary: {
      background: {
        common: palette.blue.o500,
        active: palette.blue.o600,
        pressed: palette.blue.o700,
        loading: palette.blue.o700,
        disabled: palette.coolGray.o200,
      },
      label: {
        common: palette.white,
        active: palette.white,
        pressed: palette.white,
        loading: palette.white,
        disabled: palette.coolGray.o400,
      },
    },
    secondary: {
      background: {
        common: palette.blue.o100,
        active: palette.blue.o200,
        pressed: palette.blue.o400,
        loading: palette.blue.o700,
        disabled: palette.coolGray.o200,
      },
      label: {
        common: palette.blue.o800,
        active: palette.blue.o800,
        pressed: palette.blue.o800,
        loading: palette.blue.o800,
        disabled: palette.coolGray.o400,
      },
    },
    // tertiary: {
    //   background: {
    //     common: palette.blue.o100,
    //     active: palette.blue.o200,
    //     pressed: palette.blue.o400,
    //     loading: palette.blue.o700,
    //     disabled: palette.coolGray.o200,
    //   },
    //   label: {
    //     common: palette.blue.o800,
    //     active: palette.blue.o800,
    //     pressed: palette.blue.o800,
    //     loading: palette.blue.o800,
    //     disabled: palette.coolGray.o400,
    //   },
    // },
  };

  // const textButton = {

  // }

  return {
    background,
    button,
  };
};

export default useExperimentalSemanticColor;
