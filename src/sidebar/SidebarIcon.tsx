import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function SidebarIcon({ icon, isActive, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'box-content h-10 w-10 flex-none cursor-pointer border-l-2 p-4',
        isActive &&
          'border-blue-700 text-neutral-700 dark:border-blue-600 dark:text-neutral-300',
      )}
    >
      {icon}
    </div>
  );
}
