import clsx from 'clsx';
import { ReactNode } from 'react';
import DragEdge from './DragEdge';

interface Props {
  children: ReactNode;
}

export default function ResizableView({ children }: Props) {
  const handleResize = () => {};

  return (
    <div className="relative flex">
      <div
        // style={{ width: `${isOpen ? width : 0}px` }}
        className={clsx(
          'flex flex-col overflow-hidden bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-300',
          { 'border-r-1 border-neutral-300 dark:border-neutral-700': true },
        )}
      >
        {children}
      </div>
      <DragEdge side="right" onResize={handleResize} />
    </div>
  );
}
