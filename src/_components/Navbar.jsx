import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-end w-full space-x-5">
      <Link href="/" className="hover:text-[#ff1b6b] duration-150">
        <div>home</div>
      </Link>
      <Link href="/projects" className="hover:text-[#ff1b6b] duration-150">
        <div>projects</div>
      </Link>
    </div>
  );
}
