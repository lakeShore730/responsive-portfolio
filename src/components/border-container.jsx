import { Fragment } from "react";

const BorderContainer = (props) => {
  const { title, items } = props;

  return (
    <div className="relative">
      <p className="absolute left-[40px] top-[-5px] text-[16px] font-bold tracking-wide text-gray-800">
        {title}
      </p>
      <div className="w-[14px] h-[14px] rounded-full bg-primary"></div>
      <div className="border-l-[1px] ml-[7px] border-gray-900">
        {items.map((item) => (
          <Fragment key={item.id}>
            <div className="flex items-center pt-10">
              <div className="w-[35px] border-t-[1px] border-gray-900" />

              <div className="flex items-center gap-4">
                <div className="flex-none">
                  <item.icon
                    size={30}
                    className="p-[5px] border rounded-full text-primary border-darkPrimary"
                  />
                </div>

                <div className="grow">
                  <h3 className="text-[16px] font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="tracking-wide text-[14px] mt-1 text-gray-800">
                    {item.subtitle}{" "}
                    {item.date && (
                      <span className="text-[12px] text-gray-700">
                        ({item.date})
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <p className="ml-[50px] mt-5 tracking-wide leading-7 text-gray-800">
              {item.description}
            </p>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default BorderContainer;
