import axios from 'axios';

const useApiClient = (options?: { baseURL?: string }) => {
  const client = axios.create({
    baseURL: options?.baseURL ?? 'https://api.mapbox.com/geocoding/v5/',
    responseType: 'json',
    timeout: 30000,
  });

  return {
    client,
  };
};

export default useApiClient;
