import { Box, Input, Divider } from '@mui/material';

import { useMapContext } from '@contexts/map-context';
import BlueCircle from '@assets/icons/blue-circle';
import RedCircle from '@assets/icons/red-circle';
import Swap from '@assets/icons/swap';
import More from '@assets/icons/more';
import styles from './styles';

const NavigationMenu = () => {
  const { from, to } = useMapContext();

  const _from = from?.toString() ?? '';
  const _to = to?.toString() ?? '';

  return (
    <Box sx={styles.nav.menu}>
      <Box>
        <Box sx={styles.nav.inputWrapper}>
          <BlueCircle />
          <Input sx={styles.nav.input} placeholder='Origin' value={_from} />
        </Box>
        <Box sx={styles.nav.dividerWrapper}>
          <Box sx={styles.nav.moreWrapper}>
            <More />
          </Box>
          <Divider sx={styles.nav.divider} />
        </Box>
        <Box sx={styles.nav.inputWrapper}>
          <RedCircle />
          <Input sx={styles.nav.input} placeholder='Destination' value={_to} />
        </Box>
      </Box>
      <Box>
        <Swap />
      </Box>
    </Box>
  );
};

export default NavigationMenu;
