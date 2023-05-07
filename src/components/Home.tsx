import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { getComeMovies, getMovies, getPopMovies, getRateMovies, IMovie } from "../Util/apis";
import { movieImageName } from "../Util/util";
import { useMatch } from "react-router-dom";
import Slider from "./Slider";
import Modal from "./Modal";
import { HomeWrap, Banner, Title, OverView } from "../style/CommonStyle";
import Spinner from "./Loading";
const Home = () => {
  const { data: movieData } = useQuery<IMovie>(["movie", "nowPlaying"], getMovies);
  const { data: popData } = useQuery<IMovie>(["popMovie", "popular"], getPopMovies);
  const { data: rateData } = useQuery<IMovie>(["rateMovie", "rate"], getRateMovies);
  const { data: comeData } = useQuery<IMovie>(["comeMovie", "come"], getComeMovies);

  const allData = [
    ...(movieData?.results ? movieData?.results : []),
    ...(popData?.results ? popData?.results : []),
    ...(rateData?.results ? rateData?.results : []),
    ...(comeData?.results ? comeData?.results : []),
  ];

  const modalMatch = useMatch(`/movie/:movieId`);

  return (
    <Suspense fallback={<Spinner />}>
      <HomeWrap>
        <>
          <Banner bgphoto={movieImageName(movieData?.results[0].backdrop_path || "")}>
            <Title>{movieData?.results[0].title}</Title>
            <OverView>{movieData?.results[0].overview}</OverView>
          </Banner>

          <Slider dataname="현재 상영중인 영화" data={movieData}></Slider>
          <Slider dataname="평점이 높은 영화" data={rateData}></Slider>
          <Slider dataname="인기 영화" data={popData}></Slider>
          <Slider dataname="개봉 예정 영화" data={comeData}></Slider>

          {modalMatch ? <Modal movieData={allData}></Modal> : null}
        </>
      </HomeWrap>
    </Suspense>
  );
};

export default Home;
