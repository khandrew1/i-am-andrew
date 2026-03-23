const rows = [
  {
    label: "skills",
    value: "typescript, react, hono, next.js, tailwindcss",
  },
  {
    label: "hobbies",
    value: "dj, gym, running, tv, video games",
  },
  {
    label: "music",
    value: "pop punk, edm, trap, kpop, rap",
  },
] as const;

/** Matches Paper: each category is a full-width white label band, then a full-width value band (not side‑by‑side columns). */
export function SkillsTable() {
  return (
    <div className="flex flex-col">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-col">
          <div className="border-b border-solid border-white bg-white px-2">
            <span className="text-[10px] font-bold lowercase leading-tight text-black [white-space-collapse:preserve]">
              {row.label}
            </span>
          </div>
          <div className="border-b border-solid border-white bg-black px-2 py-1.5">
            <p className="text-[10px] lowercase leading-[1.45] text-white [white-space-collapse:preserve]">
              {row.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
