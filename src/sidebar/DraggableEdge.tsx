interface Props {
  onDrag: (movement: number) => void;
  onDragEnd: () => void;
}

export default function DraggableEdge({ onDrag, onDragEnd }: Props) {
  const handleMouseDown = () => {
    const handleDrag = (e: MouseEvent) => onDrag(e.movementX);

    const handleMouseUp = () => {
      onDragEnd();
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className="box-content absolute top-0 w-1 h-full px-1 bg-clip-content -right-2 cursor-ew-resize active:bg-blue-700 active:dark:bg-blue-600"
      onMouseDown={handleMouseDown}
    />
  );
}
