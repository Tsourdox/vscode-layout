import clsx from 'clsx';
import { ReactNode, useRef } from 'react';
import DraggableEdge from './DraggableEdge';

interface Props {
  isOpen: boolean;
  width: number;
  onResize: (width: number) => void;
  children: ReactNode;
}

export default function SidebarDrawer({
  isOpen,
  width,
  onResize,
  children,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <aside className="relative flex">
      <div
        ref={containerRef}
        style={{ width: `${isOpen ? width : 0}px` }}
        className={clsx(
          'flex flex-col overflow-hidden bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-300',
          isOpen && 'border-r-1 border-neutral-300 dark:border-neutral-700',
        )}
      >
        {children}
      </div>
      <DraggableEdge
        containerRef={containerRef}
        isOpen={isOpen}
        side="right"
        isFoldable={true}
        minSize={250}
        endMargin={500} // Sidebar + main content width
        // TODO should be calculated based on the width of the sidebar and main content
        position={width}
        onDrag={onResize}
      />
    </aside>
  );
}
