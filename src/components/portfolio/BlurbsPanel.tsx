import { SectionPanel } from "./SectionPanel";

export function BlurbsPanel() {
  return (
    <SectionPanel title="Blurbs" titleAs="h2">
      <div className="flex flex-col gap-3.5 p-3 text-white sm:flex-row sm:flex-wrap">
        <img
          src="/hero.jpg"
          alt="Andrew"
          className="mx-auto h-[140px] w-full max-w-[200px] shrink-0 border border-solid border-white object-cover sm:mx-0 sm:h-[140px] sm:w-[200px]"
          width={200}
          height={140}
        />
        <div className="min-w-0 flex-1 text-white sm:min-w-[200px]">
          <h3 className="mb-1.5 text-[10px] font-bold lowercase leading-[1.45] text-white [white-space-collapse:preserve]">
            WHO AM I
          </h3>
          <p className="text-justify text-[10px] lowercase leading-[1.45] text-white [white-space-collapse:preserve]">
            i am andrew. i&apos;m an ai software engineer with a passion for the
            front end. i love to make stuff to show off and brag about it.
            i&apos;m loud about what i want and i know what i&apos;m about.
            love hanging out with everyone, contact me if you want just want to
            chill.
          </p>
          <h4 className="mt-2.5 text-[10px] font-bold lowercase leading-[1.45] text-white [white-space-collapse:preserve]">
            Who I&apos;d like to meet
          </h4>
          <p className="mt-1 text-[10px] lowercase leading-[1.45] text-white [white-space-collapse:preserve]">
            Builders who care about craft, weird web experiments, and anyone
            shipping in public. †
          </p>
        </div>
      </div>
    </SectionPanel>
  );
}
