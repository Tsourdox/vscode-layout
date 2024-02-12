import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import SidebarDrawerAccordion from '../SidebarDrawerAccordion';

export default function Explorer() {
  return (
    <section className="flex h-full flex-1 flex-col">
      <header className="flex justify-between px-7 py-4">
        <span>EXPLORER</span>
        <EllipsisHorizontalIcon className="h-6 w-6" />
      </header>

      <SidebarDrawerAccordion title="VSCODE-LAYOT">
        {Array.from(Array(150)).map((_, i) => (
          <p key={i} className="py-1 pl-12">
            file_dummy_{i}.tsx
          </p>
        ))}
      </SidebarDrawerAccordion>

      <SidebarDrawerAccordion title="OUTLINE" />
      <SidebarDrawerAccordion title="TIMELINE" noDivider />
    </section>
  );
}
