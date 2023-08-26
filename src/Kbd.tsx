import { PropsWithChildren } from 'react';

export function Kbd({ children }: PropsWithChildren) {
  return (
    <div className="px-2 text-sm rounded-md shadow-inner border-1 border-neutral-200 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-700">
      {children}
    </div>
  );
}
