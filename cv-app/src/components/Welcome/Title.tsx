import styled from '@emotion/styled';

export const Title = () => {
  return (
    <TitleContainer>
      <StyledTitle>Timur Salikhov</StyledTitle>
      <StyledSubtitle>Developer on React / Redux. Also use TypeScript.</StyledSubtitle>
    </TitleContainer>
  );
};

const TitleContainer = styled('div')`
  flex-grow: 1;
`;

const StyledTitle = styled('h1')`
  margin-bottom: 5px;
`;

const StyledSubtitle = styled('p')`
  margin-bottom: 15px;
`;
