import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import useWindowSize from "../../utils/use-window-size";

const MultiItemsSlider = (props) => {
  const { children } = props;
  const { width } = useWindowSize();
  const [sliderCount, setSliderCount] = useState(2);

  useEffect(() => {
    if (width < 640) setSliderCount(1);
    else if (width >= 640 && width < 1024) setSliderCount(2);
    else if (width >= 1024 && width < 1280) setSliderCount(3);
    else setSliderCount(4);
  }, [width]);

  return (
    <Swiper
      slidesPerView={sliderCount}
      spaceBetween={sliderCount <= 2 ? 15 : 20}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mt-8"
    >
      {children.map((item, i) => {
        return <SwiperSlide key={i}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default MultiItemsSlider;
