import { PiSlidersHorizontal } from 'react-icons/pi';

export default function FilterButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      className='flex items-center gap-1 px-4 py-2 border border-primary text-primary rounded-full cursor-pointer whitespace-nowrap'
      {...props}
    >
      필터
      <PiSlidersHorizontal className='w-5 h-5' />
    </button>
  );
}
