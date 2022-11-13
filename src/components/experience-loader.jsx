const ExperienceLoader = (props) => {
  const { title, level } = props;

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-sm font-medium tracking-wide text-gray-700">
          {title}
        </p>
        <p className="text-sm font-medium tracking-wide text-gray-700">
          {level}%
        </p>
      </div>
      <div className="mt-4 w-full rounded-sm bg-gray-300">
        <div
          className="h-[5px] rounded-sm bg-primary"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ExperienceLoader;
