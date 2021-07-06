import { Text, TextFormatProps } from './Text';
import styles from '../styles/BulletList.module.css';

type Props = TextFormatProps & {
  items: string[];
};

export function BulletList({ items, ...textProps }: Props) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i}>
          <Text {...textProps}>{item}</Text>
        </li>
      ))}
    </ul>
  );
}
