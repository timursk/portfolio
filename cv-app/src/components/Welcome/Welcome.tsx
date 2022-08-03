import styled from '@emotion/styled';
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

const Greetings = styled('div')`
  width: 100%;
  padding: 10px 30px;
  margin-bottom: 15px;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.primary.light};
  text-align: center;
`;

const Container = styled('div')`
  margin-bottom: 15px;
  @media (min-width: 640px) {
    display: flex;
  }
`;
