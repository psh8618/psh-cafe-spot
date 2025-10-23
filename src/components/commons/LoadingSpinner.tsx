import { FadeLoader } from 'react-spinners';

export default function LoadingSpinner() {
  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
      <FadeLoader color='var(--primary)' />
    </div>
  );
}
