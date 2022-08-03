import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href: string;
}

export const LinkItem = ({ children, href }: Props) => {
  return (
    <ListItem>
      <StyledLink href={href} target="_blank" rel="noreferrer">
        <StyledButton>{children}</StyledButton>
      </StyledLink>
    </ListItem>
  );
};

const ListItem = styled('li')`
  width: fit-content;
  margin: 5px 0;
`;

const StyledLink = styled('a')`
  color: ${(props) => props.theme.colors.secondary.dark};
  text-decoration: none;
`;

const StyledButton = styled('button')`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.primary.light};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;
