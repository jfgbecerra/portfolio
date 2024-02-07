import { XMarkIcon } from '@heroicons/react/24/outline';

type CloseButtonProps = {
  onPress: (val: boolean) => void;
};

export default function CloseSideMenuButton({ onPress }: CloseButtonProps) {
  return (
    <button
      type='button'
      className='-m-2.5 rounded-md p-2.5 text-gray-700'
      onClick={() => onPress(false)}
    >
      <span className='sr-only'>Close menu</span>
      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
    </button>
  );
}
