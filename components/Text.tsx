import type { PropsWithChildren } from 'react';
import classnames from 'classnames/bind';
import styles from '../styles/Text.module.css';

const cx = classnames.bind(styles);

export type TextFormatProps = {
  underlined?: boolean;
  size?: 'sm' | 'normal' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  style?: 'normal' | 'muted';
  weight?: 'normal' | 'semibold' | 'bold';
  display?: 'block' | 'inline-block';
  lineHeight?: 'tight' | 'snug' | 'normal' | 'relaxed'; // https://tailwindcss.com/docs/line-height
};

export type Props = PropsWithChildren<TextFormatProps>;

export function Text({
  underlined = false,
  size = 'normal',
  style = 'normal',
  weight = 'normal',
  display = 'block',
  lineHeight = 'normal',
  children,
}: Props) {
  const className = cx({
    underlined: underlined,
    [`size-${size}`]: size !== 'normal',
    [`style-${style}`]: style !== 'normal',
    [`weight-${weight}`]: weight !== 'normal',
    [`display-${display}`]: display !== 'block',
    [`line-height-${lineHeight}`]: lineHeight !== 'normal',
  });
  return <p className={className}>{children}</p>;
}
