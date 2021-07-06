import useResume from '../lib/useResume';
import { Text } from './Text';
import styles from '../styles/Development.module.css';

export function Development() {
  const { technology } = useResume();
  const { advanced, intermediate } = technology;
  return (
    <div>
      <Text size="sm" weight="semibold">
        Development
      </Text>
      <div className={styles.listsContainer}>
        <div className={styles.list}>
          <Text size="sm" weight="semibold" style="muted">
            Advanced
          </Text>
          <ul>
            {advanced.map((advancedTech, i) => (
              <li key={i}>
                <Text>{advancedTech}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list}>
          <Text size="sm" weight="semibold" style="muted">
            Intermediate
          </Text>
          <ul>
            {intermediate.map((intermediateTech, i) => (
              <li key={i}>
                <Text>{intermediateTech}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
