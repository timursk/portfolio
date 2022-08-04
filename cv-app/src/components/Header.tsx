import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';

export const Header = () => {
  return (
    <Container>
      <Title>
        <StyledSpan>🤖</StyledSpan> Timur Salikhov
      </Title>

      <BtnsContainer>
        <ThemeSwitcher />
        <DropdownMenu />
      </BtnsContainer>
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
`;

const slideUpAndDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Title = styled('h2')`
  position: relative;
  margin: 0;
  user-select: none;

  &:hover span {
    animation-name: ${slideUpAndDown};
  }
`;

const StyledSpan = styled('span')`
  display: inline-block;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
  transition: 0.2s;
`;

const BtnsContainer = styled('div')`
  display: flex;
  gap: 5px;
`;
