'use client';
import { Box } from '@mui/material';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { useAppContext } from '@contexts/app-context';
import AppIcon from '@assets/icons/app';
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
              <CottageOutlinedIcon />
            </Box>
          </Box>
          <Box sx={styles.drawer.item}>
            <SettingsOutlinedIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;
