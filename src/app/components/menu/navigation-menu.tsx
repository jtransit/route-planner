import { Box, Input, Divider } from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import { useMapContext } from '@contexts/map-context';
import styles from './styles';

const NavigationMenu = () => {
  const { from, to } = useMapContext();

  const _from = from?.toString() ?? '';
  const _to = to?.toString() ?? '';

  return (
    <Box sx={styles.nav.menu}>
      <Box>
        <Box sx={styles.nav.inputWrapper}>
          <TripOriginIcon sx={styles.nav.origin} />
          <Input sx={styles.nav.input} placeholder='Origin' value={_from} />
        </Box>
        <Box sx={styles.nav.dividerWrapper}>
          <Box sx={styles.nav.moreWrapper}>
            <MoreVertIcon sx={styles.nav.moreIcon} />
          </Box>
          <Divider sx={styles.nav.divider} />
        </Box>
        <Box sx={styles.nav.inputWrapper}>
          <TripOriginIcon sx={styles.nav.destination} />
          <Input sx={styles.nav.input} placeholder='Destination' value={_to} />
        </Box>
      </Box>
      <Box>
        <SwapVertIcon sx={styles.nav.swapIcon} />
      </Box>
    </Box>
  );
};

export default NavigationMenu;
