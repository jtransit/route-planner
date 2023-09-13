'use client';
import { Box, Typography } from '@mui/material';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useSpring, animated } from '@react-spring/web';

import { useAppContext } from '@contexts/app-context';
import AppIcon from '@assets/icons/app';
import _styles from './styles';
import ThemeSwitch from '@components/theme/theme-switch';

const styles = _styles.drawer;

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
          {showDrawer && <Typography>{label}</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

const Drawer = () => {
  const { showDrawer, handleShowDrawer } = useAppContext();
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
            icon={<CottageOutlinedIcon />}
            label={'Home'}
            isSelected={true}
          />
          <DrawerItem
            icon={<SettingsOutlinedIcon />}
            label={'Settings'}
            isSelected={false}
          />
        </Box>
        <Box>
          <ThemeSwitch onChange={(e) => {console.log(e.target.value)}} />
        </Box>
      </AnimatedDrawer>
    </Box>
  );
};

export default Drawer;
