import styled from '@emotion/styled';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Trigger } from './Trigger';

export const DropdownMenu = () => {
  return (
    <DropdownMenuPrimitive.Root>
      <Trigger />

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content>
          <DropdownMenuPrimitive.Item>1</DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item>2</DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item>3</DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
