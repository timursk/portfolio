import styled from '@emotion/styled';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';

export const Header = () => {
  return (
    <Container>
      <h1>header</h1>
      <div>
        <ThemeSwitcher />
        <DropdownMenu />
      </div>
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
`;
