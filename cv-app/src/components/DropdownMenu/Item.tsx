import styled from '@emotion/styled';
import { Item as ItemPrimitive } from '@radix-ui/react-dropdown-menu';

interface Props {
  title: string;
}

export const Item = ({ title }: Props) => {
  return (
    <StyledItem>
      <StyledLink href="/">{title}</StyledLink>
    </StyledItem>
  );
};

const StyledItem = styled(ItemPrimitive)`
  padding: 7px;
  border-radius: 3px;
  font-size: 1.1rem;
  cursor: pointer;
  user-select: none;

  &[data-disabled] {
    color: ${(props) => props.theme.colors.primary.dark};
    pointer-events: none;
  }

  &[data-highlighted=''] {
    // color: ${(props) => props.theme.colors.primary.dark};
    // background-color: ${(props) => props.theme.colors.primary.dark};
    background-color: ${(props) => props.theme.colors.secondary.main};
  }
`;

const StyledLink = styled('a')`
  color: ${(props) => props.theme.colors.primary.contrastText};
  text-decoration: none;
  user-select: none;
`;
