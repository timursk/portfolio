import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Portal, Content as ContentPrimitive, Arrow } from '@radix-ui/react-dropdown-menu';
import { FC, PropsWithChildren } from 'react';

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Portal>
      <ContentContainer>
        {children}
        <StyledArrow />
      </ContentContainer>
    </Portal>
  );
};

const slideUpAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDownAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContentContainer = styled(ContentPrimitive)`
  min-width: 150px;
  padding: 10px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.primary.light};
  box-shadow: 0px 10px 38px -10px rgb(22 23 24 / 35%), 0px 10px 10px -15px rgb(22 23 24 / 20%);

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='open'] {
    &[data-side='top'] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side='right'] {
      animation-name: ${slideLeftAndFade};
    }
    &[data-side='bottom'] {
      animation-name: ${slideUpAndFade};
    }
    &[data-side='left'] {
      animation-name: ${slideRightAndFade};
    }
  }
`;

const StyledArrow = styled(Arrow)(({ theme }) => ({ fill: theme.colors.primary.light }));
