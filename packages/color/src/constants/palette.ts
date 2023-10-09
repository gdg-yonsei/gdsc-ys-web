import { Palette } from '@gdsc-ys-color/types';

/**
 * NOTE: For FE 친구들 ^~^
 *
 * opacity를 기준으로 색깔을 구분했으므로, 앞에 'o'를 붙이고 색상을 작성하면 됩니다. (변수는 숫자로 시작해서는 안되므로 그렇습니다.)
 * 예를 들어, blue의 100번 색깔일 경우
 * @example
 * blue: {
 *    o100: '#FAFAFA',
 * }
 * 식으로 작성하면 됩니다.
 *
 * 팔레트에서 hexcode를 쓸 때는 대문자로 작성해주세요.
 * #FFFFFf(o) #ffffff (x)
 */

export const blue: Palette = {
  o100: '#ECF3FE',
  o200: '#D9E7FD',
  o300: '#B3CEFB',
  o400: '#8AB3F8',
  o500: '#4285F4',
  o600: '#3B78DC',
  o700: '#356AC3',
  o800: '#285092',
  o900: '#1A3562',
  o1000: '#0D1B31',
};

export const red: Palette = {
  o100: '#FDECEB',
  o200: '#FBD9D7',
  o300: '#F7B4AE',
  o400: '#EF7368',
  o500: '#EA4335',
  o600: '#D33C30',
  o700: '#BB362A',
  o800: '#8C2820',
  o900: '#5E1B15',
  o1000: '#2F0D0B',
};

export const yellow: Palette = {
  o100: '#FFF8E6',
  o200: '#FEF2CD',
  o300: '#FDE49B',
  o400: '#FCD04F',
  o500: '#FBBC04',
  o600: '#E2A904',
  o700: '#C99603',
  o800: '#97740A',
  o900: '#644B02',
  o1000: '#322601',
};

export const green: Palette = {
  o100: '#EBF6EE',
  o200: '#D6EEDD',
  o300: '#AEDCBA',
  o400: '#72C287',
  o500: '#34A853',
  o600: '#2F974B',
  o700: '#2A8642',
  o800: '#1F6532',
  o900: '#154321',
  o1000: '#0A2211',
};

export const orange: Palette = {
  o100: '#FDF2EA',
  o200: '#FCE6D5',
  o300: '#F9CDAD',
  o400: '#F6B485',
  o500: '#F39B5B',
  o600: '#F08233',
  o700: '#C06828',
  o800: '#914F1E',
  o900: '#603414',
  o1000: '#311B0A',
};

export const magenta: Palette = {
  o100: '#FDEBF5',
  o200: '#FCD7EC',
  o300: '#F9B1D9',
  o400: '#F68BC6',
  o500: '#F363B3',
  o600: '#F03DA0',
  o700: '#C03080',
  o800: '#912461',
  o900: '#601840',
  o1000: '#310C21',
};

export const purple: Palette = {
  o100: '#F3ECFE',
  o200: '#E8D8FD',
  o300: '#D1B3FB',
  o400: '#BA8EF8',
  o500: '#A368F6',
  o600: '#8C43F4',
  o700: '#7035C3',
  o800: '#552893',
  o900: '#381A62',
  o1000: '#1D0D32',
};

export const cyan: Palette = {
  o100: '#EAFAFD',
  o200: '#D5F6FC',
  o300: '#ADEDF9',
  o400: '#85E4F6',
  o500: '#5BDBF3',
  o600: '#33D2F0',
  o700: '#28A8C0',
  o800: '#1E7F91',
  o900: '#145460',
  o1000: '#0A2B31',
};

export const warmGray: Palette = {
  o100: '#F0EFEF',
  o200: '#E0DFDE',
  o300: '#C3C0BF',
  o400: '#A5A1A0',
  o500: '#86817F',
  o600: '#696360',
  o700: '#534E4C',
  o800: '#3F3B39',
  o900: '#2A2726',
  o1000: '#151413',
};

export const coolGray: Palette = {
  o100: '#EFEFF0',
  o200: '#DEDFE0',
  o300: '#BFC1C3',
  o400: '#A0A2A5',
  o500: '#7F8286',
  o600: '#606469',
  o700: '#4C4F53',
  o800: '#393C3F',
  o900: '#26282A',
  o1000: '#131415',
};

export const palette = {
  blue,
  red,
  yellow,
  green,
  orange,
  magenta,
  purple,
  cyan,
  warmGray,
  coolGray,
};
