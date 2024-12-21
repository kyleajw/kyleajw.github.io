import Project from "@/_components/Project";

export default function Home() {
  return <>
    <div className="">
      <h2 className="">kyle-ajw</h2>
      <div className="text-neutral-500 text-lg">united kingdom | student</div>
      <div className="w-1/3 text-pretty text-lg mt-5">twenty-year-old computer science undergraduate. learning c++ (and some web tech), forced to use Java.</div>
    </div>

    <div className="mt-10">
      <h2>projects</h2>
      <div className="flex flex-col space-y-10 mt-10">
        <Project name="rust-compiler" description="it's so cool and great" link="/" stack={["rust", "c++"]} />
        <Project name="rust-compiler" description="it's so cool and great" link="/" stack={["rust", "c++"]} />
        <Project name="rust-compiler" description="it's so cool and great" link="/" stack={["rust", "c++"]} />


      </div>
      <div className="mt-5">view all</div>

    </div>
  </>;
}
// new deploy