import styled from '@emotion/styled';
import { Root as AspectRatioRoot } from '@radix-ui/react-aspect-ratio';
import { StyledContainer } from './StyledContainer';

interface Props {
  img: string;
  alt: string;
  description: string;
  ratio?: number;
}

const DEFAULT_RATIO = 16 / 9;

export const Card = ({ img, alt, description, ratio = DEFAULT_RATIO }: Props) => {
  const handleClick = () => {
    document.location.href = 'https://github.com/timursk/rslang';
  };

  return (
    <div onClick={handleClick}>
      <StyledContainer content={alt}>
        <AspectRatioRoot ratio={ratio}>
          <Img src={img} alt={alt} />
        </AspectRatioRoot>
      </StyledContainer>

      <h3>{alt}</h3>
      <p>{description}</p>
    </div>
  );
};

const Img = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover,
  &:focus {
    filter: brightness(0.5);
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
`;
