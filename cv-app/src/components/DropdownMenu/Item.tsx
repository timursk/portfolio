import styled from '@emotion/styled';
import { Item as ItemPrimitive } from '@radix-ui/react-dropdown-menu';
import { ROUTES } from '../../common/constants/common';
import { LinkComponent } from '../LinkComponent';

interface Props {
  title: string;
  path: ROUTES;
  link?: string;
}

export const Item = ({ title, path, link }: Props) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <StyledItem onClick={link ? handleClick : null}>
      <LinkComponent path={path}>
        <StyledSpan>{title}</StyledSpan>
      </LinkComponent>
    </StyledItem>
  );
};

const StyledItem = styled(ItemPrimitive)`
  border-radius: 3px;
  font-size: 1.1rem;
  cursor: pointer;
  user-select: none;

  &[data-disabled] {
    color: ${(props) => props.theme.colors.primary.dark};
    pointer-events: none;
  }

  &[data-highlighted=''] {
    background-color: ${(props) => props.theme.colors.secondary.main};
  }
`;

const StyledSpan = styled('span')`
  padding: 7px;
`;
