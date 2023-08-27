import { PropsWithChildren } from 'react';

export function Kbd({ children }: PropsWithChildren) {
  return (
    <div className="border-1 rounded-md border-neutral-200 bg-neutral-100 px-2 text-sm shadow-inner dark:border-neutral-700 dark:bg-neutral-700">
      {children}
    </div>
  );
}
