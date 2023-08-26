import { PhotoIcon } from '@heroicons/react/24/outline';
import { Kbd } from './Kbd';

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 text-lg red bg-neutral-50 dark:bg-neutral-850">
      <PhotoIcon className="-mt-12 w-96 h-96 text-neutral-200 dark:text-neutral-900" />
      <section className="flex gap-6">
        <div className="grid items-center grid-rows-5 gap-4 grid-cols-2-auto">
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
