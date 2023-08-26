import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import SidebarDrawerAccordion from '../SidebarDrawerAccordion';

export default function Explorer() {
  return (
    <section className="flex flex-col flex-1">
      <header className="flex justify-between py-4 px-7">
        <span>EXPLORER</span>
        <EllipsisHorizontalIcon className="w-6 h-6" />
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
