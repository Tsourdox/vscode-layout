import { CheckIcon } from '@heroicons/react/20/solid';
import {
  BellIcon,
  ChatBubbleLeftRightIcon,
  ChevronDoubleRightIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="border-t-1 flex gap-2 border-neutral-300 bg-neutral-100 pr-4 text-lg text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
      <div className="cursor-pointer bg-blue-700 px-3 py-1 dark:bg-blue-600">
        <ChevronDoubleRightIcon className="h-6 w-6 text-neutral-50" />
      </div>
      <div className="flex cursor-pointer items-center gap-2 px-2">
        <XCircleIcon className="h-6 w-6" />
        <span>0</span>
        <ExclamationTriangleIcon className="h-6 w-6" />
        <span>0</span>
        <ExclamationCircleIcon className="h-6 w-6" />
        <span>2</span>
      </div>
      <div className="flex-1" />
      <div className="flex cursor-pointer items-center px-2">
        <CheckIcon className="h-6 w-6" />
        <span>Prettier</span>
      </div>
      <div className="flex cursor-pointer items-center px-2">
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </div>
      <div className="flex cursor-pointer items-center px-2">
        <BellIcon className="h-6 w-6" />
      </div>
    </footer>
  );
}
