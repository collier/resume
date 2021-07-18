import useResume from '../lib/useResume';
import { Text } from './Text';

export function Contact() {
  const { basics } = useResume();
  const { email, phone, website, githubUser } = basics;
  return (
    <>
      <Text lineHeight="snug">{email}</Text>
      <Text lineHeight="snug">{phone}</Text>
      <a href={`https://${website}`}>
        <Text lineHeight="snug">{website}</Text>
      </a>
      <a href={`https://github.com/${githubUser}`}>
        <Text lineHeight="snug">{`github.com/${githubUser}`}</Text>
      </a>
    </>
  );
}
