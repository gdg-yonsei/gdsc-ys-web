import { getHexcode } from "../../utils";
import { palette } from "../palette";

/**
 * ### content color
 * 
 * tintColors and grayscale colors for free usage
 */
export const content = {
  white: {
    blue: palette.white,
    green: palette.white,
    yellow: palette.white,
    red: palette.white,
  },
  black: {
    blue: palette.black,
    green: palette.black,
    yellow: palette.black,
    red: palette.black,
  },
  gray: {
    a1: {
      blue: palette.gray.o100,
      green: palette.gray.o100,
      yellow: palette.gray.o100,
      red: palette.gray.o100,
    },
    a2: {
      blue: getHexcode(palette.gray.o300, 0.84),
      green: getHexcode(palette.gray.o300, 0.84),
      yellow: getHexcode(palette.gray.o300, 0.84),
      red: getHexcode(palette.gray.o300, 0.84),
    },
    a3: {
      blue: palette.gray.o400,
      green: palette.gray.o400,
      yellow: palette.gray.o400,
      red: palette.gray.o400,
    },
    a4: {
      blue: palette.gray.o600,
      green: palette.gray.o600,
      yellow: palette.gray.o600,
      red: palette.gray.o600,
    },
    a5: {
      blue: palette.gray.o800,
      green: palette.gray.o800,
      yellow: palette.gray.o800,
      red: palette.gray.o800,
    },
    a6: {
      blue: getHexcode(palette.gray.o1000, 0.84),
      green: getHexcode(palette.gray.o1000, 0.84),
      yellow: getHexcode(palette.gray.o1000, 0.84),
      red: getHexcode(palette.gray.o1000, 0.84),
    },
    a7: {
      blue: palette.gray.o1000,
      green: palette.gray.o1000,
      yellow: palette.gray.o1000,
      red: palette.gray.o1000,
    },
  },
  tintColor: {
    magenta: {
      a1: {
        blue: palette.magenta.o300,
        green: palette.magenta.o300,
        yellow: palette.magenta.o300,
        red: palette.magenta.o300,
      },
      a2: {
        blue: palette.magenta.o500,
        green: palette.magenta.o500,
        yellow: palette.magenta.o500,
        red: palette.magenta.o500,
      },
      a3: {
        blue: palette.magenta.o700,
        green: palette.magenta.o700,
        yellow: palette.magenta.o700,
        red: palette.magenta.o700,
      },
    },
    cyan: {
      a1: {
        blue: palette.cyan.o300,
        green: palette.cyan.o300,
        yellow: palette.cyan.o300,
        red: palette.cyan.o300,
      },
      a2: {
        blue: palette.cyan.o500,
        green: palette.cyan.o500,
        yellow: palette.cyan.o500,
        red: palette.cyan.o500,
      },
      a3: {
        blue: palette.cyan.o700,
        green: palette.cyan.o700,
        yellow: palette.cyan.o700,
        red: palette.cyan.o700,
      },
    },
    orange: {
      a1: {
        blue: palette.orange.o300,
        green: palette.orange.o300,
        yellow: palette.orange.o300,
        red: palette.orange.o300,
      },
      a2: {
        blue: palette.orange.o500,
        green: palette.orange.o500,
        yellow: palette.orange.o500,
        red: palette.orange.o500,
      },
      a3: {
        blue: palette.orange.o700,
        green: palette.orange.o700,
        yellow: palette.orange.o700,
        red: palette.orange.o700,
      },
    },
    purple: {
      a1: {
        blue: palette.purple.o300,
        green: palette.purple.o300,
        yellow: palette.purple.o300,
        red: palette.purple.o300,
      },
      a2: {
        blue: palette.purple.o500,
        green: palette.purple.o500,
        yellow: palette.purple.o500,
        red: palette.purple.o500,
      },
      a3: {
        blue: palette.purple.o700,
        green: palette.purple.o700,
        yellow: palette.purple.o700,
        red: palette.purple.o700,
      },
    },
    blue: {
      a1: {
        blue: getHexcode(palette.blue.o300, 0.84),
        green: getHexcode(palette.blue.o300, 0.84),
        yellow: getHexcode(palette.blue.o300, 0.84),
        red: getHexcode(palette.blue.o300, 0.84),
      },
      a2: {
        blue: palette.blue.o500,
        green: palette.blue.o500,
        yellow: palette.blue.o500,
        red: palette.blue.o500,
      },
      a3: {
        blue: palette.blue.o700,
        green: palette.blue.o700,
        yellow: palette.blue.o700,
        red: palette.blue.o700,
      },
    },
    red: {
      a1: {
        blue: palette.red.o300,
        green: palette.red.o300,
        yellow: palette.red.o300,
        red: palette.red.o300,
      },
      a2: {
        blue: palette.red.o500,
        green: palette.red.o500,
        yellow: palette.red.o500,
        red: palette.red.o500,
      },
      a3: {
        blue: palette.red.o700,
        green: palette.red.o700,
        yellow: palette.red.o700,
        red: palette.red.o700,
      },
    },
    yellow: {
      a1: {
        blue: palette.yellow.o300,
        green: palette.yellow.o300,
        yellow: palette.yellow.o300,
        red: palette.yellow.o300,
      },
      a2: {
        blue: palette.yellow.o500,
        green: palette.yellow.o500,
        yellow: palette.yellow.o500,
        red: palette.yellow.o500,
      },
      a3: {
        blue: palette.yellow.o700,
        green: palette.yellow.o700,
        yellow: palette.yellow.o700,
        red: palette.yellow.o700,
      },
    },
    green: {
      a1: {
        blue: palette.green.o300,
        green: palette.green.o300,
        yellow: palette.green.o300,
        red: palette.green.o300,
      },
      a2: {
        blue: palette.green.o500,
        green: palette.green.o500,
        yellow: palette.green.o500,
        red: palette.green.o500,
      },
      a3: {
        blue: palette.green.o700,
        green: palette.green.o700,
        yellow: palette.green.o700,
        red: palette.green.o700,
      },
    }
  }
}