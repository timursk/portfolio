import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface Props extends PropsWithChildren {
  path: string;
}

export const LinkComponent = ({ path, children }: Props) => {
  return <StyledLink to={path}>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  display: inline-flex;
  width: 100%;
  color: ${(props) => props.theme.colors.secondary.contrastText};
  text-decoration: none;
`;
