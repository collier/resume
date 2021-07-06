import useResume from '../lib/useResume';
import type { Project, Work, Role } from '../lib/Resume';
import { Section } from './Section';
import { Text } from './Text';
import { BulletList } from './BulletList';
import styles from '../styles/WorkExperience.module.css';

export function WorkExperience() {
  const { work } = useResume();
  return (
    <Section title="Work Experience">
      <ul className={styles.workList}>
        {work.map((workEntry, i) => (
          <li key={i}>
            <WorkEntry work={workEntry} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

type WorkEntryProps = {
  work: Work;
};

function WorkEntry({ work }: WorkEntryProps) {
  const {
    company,
    position,
    startDate,
    endDate,
    location,
    details,
    projects,
    webAddress,
  } = work;
  return (
    <>
      <div className={styles.workHeader}>
        <Text size="5xl" lineHeight="snug">
          <span className={styles.workTitle}>
            <span className={styles.company}>{company}</span>
            <span>/</span>
            <span>{position}</span>
          </span>
        </Text>
        <Text size="lg" style="muted" lineHeight="snug">
          {startDate} - {endDate} · {location} ·{' '}
          <span className={styles.webAddress}>{webAddress}</span>
        </Text>
      </div>
      <BulletList items={details} />
      {projects && (
        <div className={styles.projectsContainer}>
          <Text style="muted" size="lg">
            Recent Projects
          </Text>
          <ProjectList projects={projects} />
        </div>
      )}
    </>
  );
}

type ProjectListProps = {
  projects: Project[];
};

const ProjectList = ({ projects }: ProjectListProps) => (
  <ul className={styles.projectList}>
    {projects.map(({ client, details, startDate, endDate }, i) => (
      <li key={i}>
        <h4 className={styles.projectTitle}>
          <Text size="lg" weight="semibold">
            {client}
          </Text>
          <Text size="lg">·</Text>
          <Text size="lg" style="muted">
            {startDate} - {endDate}
          </Text>
        </h4>
        <BulletList items={details} />
      </li>
    ))}
  </ul>
);
