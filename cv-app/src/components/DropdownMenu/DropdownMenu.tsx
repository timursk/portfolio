import styled from '@emotion/styled';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { PropsWithChildren } from 'react';

const contentStyles = {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: 'slideDownAndFade' },
      '&[data-side="right"]': { animationName: 'slideLeftAndFade' },
      '&[data-side="bottom"]': { animationName: 'slideUpAndFade' },
      '&[data-side="left"]': { animationName: 'slideRightAndFade' },
    },
  },
};

const StyledContent = styled(DropdownMenuPrimitive.Content)({ ...contentStyles });

const StyledArrow = styled(DropdownMenuPrimitive.Arrow)({ fill: 'white' });

function Content({ children, ...props }: PropsWithChildren<Record<string, unknown>>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
}

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent)({ ...contentStyles });

function SubContent(props: Record<string, unknown>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

// const itemStyles = {
//   all: 'unset',
//   fontSize: 13,
//   lineHeight: 1,
//   //TODO: THEMING COLOR!
//   // color: violet.violet11,
//   color: 'yellow',
//   borderRadius: 3,
//   display: 'flex',
//   alignItems: 'center',
//   height: 25,
//   padding: '0 5px',
//   position: 'relative',
//   paddingLeft: 25,
//   userSelect: 'none',

//   '&[data-disabled]': {
//     // color: mauve.mauve8,
//     color: 'gray',
//     pointerEvents: 'none',
//   },

//   '&[data-highlighted]': {
//     // backgroundColor: violet.violet9,
//     backgroundColor: 'purple',
//     // color: violet.violet1,
//     color: 'green',
//   },
// };

// const StyledItem = styled(DropdownMenuPrimitive.Item)({ ...itemStyles });
// const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem)({ ...itemStyles });
// const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem)({ ...itemStyles });
// const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger)({
//   '&[data-state="open"]': {
//     // backgroundColor: violet.violet4,
//     backgroundColor: 'black',
//     // color: violet.violet11,
//     color: 'blue',
//   },
//   ...itemStyles,
// });

const StyledItem = DropdownMenuPrimitive.Item;
const StyledCheckboxItem = DropdownMenuPrimitive.CheckboxItem;
const StyledRadioItem = DropdownMenuPrimitive.RadioItem;
const StyledSubTrigger = DropdownMenuPrimitive.SubTrigger;

const StyledLabel = styled(DropdownMenuPrimitive.Label)({
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  // color: mauve.mauve11,
  color: 'sandybrown',
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator)({
  height: 1,
  // backgroundColor: violet.violet6,
  backgroundColor: 'violet',
  margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator)({
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubTrigger = StyledSubTrigger;
export const DropdownMenuSubContent = SubContent;

const Box = styled('div')``;

const IconButton = styled('button')({
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  // color: violet.violet11,
  color: 'violet',
  backgroundColor: 'white',
  boxShadow: `0 2px 10px #000`,
  '&:hover': { backgroundColor: 'black' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const DropdownMenuComponent = () => {
  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            <HamburgerMenuIcon />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem>New Tab</DropdownMenuItem>
          <DropdownMenuItem>New Window</DropdownMenuItem>
          <DropdownMenuItem disabled>New Private Window</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
            <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
              <DropdownMenuItem>Save Page As…</DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};
