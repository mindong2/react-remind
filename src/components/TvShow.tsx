import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAiringTv, getAirTv, getPopTv, getRateTv, IMovie } from "../Util/apis";
import { movieImageName } from "../Util/util";
import { useMatch } from "react-router-dom";
import Slider from "./Slider";
import Modal from "./Modal";
import { HomeWrap, Banner, Title, OverView } from "../style/CommonStyle";
import Spinner from "./Loading";

const TvShow = () => {
  const { data: rateTvData } = useQuery<IMovie>(["rateTv", "rate"], getRateTv);
  const { data: popTvData } = useQuery<IMovie>(["popTv", "popular"], getPopTv);
  const { data: airingTvData } = useQuery<IMovie>(["airingTv", "airing"], getAiringTv);
  const { data: airTvData } = useQuery<IMovie>(["airTv", "air"], getAirTv);

  const allData = [
    ...(rateTvData?.results ? rateTvData?.results : []),
    ...(popTvData?.results ? popTvData?.results : []),
    ...(airingTvData?.results ? airingTvData?.results : []),
    ...(airTvData?.results ? airTvData?.results : []),
  ];

  const modalMatch = useMatch(`/tvModal/:tvId`);

  return (
    <Suspense fallback={<Spinner />}>
      <HomeWrap>
        <>
          <Banner bgphoto={movieImageName(rateTvData?.results[0].backdrop_path || "")}>
            <Title>{rateTvData?.results[0].name}</Title>
            <OverView>{rateTvData?.results[0].overview}</OverView>
          </Banner>

          <Slider dataname="평점이 높은 TV 프로그램" data={rateTvData} tv={"tv"}></Slider>
          <Slider dataname="인기있는 TV 프로그램" data={popTvData} tv={"tv"}></Slider>
          <Slider dataname="최신 TV 프로그램" data={airingTvData} tv={"tv"}></Slider>
          <Slider dataname="방영중인 TV 프로그램" data={airTvData} tv={"tv"}></Slider>

          {modalMatch ? <Modal movieData={allData}></Modal> : null}
        </>
      </HomeWrap>
    </Suspense>
  );
};

export default TvShow;
