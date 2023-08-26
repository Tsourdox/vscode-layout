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
      className={`flex-none w-10 h-10 p-4 box-content cursor-pointer border-l-2 ${
        isActive
          ? 'text-neutral-700 dark:text-neutral-300 border-blue-700 dark:border-blue-600'
          : 'border-transparent'
      }`}
    >
      {icon}
    </div>
  );
}
