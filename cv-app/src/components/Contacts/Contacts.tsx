import styled from '@emotion/styled';
import { StyledSection } from '../common/styles';
import { SectionTitle } from '../common/styles';
import { GitHubLogoIcon, LinkedInLogoIcon, Link2Icon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { LinkItem } from './LinkItem';

export const Contacts = () => {
  return (
    <Container>
      <SectionTitle>Contacts</SectionTitle>

      <StyledList>
        <LinkItem href="https://github.com/timursk">
          <GitHubLogoIcon />
          <span>@timursk</span>
        </LinkItem>

        <LinkItem href="https://t.me/timurskk/">
          <PaperPlaneIcon />
          <span>Telegram</span>
        </LinkItem>

        <LinkItem href="https://www.linkedin.com/in/timur-salikhov-2236a621a/">
          <LinkedInLogoIcon />
          <span>Timur Salikhov</span>
        </LinkItem>

        <LinkItem href="https://t.me/timurskk/">
          <Link2Icon />
          <span>CV</span>
        </LinkItem>
      </StyledList>
    </Container>
  );
};

const Container = StyledSection;

const StyledList = styled('ul')`
  padding: 0;
  list-style: none;
`;
