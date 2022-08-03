import styled from '@emotion/styled';
import { Info } from './Info';
import { Button } from './Button';

export const About = () => {
  return (
    <Container>
      <Info />

      <Button />
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;
