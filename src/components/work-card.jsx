import cn from "classnames";

const WorkCard = (props) => {
  const { title, description, work, link, className = "" } = props;

  return (
    <div
      className={cn(
        "relative p-5 min-h-[230px] mb-[1px] border-[1px] border-gray-800",
        className
      )}
    >
      <div className="absolute text-[14px] px-2 py-[1px] top-0 right-[-2px] rotate-12 text-white bg-primary">
        {work}
      </div>
      <h1 className="text-[16px] font-semibold text-gray-800">{title}</h1>
      <p className="mt-4 text-[15px]  tracking-wide leading-7 text-gray-700">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-[14px] mt-4 text-blue-800"
      >
        View page
      </a>
    </div>
  );
};

export default WorkCard;
