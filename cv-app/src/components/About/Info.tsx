import styled from '@emotion/styled';

export const Info = () => {
  return (
    <>
      <Title>About</Title>

      <Paragraph>
        Creating adaptive SPA on <Highlited>React</Highlited> & <Highlited>Typescript</Highlited>. I
        love to working with logic and perfomance. Use <Highlited>Redux</Highlited> as a state
        manager. Make Pixel perfect layouts based on Figma. I have experience with refactoring &
        optimization (<Highlited>Memoization</Highlited>, reduce rerenders, custom hooks etc.). Set
        up configs: <Highlited>webpack</Highlited>, linters, cra. Create API based on express.js.
      </Paragraph>
    </>
  );
};

const Title = styled('h2')`
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.primary.dark};
  text-decoration-thickness: 4px;
  text-underline-offset: 2px;
`;

const Paragraph = styled('p')`
  text-align: justify;
`;

const Highlited = styled('span')`
  color: ${(props) => props.theme.colors.primary.dark};
  font-weight: 500;
`;
