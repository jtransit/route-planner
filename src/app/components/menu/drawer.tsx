'use client';
import { Box, Typography } from '@mui/material';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { useAppContext } from '@contexts/app-context';
import AppIcon from '@assets/icons/app';
import _styles from './styles';

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
          isSelected && styles.itemIconWrapper,
          !isSelected && styles.itemIconWrapperNotSelected,
          showDrawer && styles.show,
        ]}
      >
        <Box sx={[showDrawer && styles.itemShow]}>
          {icon}
          {showDrawer && <Typography>{label}</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

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
      </Box>
    </Box>
  );
};

export default Drawer;
