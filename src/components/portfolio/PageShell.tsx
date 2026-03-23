import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen px-3 py-4 sm:px-4 md:py-6">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-3 lg:flex-row lg:items-start lg:gap-[18px]">
        {children}
      </div>
    </div>
  );
}
