import { CheckIcon } from '@heroicons/react/20/solid';
import {
  BellIcon,
  ChatBubbleLeftRightIcon,
  ChevronDoubleRightIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="flex gap-2 pr-4 text-lg text-neutral-600 border-t-1 bg-neutral-100 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300">
      <div className="px-3 py-1 bg-blue-700 cursor-pointer dark:bg-blue-600">
        <ChevronDoubleRightIcon className="w-6 h-6 text-neutral-50" />
      </div>
      <div className="flex items-center gap-2 px-2 cursor-pointer">
        <XCircleIcon className="w-6 h-6" />
        <span>0</span>
        <ExclamationTriangleIcon className="w-6 h-6" />
        <span>0</span>
      </div>
      <div className="flex-1" />
      <div className="flex items-center px-2 cursor-pointer">
        <CheckIcon className="w-6 h-6" />
        <span>Prettier</span>
      </div>
      <div className="flex items-center px-2 cursor-pointer">
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </div>
      <div className="flex items-center px-2 cursor-pointer">
        <BellIcon className="w-6 h-6" />
      </div>
    </footer>
  );
}
