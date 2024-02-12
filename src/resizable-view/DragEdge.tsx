import clsx from 'clsx';
import { PointerEventHandler, useCallback, useState } from 'react';

interface Props {
  side: 'left' | 'right' | 'top' | 'bottom';
  onResize: (value: number) => void;
}

export default function DragEdge({ side, onResize }: Props) {
  const [isDragging, setIsDragging] = useState(false);

  const disableSelect = useCallback((e: Event) => e.preventDefault(), []);

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    window.addEventListener('selectstart', disableSelect);
    setIsDragging(true);
  };

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    window.removeEventListener('selectstart', disableSelect);
    setIsDragging(false);
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging) return;
    const movement = e.movementX;
    onResize(movement);
  };

  return (
    <div
      className={clsx(
        'absolute box-content bg-clip-content active:bg-blue-700 active:dark:bg-blue-600',
        {
          right: '-right-2 top-0 h-full w-1 cursor-ew-resize px-1',
          left: '-left-2 top-0 h-full w-1 cursor-ew-resize px-1',
          top: '-top-2 left-0 h-1 w-full cursor-ns-resize py-1',
          bottom: '-bottom-2 left-0 h-1 w-full cursor-ns-resize py-1',
        }[side],
      )}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    />
  );
}
