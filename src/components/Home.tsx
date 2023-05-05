import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getMovies, IMovie } from "../Util/apis";
import { movieImageName } from "../Util/util";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const HomeWrap = styled.div`
  background-color: #000;
`;

const Loader = styled.div``;

const Banner = styled.div<{ bgphoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${({ bgphoto }) => bgphoto});
  background-size: cover;
  height: 100vh;
  padding-left: 60px;
  color: #fff;
  font-size: 26px;
  p {
    line-height: 1.5;
  }
`;

const Title = styled.h2`
  font-size: 58px;
`;

const OverView = styled.p`
  width: 50%;
  margin-top: 30px;
  font-size: 30px;
`;

const Slider = styled.div`
  position: relative;
  height: 200px;
  top: -100px;
  overflow: hidden;
`;

const SliderRow = styled(motion.div)`
  position: absolute;
  left: 10px;
  right: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
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
  &:hover span {
    opacity: 1;
  }
  span {
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
`;

const sliderVars = {
  invisible: { x: window.outerWidth },
  visible: { x: 0 },
  exit: { x: -window.outerWidth },
};

const Home = () => {
  const { isLoading, data } = useQuery<IMovie>(["movie", "nowPlaying"], getMovies);
  const [sliderIdx, setSliderIdx] = useState(0);
  const sliceNum = 6;
  const [isExit, setIsExit] = useState(false);
  const increaseSliderIdx = () => {
    if (isExit) return;
    setIsExit(true);
    setSliderIdx((prev) => (sliderIdx < 2 ? prev + 1 : 0));
  };
  const toggleExit = () => setIsExit((prev) => !prev);
  return (
    <HomeWrap>
      {isLoading ? (
        <Loader>Loading/...</Loader>
      ) : (
        <>
          <Banner bgphoto={movieImageName(data?.results[0].backdrop_path || "")} onClickCapture={increaseSliderIdx}>
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>

          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleExit}>
              <SliderRow variants={sliderVars} initial="invisible" animate="visible" exit="exit" transition={{ duration: 1 }} key={sliderIdx}>
                {data?.results
                  .slice(1)
                  .slice(sliceNum * sliderIdx, sliceNum * sliderIdx + 6)
                  .map((movie) => (
                    <SliderItem key={movie.id} bgphoto={movieImageName(movie.backdrop_path, "w500")}>
                      <span>{movie.title}</span>
                    </SliderItem>
                  ))}
              </SliderRow>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </HomeWrap>
  );
};

export default Home;
