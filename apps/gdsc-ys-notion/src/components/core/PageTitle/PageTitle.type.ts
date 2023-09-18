/**
 * ### PageTitle 컴포넌트 props
 */
export interface PageTitleProps {
  /**
   * 주요 표시할 label입니다.
   */
  label?: string;

  /**
   * label의 색상입니다.
   *
   * HexCode 형태 혹은 rgba 형태로 입력받습니다.
   *
   * @default white(#FFFFFF)
   */
  labelColor?: string;
}
