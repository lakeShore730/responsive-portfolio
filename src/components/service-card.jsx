import { useState } from "react";
import cn from "classnames";

const ServiceCard = (props) => {
  const { Icon, title, description, className = "" } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={cn(
        "min-h-[250px] p-5 border-[1px] border-gray-900",
        className,
        {
          "hover:bg-lightPrimary text-gray-800": !isHover,
          "hover:bg-lightPrimary text-gray-900": isHover,
        }
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Icon
        size={24}
        className={cn({
          "text-primary": !isHover,
          "text-gray-900": isHover,
        })}
      />
      <h1 className="mt-6 text-[16px] font-semibold text-gray-800">{title}</h1>
      <p className="mt-4 text-[15px] text-gray-800">{description}</p>
    </div>
  );
};

export default ServiceCard;
