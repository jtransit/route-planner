import { Autocomplete, TextField, CircularProgress } from '@mui/material';

import { LngLat } from '@app-types/directions';
import _styles from './styles';
import { useThemeContext } from '@/app/contexts/theme-context';

interface Option {
  label: string;
  center: LngLat;
}

interface AutoCompleteComponentProps {
  isLoading: boolean;
  value: Option;
  placeholder?: string;
  options: Option[];
  changeHandler: (label?: Option['label'], center?: Option['center']) => void;
}

const AutoCompleteComponent = ({
  isLoading,
  options,
  placeholder,
  value,
  changeHandler,
}: AutoCompleteComponentProps) => {

  const { theme } = useThemeContext();
  const styles = _styles(theme.palette.mode).nav;

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
          placeholder={placeholder}
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

export default AutoCompleteComponent;
