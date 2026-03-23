import type { ReactNode } from "react";

type SectionPanelProps = {
  title?: string;
  titleAs?: "h2" | "h3";
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

export function SectionPanel({
  title,
  titleAs: TitleTag = "h2",
  children,
  className = "",
  bodyClassName = "",
}: SectionPanelProps) {
  return (
    <section
      className={`bg-black text-white [border-style:solid] border border-white ${className}`}
    >
      {title != null && title !== "" && (
        <div className="border-b border-solid border-white px-2.5 py-1.5">
          <TitleTag className="text-[10px] font-bold lowercase leading-[1.45] text-white [white-space-collapse:preserve]">
            {title}
          </TitleTag>
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </section>
  );
}
