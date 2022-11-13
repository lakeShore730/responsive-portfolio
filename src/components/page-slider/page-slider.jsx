import "./page-slider.css";
import { useEffect, useState } from "react";
import cn from "classnames";

function removeClassNames(element, classList) {
  classList.forEach((item) => {
    element.classList.remove(item);
  });
}

function addClassNames(element, classList) {
  classList.forEach((item) => {
    element.classList.add(item);
  });
}

const settingState = {
  scrollValue: 0,
  hasScroll: false,
  wheelValue: 0,
};

const PageSlider = (props) => {
  const {
    children,
    scrollMotion = 40,
    sleepWheel = 500,
    currentActivePage = null,
    setCurrentActivePage,
    displayNavigationButtons = true,
  } = props;

  const [activePage, setActivePage] = useState(0);
  const [isWheelActivated, setIsWheelActivated] = useState(true);
  const [sliderSettings, setSliderSettings] = useState(settingState);

  const [touchStart, setTouchStart] = useState(); // State for the move (for the mobile touch only)

  // Change active page from the outside of the component
  useEffect(() => {
    changeActivePage(currentActivePage || 0);
  }, [currentActivePage]);

  useEffect(() => {
    const element = document.getElementById(`item${activePage}`);
    const hasNotScroll = element.scrollHeight === element.clientHeight;

    if (!hasNotScroll) {
      element.scrollTop = 1;
    }

    setSliderSettings({
      ...sliderSettings,
      hasScroll: !hasNotScroll,
      scrollValue: 0,
      wheelValue: 0,
    });

    const enableWheel = setTimeout(() => {
      setIsWheelActivated(true);
    }, sleepWheel);

    setCurrentActivePage(activePage);

    return () => enableWheel;
  }, [activePage]);

  useEffect(() => {
    if (!isWheelActivated) return;

    if (
      (sliderSettings.scrollValue === 1 && sliderSettings.wheelValue === 1) ||
      (!sliderSettings.hasScroll && sliderSettings.wheelValue === 1)
    ) {
      if (activePage === children.length - 1) return;

      changeActivePage(activePage + 1);
      setIsWheelActivated(false);
    } else if (
      (sliderSettings.scrollValue === -1 && sliderSettings.wheelValue === -1) ||
      (!sliderSettings.hasScroll && sliderSettings.wheelValue === -1)
    ) {
      if (activePage === 0) return;
      setIsWheelActivated(false);
      changeActivePage(activePage - 1);
    }
  }, [sliderSettings]);

  const changeActivePage = (pageNumber) => {
    if (
      pageNumber < 0 ||
      pageNumber >= children.length ||
      pageNumber === activePage
    ) {
      return;
    }

    const previousActivePage = document.getElementById(`item${activePage}`);
    const currentActivePage = document.getElementById(`item${pageNumber}`);
    const currentStackPage = document.getElementById(`item${pageNumber + 1}`);

    for (let i = 0; i < children.length; i++) {
      const element = document.getElementById(`item${i}`);

      removeClassNames(element, [
        "top-page",
        "active-page",
        "stack-page",
        "bottom-page",
        "add-transition",
      ]);

      if (i === pageNumber) addClassNames(element, ["active-page"]);
      else if (i > pageNumber + 1) addClassNames(element, ["bottom-page"]);
      else if (i < pageNumber) addClassNames(element, ["top-page"]);
    }

    if (pageNumber > activePage) {
      if (currentStackPage) addClassNames(currentStackPage, ["stack-page"]);
      addClassNames(previousActivePage, ["add-transition", "top-page"]);
    } else {
      if (currentStackPage) addClassNames(previousActivePage, ["stack-page"]);
      addClassNames(currentActivePage, ["add-transition", "active-page"]);
    }

    setActivePage(pageNumber);
  };

  // Function to handle scroll event
  const onScrollHandler = (e) => {
    const getScrollValue = () => {
      const element = e.target;

      if (element.scrollTop === 0) return -1;

      if (
        element.offsetHeight + element.scrollTop + 1 >=
        element.scrollHeight
      ) {
        return 1;
      }

      return 0;
    };

    setSliderSettings({
      ...sliderSettings,
      scrollValue: getScrollValue(),
      wheelValue: 0,
    });
  };

  // Function to handle wheel event
  const onWheelHandler = (e) => {
    if (
      (sliderSettings.scrollValue === 0 && sliderSettings.hasScroll) ||
      !isWheelActivated
    ) {
      return;
    }

    const deltaY = e.deltaY;

    if (
      (deltaY < 0 && Math.abs(deltaY) < scrollMotion) ||
      (deltaY >= 0 && deltaY < scrollMotion)
    ) {
      setSliderSettings({ ...sliderSettings, wheelValue: 0 });
      return;
    }

    setSliderSettings({ ...sliderSettings, wheelValue: deltaY > 0 ? 1 : -1 });
  };

  // Function to handle on touch start event (for the mobile touch only)
  const onTouchStartHandler = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  // Function to handle on touch end event (for the mobile touch only)
  const onTouchEndHandler = (e) => {
    const endTouchValue = e.changedTouches[0].clientY;

    if (
      touchStart === endTouchValue ||
      Math.abs(touchStart - endTouchValue) < 50
    )
      return;
    if (sliderSettings.scrollValue === 0 && sliderSettings.hasScroll) return;

    if (touchStart > endTouchValue) {
      setSliderSettings({ ...sliderSettings, wheelValue: 1 });
    } else {
      setSliderSettings({ ...sliderSettings, wheelValue: -1 });
    }
  };

  return (
    <div>
      {children.map((item, i) => (
        <div
          key={i}
          id={`item${i}`}
          className={cn("page", {
            "active-page": i === 0,
            "stack-page": i === 1,
            "bottom-page": i !== 0 && i !== 1,
          })}
          onScroll={onScrollHandler}
          onWheel={onWheelHandler}
          onTouchStart={onTouchStartHandler}
          onTouchEnd={onTouchEndHandler}
        >
          {item}
        </div>
      ))}

      {displayNavigationButtons ? (
        <div className="nav-container">
          {Array.from(Array(children.length).keys()).map((i) => (
            <div
              key={i}
              className={cn("nav-item", {
                "active-nav-item": i === activePage,
                "inactive-nav-item": i !== activePage,
              })}
              onClick={() => changeActivePage(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PageSlider;
