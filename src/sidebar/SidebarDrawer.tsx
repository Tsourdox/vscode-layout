import { ReactNode, useState } from 'react';
import { clip } from '../utils';
import DraggableEdge from './DraggableEdge';

interface Props {
  children: ReactNode;
}

const MIN_WIDTH = 250;
const OTHER_CONTENT_WIDTH = 500; // Sidebar + main content width
// TODO should be calculated based on the width of the sidebar and main content

export default function SidebarDrawer({ children }: Props) {
  const [width, setWidth] = useState(MIN_WIDTH);

  const clippedWidth = clip(
    width,
    MIN_WIDTH,
    window.innerWidth - OTHER_CONTENT_WIDTH
  );

  return (
    <aside
      style={{ width: `${clippedWidth}px` }}
      className="relative flex flex-col dark:text-neutral-300 border-r-1 bg-neutral-100 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-700"
    >
      {children}
      <DraggableEdge
        side="right"
        onDrag={(movement) => setWidth((width) => width + movement)}
        onDragEnd={() =>
          setWidth((width) =>
            clip(width, MIN_WIDTH, window.innerWidth - OTHER_CONTENT_WIDTH)
          )
        }
      />
    </aside>
  );
}
