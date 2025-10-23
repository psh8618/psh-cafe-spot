import { useKakaoMap } from '@/hooks/useKakaoMap';
import { useEffect, useRef } from 'react';

interface KakaoMapProps {
  address: string;
}

export default function KakaoMap({ address }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const { containerRef, initMap, updateMapWithAddress } = useKakaoMap(mapRef);

  useEffect(() => {
    if (containerRef.current) {
      initMap(containerRef.current);
    }
  }, []);

  useEffect(() => {
    updateMapWithAddress(address);
  }, [address]);

  return (
    <div
      className='w-full h-[500px] rounded-lg border-2 border-gray-300'
      ref={containerRef}
    />
  );
}
