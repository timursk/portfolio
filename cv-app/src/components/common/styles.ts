import styled from '@emotion/styled';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStyledButtonContainer = (elem: any) => styled(elem)`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary.dark};
  background-color: ${(props) => props.theme.colors.secondary.light};
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.main};
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;
