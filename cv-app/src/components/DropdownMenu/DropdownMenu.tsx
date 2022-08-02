import { Root as DropdownContainer } from '@radix-ui/react-dropdown-menu';
import { Content } from './Content';
import { Item } from './Item';
import { Trigger } from './Trigger';

const MENU_ITEMS = ['About', 'Works', 'View Source'];

export const DropdownMenu = () => {
  return (
    <DropdownContainer>
      <Trigger />

      <Content>
        {MENU_ITEMS.map((title, idx) => (
          <Item key={idx} title={title} />
        ))}
      </Content>
    </DropdownContainer>
  );
};
