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
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.main};
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledSection = styled('section')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled('h2')`
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.primary.dark};
  text-decoration-thickness: 4px;
  text-underline-offset: 2px;
`;

export const SectionParagraph = styled('p')`
  text-align: justify;
`;

export const SectionHighlited = styled('span')`
  // color: ${(props) => props.theme.colors.primary.dark};
  color: ${(props) => props.theme.colors.secondary.dark};
  font-weight: 500;
`;
