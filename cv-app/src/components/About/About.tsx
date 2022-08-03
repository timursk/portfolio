import { Info } from './Info';
import { Button } from './Button';
import { StyledSection } from '../common/styles';

export const About = () => {
  return (
    <Container>
      <Info />

      <Button />
    </Container>
  );
};

const Container = StyledSection;
