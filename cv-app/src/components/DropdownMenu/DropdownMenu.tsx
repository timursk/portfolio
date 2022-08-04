import { Root as DropdownContainer } from '@radix-ui/react-dropdown-menu';
import { ROUTES } from '../../common/constants/common';
import { Content } from './Content';
import { Item } from './Item';
import { Trigger } from './Trigger';

const MENU_ITEMS = [
  { title: 'About', path: ROUTES.MAIN },
  { title: 'Works', path: ROUTES.PORTFOLIO },
  { title: 'View Source', path: ROUTES.PORTFOLIO, link: 'https://github.com/timursk/portfolio' },
];

export const DropdownMenu = () => {
  return (
    <DropdownContainer>
      <Trigger />

      <Content>
        {MENU_ITEMS.map(({ title, path, link }, idx) => (
          <Item key={idx} title={title} path={path} link={link} />
        ))}
      </Content>
    </DropdownContainer>
  );
};
