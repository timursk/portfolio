import './App.css';
import { ThemeWrapper } from './features/theme/ThemeWrapper';
import { ThemeSwitcher } from './features/theme/ThemeSwitcher';
import styled from '@emotion/styled';

export const App = () => {
  return (
    <ThemeWrapper>
      <ThemeSwitcher />
      <div>
        <StyledTitle>TEST</StyledTitle>;
      </div>
    </ThemeWrapper>
  );
};

const StyledTitle = styled('h1')`
  color: ${(props) => props.theme.colors.primary.contrastText};
`;
