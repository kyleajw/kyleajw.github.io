import Project from "@/_components/Project"
import Footer from "@/_components/Footer"

export default function Page() {
    return <div className="">
        <h2>/projects</h2>
        <div className="flex flex-col space-y-8 mt-8 mb-8">
            <Project name="kyleajw.github.io" description="personal website" link="https://github.com/kyleajw/kyleajw.github.io" stack={["nextjs", "html", "css", "js"]} />
        </div>
    </div>
}