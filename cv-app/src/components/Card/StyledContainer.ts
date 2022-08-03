import styled from '@emotion/styled';

type ContainerProps = {
  content: string;
};

export const StyledContainer = styled('div')<ContainerProps>`
  position: relative;
  min-width: 300px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;
  user-select: none;

  &:hover::after {
    content: '${(props) => props.content}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    pointer-events: none;
    color: white;
  }
`;
