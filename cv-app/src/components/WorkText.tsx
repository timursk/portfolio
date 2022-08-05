import styled from '@emotion/styled';

interface Props {
  title: string;
  text: string;
  link?: boolean;
}

export const WorkText = ({ title, text, link }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>

      <span>
        {link ? (
          <a href={`https://github.com/timursk/${text}`} target="_blank" rel="noreferrer">
            {text}
          </a>
        ) : (
          text
        )}
      </span>
    </Container>
  );
};

const Container = styled('div')`
  margin-bottom: 10px;
`;

const Title = styled('span')`
  margin-right: 10px;
  padding: 2px 5px;
  background: ${(props) => props.theme.colors.secondary.light};
  font-weight: 500;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
`;
