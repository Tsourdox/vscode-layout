import {
  Cog8ToothIcon,
  DocumentDuplicateIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  ShareIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import SidebarDrawer from './SidebarDrawer';
import SidebarIcon from './SidebarIcon';
import Explorer from './drawer-content/Explorer';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <aside className="flex flex-col overflow-y-auto border-r-1 bg-neutral-100 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-700">
        <SidebarIcon
          icon={<DocumentDuplicateIcon />}
          isActive={isSidebarOpen}
          onClick={() => setIsSidebarOpen((isOpen) => !isOpen)}
        />
        <SidebarIcon icon={<MagnifyingGlassIcon />} />
        <SidebarIcon icon={<ShareIcon />} />
        <SidebarIcon icon={<PlayIcon />} />
        <SidebarIcon icon={<Squares2X2Icon />} />
        <SidebarIcon icon={<EllipsisHorizontalIcon />} />
        <div className="flex-1" />
        <SidebarIcon icon={<UserCircleIcon />} />
        <SidebarIcon icon={<Cog8ToothIcon />} />
      </aside>
      {isSidebarOpen && (
        <SidebarDrawer>
          {/* Explorer hard coded for now... */}
          <Explorer />
        </SidebarDrawer>
      )}
    </>
  );
}
