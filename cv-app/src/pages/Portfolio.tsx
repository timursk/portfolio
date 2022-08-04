import styled from '@emotion/styled';
import { CARDS } from '../common/constants/cards';
import { Card } from '../components/Card/Card';
import { Greetings } from '../components/common/Greetings';
import { SectionHighlited, SectionTitle, StyledSection } from '../components/common/styles';

export const Portfolio = () => {
  return (
    <>
      <Greetings>
        List of my pet projects! It&apos;s <SectionHighlited>clickable</SectionHighlited>
      </Greetings>

      <StyledSection>
        <SectionTitle>Works</SectionTitle>

        <StyledCardContainer>
          {CARDS.map(({ img, alt, description, link }, idx) => (
            <Card key={idx} img={img} alt={alt} description={description} link={link} />
          ))}
        </StyledCardContainer>
      </StyledSection>
    </>
  );
};

const StyledCardContainer = styled('div')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin: 10px auto 0;
  flex-wrap: wrap;
`;
