'use client';
import { Box, Typography } from '@mui/material';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useSpring, animated } from '@react-spring/web';

import { useAppContext } from '@contexts/app-context';
import { useThemeContext } from '@contexts/theme-context';
import AppIcon from '@assets/icons/app';
import _styles from './styles';
import ThemeSwitch from '@components/theme/theme-switch';
import { themeName } from '@app-types/theme-context';

const DrawerItem = ({
  icon,
  label,
  isSelected,
}: {
  icon: JSX.Element;
  label: string;
  isSelected: boolean;
}) => {
  const { showDrawer } = useAppContext();
  const { theme } = useThemeContext();
  const styles = _styles(theme.palette.mode).drawer;

  return (
    <Box sx={styles.item}>
      <Box
        sx={[
          { width: '100%' },
          isSelected && styles.itemIconWrapper,
          !isSelected && styles.itemIconWrapperNotSelected,
        ]}
      >
        <Box sx={[{ display: 'flex' }, showDrawer && styles.itemShow]}>
          {icon}
          {showDrawer && <Typography sx={styles.label}>{label}</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

const Drawer = () => {
  const { showDrawer, handleShowDrawer } = useAppContext();
  const { theme, toggleTheme } = useThemeContext();
  const styles = _styles(theme.palette.mode).drawer;
  const props = useSpring({
    width: showDrawer ? styles.open.width : styles.close.width,
  });

  const AnimatedDrawer = animated(Box);

  return (
    <Box sx={styles.wrapper}>
      <AnimatedDrawer
        style={props}
        onClick={() => handleShowDrawer(!showDrawer)}
      >
        <Box sx={styles.appIconWrapper}>
          <Box sx={styles.icon}>
            <AppIcon />
          </Box>
        </Box>
        <Box sx={styles.items}>
          <DrawerItem
            icon={<CottageOutlinedIcon sx={styles.optionsIcon} />}
            label={'Home'}
            isSelected={true}
          />
          <DrawerItem
            icon={<SettingsOutlinedIcon sx={styles.optionsIcon} />}
            label={'Settings'}
            isSelected={false}
          />
        </Box>
        <Box>
          <ThemeSwitch 
            onClick={(e) => {
              e.stopPropagation()
              toggleTheme();
            }} 
            checked={theme.palette.mode === themeName.DARK}
          />
        </Box>
      </AnimatedDrawer>
    </Box>
  );
};

export default Drawer;
