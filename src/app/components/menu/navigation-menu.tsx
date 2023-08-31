import { Box } from '@mui/material';

import { useMapContext } from '@contexts/map-context';
import styles from './styles';

// WIP Navigation Menu
const NavigationMenu = () => {
  const { from, to } = useMapContext();

  const _from = from?.toString() ?? '';
  const _to = to?.toString() ?? '';

  return (
    <Box sx={styles.navMenu}>
      <div className='py-1'>Where are you? {_from}</div>
      <div className='py-1'>Where do you want to go? {_to}</div>
    </Box>
  );
};

export default NavigationMenu;
