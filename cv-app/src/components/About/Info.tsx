import { SectionHighlited as Highlited, SectionParagraph, SectionTitle } from '../common/styles';

export const Info = () => {
  return (
    <>
      <SectionTitle>About</SectionTitle>

      <SectionParagraph>
        Creating adaptive SPA on <Highlited>React</Highlited> & <Highlited>Typescript</Highlited>. I
        love to working with logic and perfomance. Use <Highlited>Redux</Highlited> as a state
        manager. Make Pixel perfect layouts based on Figma. I have experience with refactoring &
        optimization (<Highlited>Memoization</Highlited>, reduce rerenders, custom hooks etc.). Set
        up configs: <Highlited>webpack</Highlited>, linters, cra. Create API based on express.js.
      </SectionParagraph>
    </>
  );
};
