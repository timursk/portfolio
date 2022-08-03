import './App.css';
import { ThemeWrapper } from './features/theme/ThemeWrapper';
import styled from '@emotion/styled';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome/Welcome';
import { About } from './components/About/About';

export const App = () => {
  return (
    <ThemeWrapper>
      <Main>
        <Container>
          <Header />
          <Welcome />
          <About />
        </Container>
      </Main>
    </ThemeWrapper>
  );
};

const Main = styled('main')`
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
