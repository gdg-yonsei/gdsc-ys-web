import { CSSProperties } from "react";

/**
 * 구분선 컴포넌트 props
 */
export interface SeparatorProps {
  /**
   * ### 추가 마진
   *
   * 구분선 위 아래에 추가적인 마진을 삽입할 수 있습니다.
   */
  margin?: number;

  /**
   * ### 구분선 종류
   *
   * 구분선 종류를 지정합니다
   *
   * @default solid
   */
  type?: CSSProperties["borderStyle"];

  /**
   * ### 구분선 색깔
   *
   * 구분선 색깔을 지정합니다.
   *
   * HexCode 형태 혹은 rgba 형태로 입력받습니다.
   */
  color?: string;
}
