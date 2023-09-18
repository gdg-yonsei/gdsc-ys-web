import { CSSProperties, ReactNode } from "react";

/**
 * ### 콜아웃 컴포넌트 Props
 */
export interface CalloutProps {
  /**
   * ### 왼쪽 Emoji
   *
   * 왼쪽에 삽입할 Emoji를 string 형태로 넣습니다.
   *
   * 기본값은 "🤔"입니다.
   *
   * @default "🤔"
   */
  leftLabel?: string;

  /**
   * ### 오른쪽 컴포넌트
   *
   * 오른쪽에 직접 컴포넌트를 삽입할 수 있습니다.
   *
   * 해당 컴포넌트를 삽입할 경우 rightLabel과 그 속성은 무시됩니다.
   */
  right?: ReactNode;

  /**
   * ### 오른쪽 label
   *
   * 콜아웃의 오른쪽에 삽입할 label입니다.
   */
  rightLabel?: string;

  /**
   * ### 오른쪽 label 스타일
   *
   * 콜아웃의 오른쪽 label에 스타일을 넣을 수 있습니다.
   *
   * 해당 스타일을 넣을 경우, 기본 스타일을 덮습니다.
   */
  rightLabelStyle?: CSSProperties;

  /**
   * ### 오른쪽 label 볼드 여부
   *
   * 콜아웃의 오른쪽 label에 볼드를 넣을 수 있습니다.
   *
   * 기본값은 false입니다.
   *
   * @default false
   */
  bold?: boolean;

  /**
   * ### 오른쪽 label 밑줄 여부
   *
   * 콜아웃의 오른쪽 label에 밑줄을 넣을 수 있습니다.
   *
   * 기본값은 false입니다.
   *
   * @default false
   */
  underline?: boolean;

  /**
   * ### 오른쪽 label 취소선 추가 여부
   *
   * 콜아웃의 오른쪽 label에 취소선을 넣을 수 있습니다.
   *
   * 기본값은 false입니다.
   *
   * @default false
   */
  strikeThrough?: boolean;
}
