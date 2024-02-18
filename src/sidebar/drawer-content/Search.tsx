import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';

export default function Search() {
  return (
    <section className="flex h-full flex-1 flex-col">
      <header className="flex justify-between px-7 py-4">
        <span>SEARCH</span>
        <EllipsisHorizontalIcon className="h-6 w-6" />
      </header>
    </section>
  );
}
