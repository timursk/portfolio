import './App.css';
import { ThemeWrapper } from './features/theme/ThemeWrapper';
import styled from '@emotion/styled';
import { Header } from './components/Header';

export const App = () => {
  return (
    <ThemeWrapper>
      <Main>
        <Container>
          <Header />
        </Container>
      </Main>
    </ThemeWrapper>
  );
};

const Main = styled('main')`
  background-color: ${(props) => props.theme.colors.primary.main};
  min-height: 100vh;
`;

const Container = styled('div')`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;
