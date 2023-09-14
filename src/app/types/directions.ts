export interface LocationInfo {
  address: string;
  latLng?: L.LatLng;
}

export interface Location {
  from: LocationInfo;
  to: LocationInfo;
}

export type Longitude = number;
export type Latitude = number;

export type LngLat = [Longitude, Latitude];
