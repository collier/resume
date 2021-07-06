import useResume from '../lib/useResume';
import styles from '../styles/Clearance.module.css';
import { Section } from './Section';
import { Text } from './Text';

export function Clearance() {
  const { clearanceLevel } = useResume();
  return (
    <Section title="US Security Clearance">
      <Text size="4xl" weight="bold" lineHeight="snug">
        {clearanceLevel}
      </Text>
    </Section>
  );
}
