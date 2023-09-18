export interface BlockContainerProps {
  $containerColor?: string;
}

export interface ContentProps {
  $labelColor?: string;
  $resolvedTheme?: string;
}

export interface TextContentProps extends ContentProps {
  $bold?: boolean;
  $underline?: boolean;
  $strikeThrough?: boolean;
  $italic?: boolean;
}
