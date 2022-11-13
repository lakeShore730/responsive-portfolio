import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { X } from "react-feather";
import useWindowSize from "../utils/use-window-size";

const NavigationDrawer = (props) => {
  const { isOpened, setIsOpened, setActivePage } = props;
  const { width } = useWindowSize();

  const toggleDrawer = () => setIsOpened((prevState) => !prevState);

  const changePage = (pageNumber) => {
    toggleDrawer();
    setTimeout(() => {
      setActivePage(pageNumber);
    }, 300);
  };

  return (
    <Drawer
      open={isOpened}
      onClose={toggleDrawer}
      direction="right"
      size={width < 400 ? 300 : width < 700 && width > 400 ? 350 : 400}
    >
      <div className="p-5 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
            Pages
          </h1>
          <X
            className="cursor-pointer text-gray-700 hover:text-red-700"
            onClick={toggleDrawer}
          />
        </div>

        <div className="flex flex-col space-y-2 mt-5">
          <p
            className="cursor-pointer p-2 rounded-sm text-gray-800  hover:bg-lightPrimary"
            onClick={() => changePage(0)}
          >
            Home
          </p>
          <p
            className="cursor-pointer p-2 rounded-sm text-gray-800  hover:bg-lightPrimary"
            onClick={() => changePage(1)}
          >
            About Me
          </p>
          <p
            className="cursor-pointer p-2 rounded-sm text-gray-800  hover:bg-lightPrimary"
            onClick={() => changePage(2)}
          >
            Resume
          </p>
          <p
            className="cursor-pointer p-2 rounded-sm text-gray-800  hover:bg-lightPrimary"
            onClick={() => changePage(3)}
          >
            Services
          </p>
          <p
            className="cursor-pointer p-2 rounded-sm text-gray-800  hover:bg-lightPrimary"
            onClick={() => changePage(4)}
          >
            Work
          </p>
          <p
            className="cursor-pointer p-2 rounded-sm text-gray-800  hover:bg-lightPrimary"
            onClick={() => changePage(5)}
          >
            Contact me
          </p>
        </div>
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
