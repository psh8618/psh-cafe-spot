import { featureTranslations } from '@/constants/feature';
import type { Cafe, FeatureType } from '@/types/cafe';

interface CafeFeatureProps {
  features: Cafe['features'];
}

export default function CafeFeature({ features }: CafeFeatureProps) {
  return (
    <div className='border-b-2 border-gray-100 pb-5'>
      <h3 className='text-xl font-bold mb-4 text-darkBrown'>Feature</h3>
      <div className='flex flex-wrap gap-3'>
        {features
          .filter((feature) => feature.is_available)
          .map(({ feature_type }) => (
            <span
              key={feature_type}
              className='bg-primary text-white px-3 py-1 rounded-[10px] font-semibold text-sm'
            >
              {featureTranslations[feature_type as FeatureType]}
            </span>
          ))}
      </div>
    </div>
  );
}
