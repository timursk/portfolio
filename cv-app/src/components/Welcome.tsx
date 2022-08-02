import styled from '@emotion/styled';

export const Welcome = () => {
  return <Container>Hello, I&apos;m an frontend developer with a focus on React!</Container>;
};

const Container = styled('div')`
  width: 100%;
  padding: 10px 30px;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.primary.light};
  text-align: center;
`;
