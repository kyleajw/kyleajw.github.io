import Tag from "./Tag";

export default function Project(props) {
  return (
    <div className="border-l-2 border-neutral-500 p-3">
      <h3 className="text-2xl">{props.name}</h3>
      <p className="text-lg text-neutral-500">{props.description}</p>
      <div className="mt-10 flex flex-row space-x-3">
        <Tag tag={props.stack[0]} />
        <Tag tag={props.stack[1]} />
      </div>
    </div>
  );
}
