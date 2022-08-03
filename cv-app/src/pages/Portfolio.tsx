import styled from '@emotion/styled';
import { Card } from '../components/Card/Card';
import { Greetings } from '../components/common/Greetings';
import { SectionHighlited, SectionTitle, StyledSection } from '../components/common/styles';
import rslang from '../assets/rslang4.png';
import pma from '../assets/pma4.png';
import rick from '../assets/rick1.png';
import christmas from '../assets/christmas.png';

const CARDS = [
  { img: pma, alt: 'Project management app', description: 'Kanban board' },
  { img: rslang, alt: 'Rslang', description: 'English learning app' },
  { img: christmas, alt: 'Christmas tree', description: 'Interactive game' },
  { img: rick, alt: 'Rick-Morty', description: 'List of heroes' },
];

export const Portfolio = () => {
  return (
    <>
      <Greetings>
        List of my pet projects! It&apos;s <SectionHighlited>clickable</SectionHighlited>
      </Greetings>

      <StyledSection>
        <SectionTitle>Works</SectionTitle>

        <StyledCardContainer>
          {CARDS.map(({ img, alt, description }, idx) => (
            <Card key={idx} img={img} alt={alt} description={description} />
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
