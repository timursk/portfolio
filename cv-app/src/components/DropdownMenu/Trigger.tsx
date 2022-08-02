import { Trigger as TriggerContainer } from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { getStyledButtonContainer } from '../common/styles';

export const Trigger = () => {
  return (
    <TriggerContainer asChild>
      <IconButton>
        <HamburgerMenuIcon />
      </IconButton>
    </TriggerContainer>
  );
};

const IconButton = getStyledButtonContainer('button');
