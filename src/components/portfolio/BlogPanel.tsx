import { SectionPanel } from "./SectionPanel";

export function BlogPanel() {
  return (
    <SectionPanel title="Latest from the blog" titleAs="h2">
      <div className="px-3 py-2.5">
        <p className="text-[10px] lowercase leading-[1.45] text-white [white-space-collapse:preserve]">
          coming soon...
        </p>
      </div>
    </SectionPanel>
  );
}
