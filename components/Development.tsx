import useResume from '../lib/useResume';
import { Text } from './Text';
import styles from '../styles/Development.module.css';

export function Development() {
  const { technology } = useResume();
  const { expert, proficient } = technology;
  return (
    <div>
      <Text size="sm" weight="semibold">
        Development
      </Text>
      <div className={styles.listsContainer}>
        <div className={styles.list}>
          <Text size="sm" weight="semibold" style="muted">
            Expert
          </Text>
          <ul>
            {expert.map((expertTech, i) => (
              <li key={i}>
                <Text>{expertTech}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list}>
          <Text size="sm" weight="semibold" style="muted">
            Proficient
          </Text>
          <ul>
            {proficient.map((proficientTech, i) => (
              <li key={i}>
                <Text>{proficientTech}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
