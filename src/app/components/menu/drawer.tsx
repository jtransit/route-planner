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
        <Box sx={styles.drawer.iconWrapper}>
          <Box sx={styles.drawer.icon}>
            <AppIcon />
          </Box>
        </Box>
        <Box sx={styles.drawer.items}>
          <Box sx={styles.drawer.item}>
            <Box
              sx={{
                // background: 'gray',
                flexShrink: 0,
                padding: '0.8rem',
                boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset',
                borderRadius: '0.3125rem',
                background: '#F0F0F0',
              }}
            >
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
