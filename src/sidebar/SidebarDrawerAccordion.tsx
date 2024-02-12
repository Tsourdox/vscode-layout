import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useState } from 'react';

interface Props {
  title: string;
  children?: React.ReactNode;
  noDivider?: boolean;
}

export default function SidebarDrawerAccordion({
  title,
  children,
  noDivider,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className={clsx(
        'flex flex-col overflow-y-auto transition-all',
        isExpanded && 'h-8 flex-1',
        !noDivider && 'border-b-1 border-neutral-300 dark:border-neutral-700',
      )}
    >
      <header
        className="flex cursor-pointer items-center p-1"
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
      >
        {isExpanded ? (
          <ChevronDownIcon className="h-6 w-6" />
        ) : (
          <ChevronRightIcon className="h-6 w-6" />
        )}
        <span className="font-semibold">{title}</span>
      </header>
      {isExpanded && <div className="flex-1 overflow-y-auto">{children}</div>}
    </section>
  );
}
