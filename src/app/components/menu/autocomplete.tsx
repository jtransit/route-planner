import { Autocomplete, TextField, CircularProgress } from '@mui/material';

import { LngLat } from '@app-types/directions';
import _styles from './styles';

const styles = _styles.nav;

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
