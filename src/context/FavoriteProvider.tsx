import type { Cafe } from '@/types/cafe';
import { FavoriteContext } from '@/context/FavoriteContext';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

export default function FavoriteProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<Cafe[]>(() => {
    const stored = localStorage.getItem('favorites');

    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (cafe: Cafe) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === cafe.id);
      return exists
        ? prev.filter((item) => item.id !== cafe.id)
        : [...prev, cafe];
    });
  };

  const isFavorite = (id: number) => favorites.some((item) => item.id === id);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
