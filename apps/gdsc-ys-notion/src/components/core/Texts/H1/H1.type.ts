import { CSSProperties } from "react";

/**
 * ### H1 컴포넌트 props
 */
export interface H1Props {
  /**
   * 주요 표시할 label입니다.
   */
  label?: string;

  /**
   * label의 색상입니다.
   *
   * HexCode 형태 혹은 rgba 형태로 입력받습니다.
   */
  labelColor?: string;

  /**
   * ### 밑줄 여부
   *
   * 해당 label 밑줄 여부입니다.
   *
   * 기본값은 false입니다.
   *
   * @default false
   */
  underline?: boolean;

  /**
   * ### 취소선 여부
   *
   * 해당 label 취소선 여부입니다.
   *
   * 기본값은 false입니다.
   *
   * @default false
   */
  strikeThrough?: boolean;

  /**
   * ### 이탤릭체 여부
   *
   * 해당 label 이탤릭체 여부입니다.
   *
   * 기본값은 false입니다.
   *
   * @default false
   */
  italic?: boolean;

  /**
   * label을 감싸는 container의 색상입니다.
   *
   * HexCode 형태 혹은 rgba 형태로 입력받습니다.
   */
  containerColor?: string;

  /**
   * label을 감싸는 container에 추가로 적용할 스타일입니다.
   *
   * 해당 스타일은 다른 props와 스타일을 덮습니다.
   */
  containerStyle?: CSSProperties;
}
