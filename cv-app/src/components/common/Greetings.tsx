import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export const Greetings = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

const Container = styled('div')`
  width: 100%;
  padding: 10px 30px;
  margin-bottom: 15px;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.primary.light};
  text-align: center;
`;
