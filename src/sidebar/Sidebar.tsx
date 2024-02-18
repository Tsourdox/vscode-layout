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
import { PropsWithChildren, useState } from 'react';
import SidebarDrawer from './SidebarDrawer';
import SidebarIcon from './SidebarIcon';

export default function Sidebar({ children }: PropsWithChildren) {
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = (open?: true) => {
    setIsDrawerOpen((isOpen) => open || !isOpen);
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
          to="/explorer"
          icon={<DocumentDuplicateIcon />}
          isOpen={isDrawerOpen}
          onToggle={handleToggleDrawer}
        />
        <SidebarIcon
          to="/search"
          icon={<MagnifyingGlassIcon />}
          isOpen={isDrawerOpen}
          onToggle={handleToggleDrawer}
        />
        <SidebarIcon
          to="/source-control"
          icon={<ShareIcon />}
          isOpen={isDrawerOpen}
          onToggle={handleToggleDrawer}
        />
        <SidebarIcon
          to="/run-and-debug"
          icon={<PlayIcon />}
          isOpen={isDrawerOpen}
          onToggle={handleToggleDrawer}
        />
        <SidebarIcon
          to="/extensions"
          icon={<Squares2X2Icon />}
          isOpen={isDrawerOpen}
          onToggle={handleToggleDrawer}
        />
        <SidebarIcon to="" icon={<EllipsisHorizontalIcon />} />
        <div className="flex-1" />
        <SidebarIcon to="" icon={<UserCircleIcon />} />
        <SidebarIcon to="" icon={<Cog8ToothIcon />} />
      </aside>
      <SidebarDrawer
        isOpen={isDrawerOpen}
        width={drawerWidth}
        onResize={handleResize}
      >
        {children}
      </SidebarDrawer>
    </>
  );
}
