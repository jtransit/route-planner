'use client';
import { Box } from '@mui/material';

import { useAppContext } from '@contexts/app-context';
import AppIcon from '@assets/icons/app';
import HomeIcon from '@assets/icons/home';
import SettingsIcon from '@assets/icons/settings';
import styles from './styles';

const Drawer = () => {
  const { showDrawer, handleShowDrawer } = useAppContext();

  return (
    <Box sx={styles.drawer.wrapper}>
      <Box
        sx={[showDrawer ? styles.drawer.open : styles.drawer.close]}
        onClick={() => handleShowDrawer(true)}
      >
        <Box sx={styles.drawer.appIconWrapper}>
          <Box sx={styles.drawer.icon}>
            <AppIcon />
          </Box>
        </Box>
        <Box sx={styles.drawer.items}>
          <Box sx={styles.drawer.item}>
            <Box sx={styles.drawer.itemIconWrapper}>
              <HomeIcon />
            </Box>
          </Box>
          <Box sx={styles.drawer.item}>
            <SettingsIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;
