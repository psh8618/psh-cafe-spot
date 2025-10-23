import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FavoriteButton({
  isFavorite,
  onToggleFavorite,
}: FavoriteButtonProps) {
  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    onToggleFavorite(e);
  };

  return (
    <button
      className='p-1 cursor-pointer'
      aria-label={isFavorite ? '찜하기 해제' : '찜하기'}
      onClick={handleToggleFavorite}
    >
      {isFavorite ? (
        <AiFillHeart
          size={24}
          className='fill-primary transition-transform duration-200 hover:scale-110'
        />
      ) : (
        <AiOutlineHeart
          size={24}
          className='fill-neutral-500/70 transition-transform duration-200 hover:scale-110'
        />
      )}
    </button>
  );
}
