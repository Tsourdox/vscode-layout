import clsx from 'clsx';
import {
  PointerEventHandler,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { clip } from '../utils';

interface Props {
  containerRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  direction: 'left' | 'right' | 'top' | 'bottom';
  minSize: number;
  foldLimit?: number;
  endMargin: number;
  value: number;
  onDrag: (value: number) => void;
}

export default function DragEdge({
  containerRef,
  isOpen,
  direction,
  minSize,
  foldLimit,
  endMargin,
  value,
  onDrag,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);

  const isHorizontal = useMemo(
    () => direction === 'left' || direction === 'right',
    [direction],
  );

  const getMax = useCallback(
    () => (isHorizontal ? window.innerWidth : window.innerHeight) - endMargin,
    [endMargin, isHorizontal],
  );

  useEffect(() => {
    const handleResize = () => {
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
      onDrag(0);
    }
  };

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    window.removeEventListener('selectstart', disableSelect);
    setIsDragging(false);
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const opositeSides = {
      left: containerRect.right,
      right: containerRect.left,
      top: containerRect.bottom,
      bottom: containerRect.top,
    };

    const offset = opositeSides[direction];
    const absolutePointerPosition = isHorizontal ? e.clientX : e.clientY;
    const relativeCursorPosition = absolutePointerPosition - offset;

    if (
      foldLimit &&
      ((isOpen && relativeCursorPosition < foldLimit) ||
        (!isOpen && relativeCursorPosition < minSize - foldLimit))
    ) {
      onDrag(0);
    } else {
      onDrag(clip(relativeCursorPosition, minSize, getMax()));
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
