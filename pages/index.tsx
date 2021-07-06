import { getResumeData, Resume } from '../lib/Resume';
import ResumeContext from '../lib/ResumeContext';

import {
  Clearance,
  Contact,
  Education,
  Introduction,
  Skills,
  WorkExperience,
} from '../components';

import styles from '../styles/ResumePage.module.css';

type Props = {
  resume: Resume;
};

export default function ResumePage({ resume }: Props) {
  return (
    <ResumeContext.Provider value={resume}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <Introduction />
        </div>
        <div className={styles.contact}>
          <Contact />
        </div>
        <div className={styles.main}>
          <WorkExperience />
        </div>
        <div className={styles.side}>
          <Education />
          <Skills />
          <Clearance />
        </div>
      </div>
    </ResumeContext.Provider>
  );
}

export function getStaticProps() {
  const resume = getResumeData();
  return {
    props: {
      resume,
    },
  };
}
