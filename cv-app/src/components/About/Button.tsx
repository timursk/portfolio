import styled from '@emotion/styled';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { ROUTES } from '../../common/constants/common';
import { LinkComponent } from '../LinkComponent';

export const Button = () => {
  return (
    <LinkComponent path={ROUTES.PORTFOLIO}>
      <StyledButton>
        My portfolio <ChevronRightIcon />
      </StyledButton>
    </LinkComponent>
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
  background: ${(props) => props.theme.colors.secondary.light};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.secondary.main};
    border-color: ${(props) => props.theme.colors.secondary.dark};
  }
`;
