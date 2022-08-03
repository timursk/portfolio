import styled from '@emotion/styled';
import { Root, Image, Fallback } from '@radix-ui/react-avatar';
import avatarImg from '../../assets/avatar.jpg';

export const Avatar = () => {
  return (
    <Container>
      <StyledImage src={avatarImg} alt="Timur avatar" />

      <StyledFallback delayMs={400}>TS</StyledFallback>
    </Container>
  );
};

const Container = styled(Root)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  outline: 2px solid ${(props) => props.theme.colors.primary.dark};
  border-radius: 100%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const StyledFallback = styled(Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
`;
