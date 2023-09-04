'use client';
import { Box } from '@mui/material';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useSpring, animated } from '@react-spring/web';

import { useAppContext } from '@contexts/app-context';
import AppIcon from '@assets/icons/app';
import styles from './styles';

const Drawer = () => {
  const { showDrawer, handleShowDrawer } = useAppContext();
  const props = useSpring({
    width: showDrawer ? '14rem' : '4rem',
  });

  const AnimatedDrawer = animated(Box);

  return (
    <Box sx={styles.drawer.wrapper}>
      <AnimatedDrawer style={props} onClick={() => handleShowDrawer(true)}>
        <Box sx={styles.drawer.appIconWrapper}>
          <Box sx={styles.drawer.icon}>
            <AppIcon />
          </Box>
        </Box>
        <Box sx={styles.drawer.items}>
          <Box sx={styles.drawer.item}>
            <Box sx={styles.drawer.itemIconWrapper}>
              <CottageOutlinedIcon />
            </Box>
          </Box>
          <Box sx={styles.drawer.item}>
            <SettingsOutlinedIcon />
          </Box>
        </Box>
      </AnimatedDrawer>
    </Box>
  );
};

export default Drawer;
