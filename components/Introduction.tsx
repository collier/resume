import useResume from '../lib/useResume';
import { Text } from './Text';
import styles from '../styles/Introduction.module.css';

export function Introduction() {
  const { basics } = useResume();
  return (
    <div>
      <h1 className={styles.name}>{basics.name}</h1>
      <Text lineHeight="snug">{basics.summary}</Text>
    </div>
  );
}
