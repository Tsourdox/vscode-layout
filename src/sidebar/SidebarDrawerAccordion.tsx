import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
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
      className={`flex flex-col transition-all ${isExpanded && 'flex-1 h-8'} ${
        !noDivider && 'border-b-1 border-neutral-300 dark:border-neutral-700'
      }`}
    >
      <header
        className="flex items-center p-1 cursor-pointer"
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
      >
        {isExpanded ? (
          <ChevronDownIcon className="w-6 h-6" />
        ) : (
          <ChevronRightIcon className="w-6 h-6" />
        )}
        <span className="font-semibold">{title}</span>
      </header>
      {isExpanded && <div className="flex-1 overflow-y-auto">{children}</div>}
    </section>
  );
}
