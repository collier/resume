import type { PropsWithChildren } from 'react';
import styles from '../styles/Section.module.css';

type Props = PropsWithChildren<{
  title: string;
}>;

export function Section({ title, children }: Props) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
