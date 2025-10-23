import { FaChevronDown, FaHeart } from 'react-icons/fa';

interface SidebarOpenButtonProps {
  onOpen: () => void;
}

export default function SidebarOpenButton({ onOpen }: SidebarOpenButtonProps) {
  return (
    <button
      className='font-medium bg-secondary text-primary flex items-center gap-1 px-4 py-3 rounded-lg cursor-pointer'
      onClick={onOpen}
    >
      My <FaHeart className='text-primary' />s List
      <FaChevronDown className='text-primary' />
    </button>
  );
}
