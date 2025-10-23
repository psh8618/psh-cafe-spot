import { useNavigate } from 'react-router';
import type { Cafe } from '@/types/cafe';
import FavoriteButton from '@/components/commons/FavoriteButton';
import useFavorite from '@/hooks/useFavorite';

interface CafeCardProps {
  cafe: Cafe;
}

export default function CafeCard({ cafe }: CafeCardProps) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorite();

  const handleCardClick = () => {
    navigate(`/cafe/${cafe.id}`);
  };
  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleFavorite(cafe);
  };

  return (
    <div
      className='flex-col cursor-pointer group flex'
      onClick={handleCardClick}
    >
      <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
        <img
          src={cafe.photos[0].url}
          alt={cafe.name}
          loading='lazy'
          className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-300'
        />
      </div>

      <div className='font-semibold text-[15px] flex items-center justify-between'>
        <span>{cafe.name}</span>
        <FavoriteButton
          isFavorite={isFavorite(cafe.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
      <p className='font-light text-neutral-500 text-[14px]'>{cafe.address}</p>
    </div>
  );
}
