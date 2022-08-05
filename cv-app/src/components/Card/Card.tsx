import styled from '@emotion/styled';
import { Root as AspectRatioRoot } from '@radix-ui/react-aspect-ratio';
import { Link } from 'react-router-dom';
import { StyledContainer } from './StyledContainer';

interface Props {
  img: string;
  alt: string;
  description: string;
  link: string;
  ratio?: number;
}

const DEFAULT_RATIO = 16 / 9;

export const Card = ({ img, alt, description, link, ratio = DEFAULT_RATIO }: Props) => {
  return (
    <StyledLink to={`${link}`}>
      <StyledContainer content={alt}>
        <AspectRatioRoot ratio={ratio}>
          <Img src={img} alt={alt} />
        </AspectRatioRoot>
      </StyledContainer>

      <h3>{alt}</h3>
      <p>{description}</p>
    </StyledLink>
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

const StyledLink = styled(Link)`
  all: unset;
`;
