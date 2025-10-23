export type FacilityType =
  | 'wifi'
  | 'parking'
  | 'bathroom'
  | 'petFriendly'
  | 'toGo'
  | 'delivery'
  | 'groupAvailable'
  | 'applePay';

export type FeatureType =
  | 'suburban'
  | 'large'
  | 'dessert'
  | 'rooftop'
  | 'bookCafe'
  | 'scenicView'
  | 'culturalComplex'
  | 'architectureTheme';

export type Cafe = {
  id: number;
  name: string;
  address: string;
  photos: { url: string }[];
  description: string;
  facilities: { facility_type: FacilityType; is_available: boolean }[];
  features: { feature_type: FeatureType; is_available: boolean }[];
};

export type CafeResponse = {
  data: Cafe[];
  nextPage: number | null;
};
