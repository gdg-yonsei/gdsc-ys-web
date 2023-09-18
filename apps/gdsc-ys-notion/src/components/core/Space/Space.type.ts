/**
 * ### Space 컴포넌트 props
 */
export interface SpaceProps {
  /**
   * 공간 높이
   *
   * 차지할 공간의 높이를 나타냅니다.
   */
  vertical?: number;

  /**
   * 공간 너비
   *
   * 차지할 공간의 너비를 나타냅니다.
   */
  horizontal?: number;

  /**
   * 배경 색상
   *
   * 공간의 배경 색상을 지정합니다.
   *
   * 기본값은 transparent입니다.
   *
   * @default transparent
   */
  backgroundColor?: string;
}
