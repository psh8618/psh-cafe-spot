import { useContext } from 'react';
import { FavoriteContext } from '@/context/FavoriteContext';

const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context)
    throw new Error(
      'useFavorite은 반드시 FavoriteProvider 안에서 사용해야 합니다.'
    );
  return context;
};

export default useFavorite;
