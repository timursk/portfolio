// import { DropdownMenu } from './DropdownMenu';

import styled from '@emotion/styled';
import { DropdownMenuComponent } from './DropdownMenu/DropdownMenu';
import { DropdownMenu } from './DropdownMenu/DropdownMenuNew';

export const Header = () => {
  return (
    <Container>
      <h1>header</h1>
      <DropdownMenuComponent />
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
