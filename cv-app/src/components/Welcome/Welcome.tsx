import styled from '@emotion/styled';
import { Greetings } from '../common/Greetings';
import { Avatar } from './Avatar';
import { Title } from './Title';

export const Welcome = () => {
  return (
    <>
      <Greetings>Hello, I&apos;m an frontend developer with a focus on React!</Greetings>

      <Container>
        <Title />

        <Avatar />
      </Container>
    </>
  );
};

const Container = styled('div')`
  margin-bottom: 15px;
  @media (min-width: 640px) {
    display: flex;
  }
`;
