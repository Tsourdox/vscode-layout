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
    <header className="border-b-1 flex items-center border-neutral-300 bg-neutral-100 p-2 pr-4 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex-2" />

      <div className="flex-3 flex items-center gap-4">
        <ArrowLeftIcon className="h-6 w-6" />
        <ArrowRightIcon className="h-6 w-6 text-neutral-300 dark:text-neutral-600" />

        <div className="border-1 flex flex-1 items-center justify-center gap-2 rounded-lg border-neutral-300 bg-neutral-200 px-6 pt-1 text-lg dark:border-neutral-600 dark:bg-neutral-800">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <span>vscode-layout</span>
        </div>
      </div>

      <div className="flex-2 flex justify-end gap-4">
        <WindowIcon className="h-6 w-6" />
        <Bars4Icon className="h-6 w-6" />
        <ViewColumnsIcon className="h-6 w-6" />
        <Squares2X2Icon className="h-6 w-6" />
      </div>
    </header>
  );
}
