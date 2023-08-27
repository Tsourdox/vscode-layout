import { ReactNode } from 'react';
import DraggableEdge from './DraggableEdge';

interface Props {
  isOpen: boolean;
  width: number;
  onResize: (width: number) => void;
  children: ReactNode;
}

const MIN_WIDTH = 250;
const OTHER_CONTENT_WIDTH = 500; // Sidebar + main content width
// TODO should be calculated based on the width of the sidebar and main content

export default function SidebarDrawer({
  isOpen,
  width,
  onResize,
  children,
}: Props) {
  return (
    <aside className="relative flex">
      <div
        style={{ width: `${isOpen ? width : 0}px` }}
        className={`flex flex-col overflow-hidden dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 ${
          width && 'border-r-1 border-neutral-300 dark:border-neutral-700'
        }`}
      >
        {children}
      </div>
      <DraggableEdge
        direction="right"
        foldLimit={MIN_WIDTH / 2}
        minSize={MIN_WIDTH}
        endMargin={OTHER_CONTENT_WIDTH}
        value={width}
        onDrag={onResize}
      />
    </aside>
  );
}
