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

interface Option {
  label: string;
  center: number[];
}

interface AutoCompleteComponentProps {
  isLoading: boolean;
  value: Option;
  options: Option[];
  changeHandler: (label?: Option['label'], center?: Option['center']) => void;
}

const AutoCompleteComponent = ({
  isLoading,
  options,
  value,
  changeHandler,
}: AutoCompleteComponentProps) => {
  return (
    <Autocomplete
      options={options}
      sx={styles.input}
      onChange={(e, v) => {
        changeHandler(v?.label ?? '', v?.center);
      }}
      value={value}
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

  const {
    isLoadingSearch,
    search,
    from,
    to,
    handleChangeFrom,
    handleChangeTo,
  } = useMapContext();

  const props = useSpring({
    left: showDrawer ? styles.drawerOpen.left : styles.drawerClose.left,
  });

  const options = useMemo(
    () =>
      search.map((v) => {
        return {
          center: (v?.center as number[]) ?? [0, 0],
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
            value={{
              center: [from?.latLng?.lng ?? 0, from?.latLng?.lat ?? 0],
              label: from?.address ?? '',
            }}
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
            value={{
              center: [to?.latLng?.lng ?? 0, to?.latLng?.lat ?? 0],
              label: to?.address ?? '',
            }}
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
