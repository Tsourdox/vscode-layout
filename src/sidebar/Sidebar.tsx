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
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleIconClick = () => {
    setIsDrawerOpen((isOpen) => !isOpen);
    if (!isDrawerOpen && drawerWidth === 0) {
      setDrawerWidth(250);
    }
  };

  const handleResize = (width: number) => {
    setDrawerWidth(width);
    setIsDrawerOpen(
      (isOpen) => (isOpen && width !== 0) || (!isOpen && width > 0),
    );
  };

  return (
    <>
      <aside className="border-r-1 flex flex-col overflow-y-auto border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900">
        <SidebarIcon
          icon={<DocumentDuplicateIcon />}
          isActive={isDrawerOpen}
          onClick={handleIconClick}
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
      <SidebarDrawer
        isOpen={isDrawerOpen}
        width={drawerWidth}
        onResize={handleResize}
      >
        {/* Explorer hard coded for now... */}
        <Explorer />
      </SidebarDrawer>
    </>
  );
}
