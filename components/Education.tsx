import useResume from '../lib/useResume';
import { Section } from './Section';
import { Text } from './Text';
import styles from '../styles/Education.module.css';

export function Education() {
  const { education } = useResume();
  const {
    institution,
    area,
    majors,
    studyType,
    startDate,
    endDate,
    courses,
    location,
  } = education[0];
  return (
    <Section title="Education">
      <h3>
        <Text size="4xl" weight="bold">
          {institution}
        </Text>
      </h3>
      <Text size="3xl" lineHeight="tight">
        {studyType} {area}
      </Text>
      <Text style="muted" size="xl">
        {startDate} - {endDate} · {location}
      </Text>
    </Section>
  );
}
