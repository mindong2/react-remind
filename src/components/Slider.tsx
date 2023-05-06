import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { IMovie, IMovieResult } from "../Util/apis";
import { movieImageName } from "../Util/util";
const SliderCont = styled.div`
  position: relative;
  height: 200px;
  top: -100px;
  margin-top: 20px;
`;

const SliderRow = styled(motion.div)`
  position: absolute;
  left: 10px;
  right: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  .slideBtn {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    font-size: 40px;
    color: ${({ theme }) => theme.white.darker};
    opacity: 0;
    z-index: 99;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
`;

const SliderItem = styled(motion.div)<{ bgphoto: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 30px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${({ bgphoto }) => bgphoto});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  word-break: keep-all;
  font-size: 28px;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }

  &:hover span {
    opacity: 1;
  }
  span {
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
`;
const sliderVars = {
  invisible: (isBack: boolean) => ({ x: !isBack ? window.outerWidth : -window.outerWidth }),
  visible: { x: 0 },
  exit: (isBack: boolean) => ({ x: isBack ? window.outerWidth : -window.outerWidth }),
};

const slideItemVars = {
  hover: { scale: 1.3, transition: { duration: 0.3, delay: 0.3 } },
};

const Slider = ({ data }: any) => {
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
  const modalMatch = useMatch(`/movie/:movieId`);

  const ModalLoad = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <SliderCont>
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
            .map((movie: any) => (
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
