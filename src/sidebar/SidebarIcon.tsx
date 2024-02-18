import clsx from 'clsx';
import { ReactNode } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

interface Props {
  to: string;
  icon: ReactNode;
  isOpen?: boolean;
  onToggle?: (open?: true) => void;
}

export default function SidebarIcon({ to, icon, isOpen, onToggle }: Props) {
  const match = useMatch(to);

  const handleClick = () => {
    if (!onToggle) return;
    if (match?.pathname) {
      onToggle();
    } else {
      onToggle(true);
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) =>
        clsx(
          'box-content h-10 w-10 flex-none cursor-pointer border-l-2 border-transparent p-4',
          isOpen &&
            isActive &&
            'border-blue-700 text-neutral-700 dark:border-blue-600 dark:text-neutral-300',
        )
      }
    >
      {icon}
    </NavLink>
  );
}
