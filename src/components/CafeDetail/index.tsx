import type { Cafe } from '@/types/cafe';
import CafeDetailHeader from '@/components/CafeDetail/CafeDetailHeader';
import CafeImageCarousel from '@/components/CafeDetail/CafeImageCarousel';
import CafeFeature from '@/components/CafeDetail/CafeFeature';
import CafeDescription from '@/components/CafeDetail/CafeDescription';
import CafeFacilities from '@/components/CafeDetail/CafeFacilities';
import CafeLocation from './CafeLocation';

interface CafeDetailProps {
  cafe: Cafe;
}

export default function CafeDetail({ cafe }: CafeDetailProps) {
  return (
    <div className='max-w-screen-xl mx-auto text-secondary'>
      <div className='flex flex-col gap-6'>
        <CafeDetailHeader cafe={cafe} />
        <CafeImageCarousel photos={cafe.photos} />
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-6'>
          <div className='flex flex-col gap-4'>
            <CafeFeature features={cafe.features} />
            <CafeDescription description={cafe.description} />
            <CafeFacilities facilities={cafe.facilities} />
          </div>
          <CafeLocation address={cafe.address} />
        </div>
      </div>
    </div>
  );
}
