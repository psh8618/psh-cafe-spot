import type { Cafe } from '@/types/cafe';
import { Link } from 'react-router';
import FavoriteButton from '@/components/commons/FavoriteButton';

interface FavoriteCafeListProps {
  favoriteCafeList: Cafe[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (cafe: Cafe) => void;
  setClose: () => void;
}

export default function FavoriteCafeList({
  favoriteCafeList,
  isFavorite,
  toggleFavorite,
  setClose,
}: FavoriteCafeListProps) {
  return (
    <div className='flex-1 overflow-y-auto bg-white p-5'>
      {favoriteCafeList.length > 0 ? (
        <ul>
          {favoriteCafeList.map((favoriteCafe: Cafe) => (
            <li
              key={favoriteCafe.id}
              className='flex items-center justify-between mb-5'
            >
              <Link
                to={`/cafe/${favoriteCafe.id}`}
                className='text-gray-900 font-bold text-lg'
                onClick={setClose}
              >
                {favoriteCafe.name}
              </Link>
              <FavoriteButton
                isFavorite={isFavorite(favoriteCafe.id)}
                onToggleFavorite={() => toggleFavorite(favoriteCafe)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-gray-600'>찜한 카페가 없습니다.</p>
      )}
    </div>
  );
}
