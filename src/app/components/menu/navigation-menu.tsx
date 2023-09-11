import { useMemo } from 'react';
import {
  Box,
  Divider,
  Autocomplete,
  TextField,
  CircularProgress,
} from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useSpring, animated } from '@react-spring/web';

import { useAppContext } from '@contexts/app-context';
import { useMapContext } from '@contexts/map-context';
import _styles from './styles';

const styles = _styles.nav;

const AutoCompleteComponent = ({
  isLoading,
  options,
  changeHandler,
}: {
  isLoading: boolean;
  options: {
    key: number;
    label: string;
  }[];
  changeHandler: (v?: string) => void;
}) => {
  return (
    <Autocomplete
      options={options}
      sx={styles.input}
      onChange={(e) => {
        changeHandler((e.target as HTMLInputElement).innerHTML);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => changeHandler((e.target as HTMLInputElement).value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

const NavigationMenu = () => {
  const { showDrawer } = useAppContext();

  const { isLoadingSearch, search, handleChangeFrom, handleChangeTo } =
    useMapContext();

  const props = useSpring({
    left: showDrawer ? styles.drawerOpen.left : styles.drawerClose.left,
  });

  const options = useMemo(
    () =>
      search.map((v, i) => {
        return {
          key: i,
          label: (v?.place_name as string) ?? '',
        };
      }),
    [search]
  );

  const AnimatedMenu = animated(Box);

  return (
    <AnimatedMenu sx={[styles.menu]} style={props}>
      <Box>
        <Box sx={styles.inputWrapper}>
          <TripOriginIcon sx={styles.origin} />
          <AutoCompleteComponent
            isLoading={isLoadingSearch}
            options={options}
            changeHandler={handleChangeFrom}
          />
        </Box>
        <Box sx={styles.dividerWrapper}>
          <Box sx={styles.moreWrapper}>
            <MoreVertIcon sx={styles.moreIcon} />
          </Box>
          <Divider sx={styles.divider} />
        </Box>
        <Box sx={styles.inputWrapper}>
          <TripOriginIcon sx={styles.destination} />
          <AutoCompleteComponent
            isLoading={isLoadingSearch}
            options={options}
            changeHandler={handleChangeTo}
          />
        </Box>
      </Box>
      <Box>
        <SwapVertIcon sx={styles.swapIcon} />
      </Box>
    </AnimatedMenu>
  );
};

export default NavigationMenu;
