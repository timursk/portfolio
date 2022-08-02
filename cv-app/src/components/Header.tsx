import styled from '@emotion/styled';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';

export const Header = () => {
  return (
    <Container>
      <h1>header</h1>

      <DropdownMenu />
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
`;
