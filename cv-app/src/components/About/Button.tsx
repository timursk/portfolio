import styled from '@emotion/styled';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export const Button = () => {
  return (
    <StyledButton>
      My portfolio <ChevronRightIcon />
    </StyledButton>
  );
};

const StyledButton = styled('button')`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  height: 25px;
  padding: 5px 15px;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.colors.secondary.main};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.secondary.contrastText};
  background: ${(props) => props.theme.colors.secondary.light};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.secondary.main};
    border-color: ${(props) => props.theme.colors.secondary.dark};
  }
`;
