import { SectionPanel } from "./SectionPanel";
import { SkillsTable } from "./SkillsTable";

const linkClass =
  "w-max text-[10px] lowercase leading-[1.45] text-white underline-offset-2 [white-space-collapse:preserve] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function NameCard() {
  return (
    <div className="border border-solid border-white bg-black px-3 py-2.5 text-white">
      <h1 className="text-center text-[15px] font-bold lowercase tracking-[0.06em] leading-[1.45] text-white [white-space-collapse:preserve]">
        ++ andrew ++
      </h1>
      <p className="mt-1.5 text-center text-[10px] lowercase leading-[1.45] text-white opacity-90 [white-space-collapse:preserve]">
        ai software engineer
      </p>
    </div>
  );
}

function ProfilePhotoBio() {
  return (
    <div className="flex gap-2.5 border border-solid border-white bg-black p-2.5 text-white">
      <img
        src="/profile.JPG"
        alt="Andrew profile photo"
        className="h-[120px] w-[120px] shrink-0 border border-solid border-white object-cover p-1"
        width={120}
        height={120}
      />
      <div className="min-w-0 flex-1">
        <p className="mb-1.5 text-[10px] lowercase leading-[1.45] [white-space-collapse:preserve]">
          ★ currently: building
        </p>
        <p className="text-[10px] lowercase leading-[1.45] [white-space-collapse:preserve]">
          Mood: optimistic
        </p>
      </div>
    </div>
  );
}

function ContactGrid() {
  return (
    <SectionPanel title="contact me" titleAs="h2">
      <div className="grid grid-cols-2 justify-items-start gap-x-2.5 gap-y-1.5 p-2.5">
        <a className={linkClass} href="mailto:andrew.khadder@gmail.com">
          ★ Email
        </a>
        <a
          className={linkClass}
          href="/Andrew_Khadder_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          ★ resume
        </a>
        <a
          className={linkClass}
          href="https://github.com/khandrew1"
          target="_blank"
          rel="noopener noreferrer"
        >
          ★ GitHub
        </a>
        <a
          className={linkClass}
          href="https://www.linkedin.com/in/andrew-khadder-ba3741252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ★ LinkedIn
        </a>
      </div>
    </SectionPanel>
  );
}

export function ProfileColumn() {
  return (
    <div className="flex w-full shrink-0 flex-col gap-3 lg:max-w-[340px]">
      <NameCard />
      <ProfilePhotoBio />
      <ContactGrid />
      <SectionPanel
        title="skills & personal interests"
        titleAs="h2"
        bodyClassName="min-h-0"
      >
        <SkillsTable />
      </SectionPanel>
    </div>
  );
}
