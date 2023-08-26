import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Bars4Icon,
} from '@heroicons/react/20/solid';
import {
  MagnifyingGlassIcon,
  Squares2X2Icon,
  ViewColumnsIcon,
  WindowIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="flex items-center p-2 pr-4 border-b-1 bg-neutral-100 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex-2" />

      <div className="flex items-center gap-4 flex-3">
        <ArrowLeftIcon className="w-6 h-6" />
        <ArrowRightIcon className="w-6 h-6 text-neutral-300 dark:text-neutral-600" />

        <div className="flex items-center justify-center flex-1 gap-2 px-6 pt-1 text-lg rounded-lg bg-neutral-200 border-1 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-600">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <span>vscode-layout</span>
        </div>
      </div>

      <div className="flex justify-end gap-4 flex-2">
        <WindowIcon className="w-6 h-6" />
        <Bars4Icon className="w-6 h-6" />
        <ViewColumnsIcon className="w-6 h-6" />
        <Squares2X2Icon className="w-6 h-6" />
      </div>
    </header>
  );
}
