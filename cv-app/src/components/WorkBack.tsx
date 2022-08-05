import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
}

export const WorkBack = ({ name }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Link onClick={() => navigate(-1)}>Back</Link>
      <span>{' / '}</span>
      <span>{name}</span>
    </Container>
  );
};

const Container = styled('div')`
  margin-bottom: 10px;
`;

const Link = styled('span')`
  text-decoration: underline;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary.dark};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.secondary.contrastText};
  }
`;
