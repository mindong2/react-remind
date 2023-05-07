import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../Util/apis";
import { movieImageName } from "../Util/util";
import { SliderCont, SliderRow, SliderItem, SlideTitle } from "../style/SliderStyle";
const sliderVars = {
  invisible: (isBack: boolean) => ({ x: !isBack ? window.outerWidth : -window.outerWidth }),
  visible: { x: 0 },
  exit: (isBack: boolean) => ({ x: isBack ? window.outerWidth : -window.outerWidth }),
};

const slideItemVars = {
  hover: { scale: 1.3, transition: { duration: 0.3, delay: 0.3 } },
};

interface IData {
  data?: IMovie;
  dataname?: string;
  tv?: string;
}

const Slider = ({ data, dataname, tv }: IData) => {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [back, setBack] = useState(false);
  const sliceNum = 6;
  const increaseSliderIdx = () => {
    setSliderIdx((prev) => (sliderIdx < 2 ? prev + 1 : 0));
    setBack(false);
  };
  const decreaseSliderIdx = () => {
    setSliderIdx((prev) => (sliderIdx > 0 ? prev - 1 : 2));
    setBack(true);
  };

  const navigate = useNavigate();

  const ModalLoad = (movieId: number) => {
    // Home과 tv일때 구분
    if (tv) {
      navigate(`/tvModal/${movieId}`);
    } else {
      navigate(`/movie/${movieId}`);
    }
  };

  return (
    <SliderCont>
      <SlideTitle>{dataname}</SlideTitle>
      <AnimatePresence initial={false} custom={back}>
        <SliderRow variants={sliderVars} custom={back} initial="invisible" animate="visible" exit="exit" transition={{ duration: 1 }} key={sliderIdx}>
          <div className="slideBtn prev" onClick={decreaseSliderIdx}>
            &lt;
          </div>
          <div className="slideBtn next" onClick={increaseSliderIdx}>
            &gt;
          </div>
          {data?.results
            .slice(1)
            .slice(sliceNum * sliderIdx, sliceNum * sliderIdx + 6)
            .map((movie) => (
              <SliderItem
                key={movie.id}
                onClick={() => ModalLoad(movie.id)}
                variants={slideItemVars}
                whileHover="hover"
                bgphoto={movieImageName(movie.backdrop_path, "w500")}
                layoutId={movie.id.toString()}
              >
                <span>{movie.title}</span>
              </SliderItem>
            ))}
        </SliderRow>
      </AnimatePresence>
    </SliderCont>
  );
};

export default Slider;
