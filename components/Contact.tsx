import useResume from '../lib/useResume';
import { Text } from './Text';

export function Contact() {
  const { basics } = useResume();
  return (
    <>
      <a href={`https://${basics.website}`}>
        <Text lineHeight="snug">{basics.website}</Text>
      </a>
      <Text lineHeight="snug">{basics.email}</Text>
      {/* <Text lineHeight="snug">{basics.phone}</Text> */}
      <Text lineHeight="snug">
        {basics.location.city}, {basics.location.region}
      </Text>
    </>
  );
}
