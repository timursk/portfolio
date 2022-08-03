import './App.css';
import { ThemeWrapper } from './features/theme/ThemeWrapper';
import styled from '@emotion/styled';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { ROUTES } from './common/utils/constants';
import { Portfolio } from './pages/Portfolio';

export const App = () => {
  return (
    <ThemeWrapper>
      <StyledMain>
        <Container>
          <Header />

          <Routes>
            <Route path={ROUTES.MAIN} element={<Main />} />
            <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
          </Routes>
        </Container>
      </StyledMain>
    </ThemeWrapper>
  );
};

const StyledMain = styled('main')`
  color: ${(props) => props.theme.colors.primary.contrastText};
  background-color: ${(props) => props.theme.colors.primary.main};
  min-height: 100vh;
`;

const Container = styled('div')`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 15px;
`;
