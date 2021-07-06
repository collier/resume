import useResume from '../lib/useResume';
import { Text } from './Text';

export function Design() {
  const { design } = useResume();
  return (
    <div>
      <Text size="sm" weight="semibold">
        Design
      </Text>
      <ul>
        {design.map((designSkill, i) => (
          <li key={i}>
            <Text>{designSkill}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}
