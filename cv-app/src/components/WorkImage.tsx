import styled from '@emotion/styled';
import { Root as AspectRatioRoot } from '@radix-ui/react-aspect-ratio';

interface Props {
  image: string;
  name: string;
}

const RATIO = 16 / 10;

export const WorkImage = ({ image, name }: Props) => {
  return (
    <Container>
      <AspectRatioRoot ratio={RATIO}>
        <Img src={image} alt={name} />
      </AspectRatioRoot>
    </Container>
  );
};

const Img = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled('div')`
  margin-bottom: 10px;
  border-radius: 1em;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 10px;
  }
`;
