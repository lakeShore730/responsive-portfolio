import cn from "classnames";

const Lining = (props) => {
  const { type = "primary", className = "" } = props;

  if (type === "primary") {
    return (
      <div className={cn(className)}>
        <div className="flex justify-center gap-2">
          <div className="w-[50px] border-b-[3px] border-primary"></div>
          <div className="w-[3px] border-b-[3px] border-primary"></div>
          <div className="w-[3px] border-b-[3px] border-primary"></div>
          <div className="w-[50px] border-b-[3px] border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      <div className="flex justify-start gap-2">
        <div className="w-[50px] border-b-[3px] border-primary"></div>
        <div className="w-[3px] border-b-[3px] border-primary"></div>
        <div className="w-[3px] border-b-[3px] border-primary"></div>
        <div className="w-[3px] border-b-[3px] border-primary"></div>
      </div>
    </div>
  );
};

export default Lining;
