import { useContext } from 'react';
import ResumeContext from './ResumeContext';
import type { Resume } from './Resume';

export default function useResume(): Resume {
  return useContext(ResumeContext);
}
