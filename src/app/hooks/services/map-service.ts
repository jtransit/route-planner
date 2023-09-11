import { useState } from 'react';

import { AxiosRequestConfig } from 'axios';
import useApiClient from '@api/api-client';

import { Suggestions, defaultSuggestions } from '@app-types/map-service';

const useMapService = () => {
  const { client } = useApiClient();

  const [isLoading, setIsLoading] = useState(false);

  const [searchSuggestions, setSearchSuggestions] =
    useState<Suggestions>(defaultSuggestions);

  const search = async (key: string, config?: AxiosRequestConfig) => {
    const _config = {
      url: `mapbox.places/${key}.json`,
      params: {
        access_token:
          'pk.eyJ1IjoiYm9zY2Fmc29mdHdhcmUiLCJhIjoiY2p4aXlycjV0MGp5ODN4b2hwd3FiNzVybyJ9.Vu_BK9NBwwdyu2hrhLFHig',
      },
    };

    setIsLoading(true);
    const response = await client.request({ ...config, ..._config });
    setSearchSuggestions(response.data);
    setIsLoading(false);
  };

  return {
    isLoading,
    searchSuggestions,
    search,
  };
};

export default useMapService;
