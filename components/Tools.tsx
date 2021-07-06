import useResume from '../lib/useResume';
import { Text } from './Text';
import styles from '../styles/Tools.module.css';

export function Tools() {
  const { tools } = useResume();
  return (
    <div>
      <Text size="sm" weight="semibold">
        Tools
      </Text>
      <ul className={styles.toolList}>
        {tools.map((tool, i) => (
          <li key={i}>
            <Text display="inline-block">{tool}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}
