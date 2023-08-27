import { PhotoIcon } from '@heroicons/react/24/outline';
import { Kbd } from './Kbd';

export default function Main() {
  return (
    <main className="red dark:bg-neutral-850 flex flex-1 flex-col items-center justify-center bg-neutral-50 text-lg">
      <PhotoIcon className="-mt-12 h-96 w-96 text-neutral-200 dark:text-neutral-900" />
      <section className="flex gap-6">
        <div className="grid-cols-2-auto grid grid-rows-5 items-center gap-4">
          <span className="text-right">Show All Commands</span>
          <div className="flex gap-2">
            <Kbd>⇧</Kbd>
            <Kbd>⌘</Kbd>
            <Kbd>P</Kbd>
          </div>

          <span className="text-right">Go to File</span>
          <div className="flex gap-2">
            <Kbd>⌘</Kbd>
            <Kbd>P</Kbd>
          </div>

          <span className="text-right">Find in Files</span>
          <div className="flex gap-2">
            <Kbd>⇧</Kbd>
            <Kbd>⌘</Kbd>
            <Kbd>F</Kbd>
          </div>

          <span className="text-right">Toggle Full Screen</span>
          <div className="flex gap-2">
            <Kbd>⌃</Kbd>
            <Kbd>⌘</Kbd>
            <Kbd>F</Kbd>
          </div>

          <span className="text-right">Show Settings</span>
          <div className="flex gap-2">
            <Kbd>⌘</Kbd>
            <Kbd>,</Kbd>
          </div>
        </div>
      </section>
    </main>
  );
}
