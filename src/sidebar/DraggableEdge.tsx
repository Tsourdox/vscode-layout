import clsx from 'clsx';
import {
  PointerEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { clip } from '../utils';

interface Props {
  isOpen: boolean;
  direction: 'left' | 'right' | 'top' | 'bottom';
  minSize: number;
  foldLimit?: number;
  endMargin: number;
  value: number;
  onDrag: (value: number) => void;
}

export default function DragEdge({
  isOpen,
  direction,
  minSize,
  foldLimit,
  endMargin,
  value,
  onDrag,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const activeValueRef = useRef(value);

  const isHorizontal = useMemo(
    () => direction === 'left' || direction === 'right',
    [direction],
  );

  const getMax = useCallback(
    () => (isHorizontal ? window.innerWidth : window.innerHeight) - endMargin,
    [endMargin, isHorizontal],
  );

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
  }, [getMax, minSize, onDrag, value]);

  const disableSelect = useCallback((e: Event) => e.preventDefault(), []);

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    window.addEventListener('selectstart', disableSelect);
    setIsDragging(true);

    if (!isOpen) {
      activeValueRef.current = 0;
      onDrag(0);
    }
  };

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    window.removeEventListener('selectstart', disableSelect);
    setIsDragging(false);
    activeValueRef.current = clip(activeValueRef.current, minSize, getMax());
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging) return;
    const movement = isHorizontal ? e.movementX : e.movementY;
    activeValueRef.current = activeValueRef.current + movement;

    if (foldLimit && activeValueRef.current < foldLimit) {
      onDrag(0);
    } else {
      onDrag(clip(activeValueRef.current, minSize, getMax()));
    }
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
        }[direction],
      )}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    />
  );
}
