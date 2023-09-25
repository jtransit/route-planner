import { LngLat } from '@app-types/directions';

export interface Suggestions {
  attribution: string;
  features: Features[];
  query: string[];
  type: string;
}

interface Features {
  center: LngLat;
  place_name: string;
}

export const defaultSuggestions: Suggestions = {
  attribution: '',
  features: [
    {
      center: [123.905601, 10.323267],
      place_name: '',
    },
  ],
  query: [''],
  type: '',
};
