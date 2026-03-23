import { BlogPanel } from "./BlogPanel";
import { BlurbsPanel } from "./BlurbsPanel";
import { ProjectSpace } from "./ProjectSpace";

export function MainColumn() {
  return (
    <div className="flex min-w-0 w-full flex-1 flex-col gap-3">
      <BlogPanel />
      <BlurbsPanel />
      <ProjectSpace />
    </div>
  );
}
