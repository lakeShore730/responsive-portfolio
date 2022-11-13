import { useState } from "react";
import { AlignRight } from "react-feather";
import NavigationDrawer from "../../navigation-drawer";

const Header = ({ setActivePage }) => {
  const [isNavDrawerOpened, setIsNavDrawerOpened] = useState(false);

  return (
    <>
      <div className="fixed z-50 top-[5px] md:top-[20px] right-[5px] md:right-[18px]">
        <AlignRight
          className="cursor-pointer"
          onClick={() => setIsNavDrawerOpened(true)}
        />
      </div>

      <NavigationDrawer
        isOpened={isNavDrawerOpened}
        setIsOpened={setIsNavDrawerOpened}
        setActivePage={setActivePage}
      />
    </>
  );
};

export default Header;
