export const featureTranslations = {
  suburban: '근교',
  large: '대형',
  dessert: '디저트',
  rooftop: '루프탑',
  bookCafe: '북카페',
  scenicView: '뷰맛집',
  culturalComplex: '복합문화',
  architectureTheme: '건축/테마',
} as const;

export type featureType = keyof typeof featureTranslations;
