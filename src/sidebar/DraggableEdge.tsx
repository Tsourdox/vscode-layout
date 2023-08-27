import { useEffect, useRef } from 'react';
import { clip } from '../utils';

interface Props {
  direction: 'left' | 'right' | 'top' | 'bottom';
  minSize: number;
  foldLimit?: number;
  endMargin: number;
  value: number;
  onDrag: (value: number) => void;
}

export default function DraggableEdge({
  direction,
  minSize,
  foldLimit,
  endMargin,
  value,
  onDrag,
}: Props) {
  const activeValueRef = useRef(value);
  const isHorizontal = direction === 'left' || direction === 'right';

  const getMax = () =>
    (isHorizontal ? window.innerWidth : window.innerHeight) - endMargin;

  useEffect(() => {
    activeValueRef.current = value;
  }, [value]);

  useEffect(() => {
    const handleResize = () => {
      activeValueRef.current = clip(activeValueRef.current, minSize, getMax());
      onDrag(clip(value, minSize, getMax()));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleMouseDown = () => {
    const disableSelect = (e: Event) => e.preventDefault();

    const handleDrag = (e: MouseEvent) => {
      const movement = isHorizontal ? e.movementX : e.movementY;
      activeValueRef.current = activeValueRef.current + movement;

      if (foldLimit && activeValueRef.current < foldLimit) {
        onDrag(0);
      } else {
        onDrag(clip(activeValueRef.current, minSize, getMax()));
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener('selectstart', disableSelect);
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleMouseUp);

      activeValueRef.current = clip(activeValueRef.current, minSize, getMax());
    };

    window.addEventListener('selectstart', disableSelect);
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const horizontalClasses = 'top-0 h-full w-1 px-1 cursor-ew-resize';
  const verticalClasses = 'left-0 w-full h-1 py-1 cursor-ns-resize';
  const rightClasses = `-right-2 ${horizontalClasses}`;
  const leftClasses = `-left-2 ${horizontalClasses}`;
  const topClasses = `-top-2 ${verticalClasses}`;
  const bottomClasses = `-bottom-2 ${verticalClasses}`;

  const classes =
    direction === 'left'
      ? leftClasses
      : direction === 'right'
      ? rightClasses
      : direction === 'top'
      ? topClasses
      : bottomClasses;

  return (
    <div
      className={`${classes} box-content absolute bg-clip-content active:bg-blue-700 active:dark:bg-blue-600`}
      onMouseDown={handleMouseDown}
    />
  );
}
