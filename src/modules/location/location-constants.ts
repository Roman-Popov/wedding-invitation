import type { YMapLocationRequest, LngLat } from 'ymaps3';

export const WEDDING_COORDINATES: LngLat = [55.927386, 54.722476];
export const DINNER_COORDINATES: LngLat = [55.955481, 54.741400];
export const CENTERED_COORDINATES: LngLat = [55.942805, 54.732954];

export const BOUNDS: [LngLat, LngLat] = [
  [53.697574, 53.291418],
  [59.064396, 56.081166],
];

export const LOCATION: YMapLocationRequest = {
  center: CENTERED_COORDINATES,
  zoom: 13,
};
