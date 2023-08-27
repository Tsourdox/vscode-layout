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

export default function DraggableEdge({
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
    [direction]
  );

  const getMax = useCallback(
    () => (isHorizontal ? window.innerWidth : window.innerHeight) - endMargin,
    [endMargin, isHorizontal]
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
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    />
  );
}
