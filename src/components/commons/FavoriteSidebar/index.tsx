import { FaHeart } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import FavoriteCafeList from './FavoriteCafeList';
import useFavorite from '@/hooks/useFavorite';

interface FavoriteSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FavoriteSidebar({
  isOpen,
  onClose,
}: FavoriteSidebarProps) {
  const { favorites, isFavorite, toggleFavorite } = useFavorite();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side='right' className='w-80 h-full bg-[#F8E1C3] p-0'>
        <div className='flex items-center justify-center h-32'>
          <SheetTitle className='text-2xl font-semibold text-primary flex items-center gap-1'>
            My <FaHeart className='text-primary' /> Likes List
          </SheetTitle>
        </div>
        <FavoriteCafeList
          favoriteCafeList={favorites}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
          setClose={onClose}
        />
      </SheetContent>
    </Sheet>
  );
}
