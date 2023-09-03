'use client';
import { Box, Typography } from '@mui/material';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { useAppContext } from '@contexts/app-context';
import AppIcon from '@assets/icons/app';
import _styles from './styles';

const styles = _styles.drawer;

const Drawer = () => {
  const { showDrawer, handleShowDrawer } = useAppContext();

  return (
    <Box sx={styles.wrapper}>
      <Box
        sx={[showDrawer ? styles.open : styles.close]}
        onClick={() => handleShowDrawer(!showDrawer)}
      >
        <Box sx={styles.appIconWrapper}>
          <Box sx={styles.icon}>
            <AppIcon />
          </Box>
        </Box>
        <Box sx={styles.items}>
          <Box sx={styles.item}>
            <Box sx={[styles.itemIconWrapper, showDrawer && styles.show]}>
              <Box sx={[showDrawer && styles.itemShow]}>
                <CottageOutlinedIcon />
                {showDrawer && <Typography>Home</Typography>}
              </Box>
            </Box>
          </Box>
          <Box sx={styles.item}>
            <SettingsOutlinedIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;
