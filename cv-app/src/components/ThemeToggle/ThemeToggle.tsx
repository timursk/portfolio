import { Root } from '@radix-ui/react-toggle';
import { THEMES } from '../../features/theme/ThemeSwitcher';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { getStyledButtonContainer } from '../common/styles';

interface Props {
  theme: THEMES;
  onChange: () => void;
}

export const ThemeToggle = ({ theme, onChange }: Props) => {
  const ThemeIcon = theme === THEMES.LIGHT ? SunIcon : MoonIcon;

  return (
    <ToggleContainer onPressedChange={onChange}>
      <ThemeIcon />
    </ToggleContainer>
  );
};

const ToggleContainer = getStyledButtonContainer(Root);
