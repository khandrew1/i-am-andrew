import { SectionPanel } from "./SectionPanel";

/** Extra Tailwind classes for logos that read small at `object-contain` (tighten padding + scale up). */
type Project = {
  name: string;
  logo: string;
  link: string;
  logoClass?: string;
  /** Slightly less padding so scaled logos use the box */
  logoPad?: "default" | "tight";
};

const projects: Project[] = [
  {
    name: "mcpjam",
    logo: "/mcpjam_dark.png",
    link: "https://github.com/MCPJam/inspector",
  },
  {
    name: "frame",
    logo: "/frame.png",
    link: "https://github.com/khandrew1/frame",
    logoClass: "scale-[1.55] origin-center",
    logoPad: "tight",
  },
  {
    name: "designverse 2025",
    logo: "/designverse.svg",
    link: "https://designverse2025.vercel.app/",
  },
  {
    name: "vault mcp",
    logo: "/vault.png",
    link: "https://github.com/khandrew1/vault-mcp",
    logoClass: "scale-[1.55] origin-center",
    logoPad: "tight",
  },
  {
    name: "usher mcp",
    logo: "/usher.png",
    link: "https://github.com/khandrew1/usher-mcp",
    logoClass: "scale-[1.55] origin-center",
    logoPad: "tight",
  },
];

export function ProjectSpace() {
  return (
    <SectionPanel title="Project Space" titleAs="h2">
      <div className="grid grid-cols-2 gap-2.5 p-3 lg:grid-cols-6 lg:grid-rows-2">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
          <ProjectSlot project={projects[0]} />
        </div>
        <div className="lg:col-span-2 lg:col-start-3 lg:row-start-1">
          <ProjectSlot project={projects[1]} />
        </div>
        <div className="lg:col-span-2 lg:col-start-5 lg:row-start-1">
          <ProjectSlot project={projects[2]} />
        </div>
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2">
          <ProjectSlot project={projects[3]} />
        </div>
        <div className="lg:col-span-2 lg:col-start-4 lg:row-start-2">
          <ProjectSlot project={projects[4]} />
        </div>
      </div>
    </SectionPanel>
  );
}

function ProjectSlot({ project }: { project: Project }) {
  const pad = project.logoPad === "tight" ? "p-1" : "p-2";

  return (
    <div>
      <div className="mb-1 text-center text-[9px] lowercase leading-[1.45] [white-space-collapse:preserve]">
        {project.name}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label={`${project.name} — open project`}
      >
        <div
          className={`flex h-[72px] items-center justify-center overflow-hidden border border-solid border-white bg-black transition-opacity group-hover:opacity-95 ${pad}`}
        >
          <img
            src={project.logo}
            alt=""
            className={`max-h-full max-w-full object-contain ${project.logoClass ?? ""}`}
          />
        </div>
      </a>
    </div>
  );
}
