interface Props {
  side: 'left' | 'right' | 'top' | 'bottom';
  onDrag: (movement: number) => void;
  onDragEnd: () => void;
}

export default function DraggableEdge({ side, onDrag, onDragEnd }: Props) {
  const handleMouseDown = () => {
    const handleDrag = (e: MouseEvent) => onDrag(e.movementX);
    const disableSelect = (e: Event) => e.preventDefault();

    const handleMouseUp = () => {
      onDragEnd();
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('selectstart', disableSelect);
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('selectstart', disableSelect);
  };

  const horizontalClasses = 'top-0 h-full w-1 px-1 cursor-ew-resize';
  const verticalClasses = 'left-0 w-full h-1 py-1 cursor-ns-resize';
  const rightClasses = `-right-2 ${horizontalClasses}`;
  const leftClasses = `-left-2 ${horizontalClasses}`;
  const topClasses = `-top-2 ${verticalClasses}`;
  const bottomClasses = `-bottom-2 ${verticalClasses}`;

  const classes =
    side === 'left'
      ? leftClasses
      : side === 'right'
      ? rightClasses
      : side === 'top'
      ? topClasses
      : bottomClasses;

  return (
    <div
      className={`${classes} box-content absolute bg-clip-content active:bg-blue-700 active:dark:bg-blue-600`}
      onMouseDown={handleMouseDown}
    />
  );
}
