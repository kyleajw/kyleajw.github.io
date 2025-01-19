export default function Footer() {
  return (
    <div className="absolute bottom-5 right-5 flex flex-row space-x-3">
      <a
        className="text-[#6d6d6d] hover:text-white duration-150"
        href="https://github.com/kyleajw"
        target="_blank"
      >
        github
      </a>
      <a
        className="text-[#6d6d6d] hover:text-white duration-150"
        href="https://x.com/kyle_ajw"
        target="_blank"
      >
        x.com
      </a>
      <a
        className="text-[#6d6d6d] hover:text-white duration-150"
        href="https://www.linkedin.com/in/kyle-whelan"
        target="_blank"
      >
        linkedin
      </a>
      {/* <a className="text-[#6d6d6d]" href="https://github.com/kyleajw">email</a> */}
    </div>
  );
}
