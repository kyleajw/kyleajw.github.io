import Project from "@/_components/Project"
import Footer from "@/_components/Footer"

export default function Page() {
    return <div className="">
        <h2>/projects</h2>
        <div className="flex flex-col space-y-8 mt-8 mb-8">
            <Project name="rust-compiler" description="it's so cool and great" link="/" stack={["c++"]} />
            <Project name="rust-compiler" description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" link="/" stack={["rust"]} />
            <Project name="rust-compiler" description="it's so cool and great" link="/" stack={["rust", "c++"]} />
            <Project name="rust-compiler" description="it's so cool and great" link="/" stack={["c++"]} />
            <Project name="rust-compiler" description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" link="/" stack={["rust"]} />
            <Project name="rust-compiler" description="it's so cool and great" link="/" stack={["rust", "c++"]} />
        </div>
    </div>
}