import Tag from "./Tag";

export default function Project(props) {
  const projectStack = props.stack.map((technology, index) => {
    return <Tag key={index} tag={technology} />;
  });

  return (
    <a href={props.link} target="_blank" className="md:w-1/2 group">
      <div className="border-l-2 border-neutral-500 p-3">
        <h3 className="text-xl md:text-2xl inline-block group-hover:bg-gradient-to-r group-hover:from-[#ff1b6b] group-hover:to-[#3D5CFB] group-hover:text-transparent group-hover:bg-clip-text duration-150">
          {props.name}
        </h3>
        <p className="md:text-lg text-neutral-500 text-wrap break-words mt-2">
          {props.description}
        </p>
        <div className="mt-14 flex flex-row space-x-3">{...projectStack}</div>
      </div>
    </a>
  );
}
