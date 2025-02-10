import Footer from "@/_components/Footer";
import Project from "@/_components/Project";
import Link from "next/link";
export default function Home() {
  return <>
    <div className="">
      <h2 className="">kyle-ajw</h2>
      <div className="text-neutral-500 text-lg">united kingdom | student</div>
      <div className="md:w-1/2 text-pretty md:text-lg mt-3">twenty-year-old computer science undergraduate. learning c++ (and some web tech), forced to use Java.</div>
    </div>

    <div className="mt-4 mb-1">
      <h2>projects</h2>
      <div className="flex flex-col space-y-8 mt-8">
        <Project name="kyleajw.github.io" description="personal website" link="https://github.com/kyleajw/kyleajw.github.io" stack={["nextjs", "html", "css", "js"]} />
        <Project name="type-tester" description="monkeytype-inspired typing game" link="https://kyleajw.github.io/type-tester/" stack={["html", "css", "js"]} />      </div>
      <Link href="/projects">
        <div className="hover:text-[#ff1b6b] duration-150 inline-block mt-3">view all</div>
      </Link>

    </div>
    <Footer />
  </>;
}
// new deploy