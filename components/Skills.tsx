import { Design, Section, Development, Tools } from '../components';
import styles from '../styles/Skills.module.css';

export function Skills() {
  return (
    <Section title="Skills">
      <div className={styles.skillsContainer}>
        <Development />
        <Design />
        <Tools />
      </div>
    </Section>
  );
}
