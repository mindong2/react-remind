import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getComeMovies, getMovies, getPopMovies, getRateMovies, IMovie } from "../Util/apis";
import { movieImageName } from "../Util/util";
import { motion, AnimatePresence } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import Slider from "./Slider";
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

const Modal = styled(motion.div)`
  position: fixed;
  top: 14%;
  left: 32%;
  width: 720px;
  height: 720px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.black.lighter};
  overflow: hidden;
  img {
    width: 100%;
    vertical-align: top;
    -webkit-user-drag: none;
  }
`;

const ModalCont = styled.div`
  .modal-text {
    padding: 15px;
    color: ${({ theme }) => theme.white.lighter};
    overflow-y: "auto";
    max-height: 50%;
    h3 {
      font-size: 32px;
    }
    p {
      margin-top: 10px;
      line-height: 1.3;
    }
    .stars {
      color: #ffea2a;
    }
  }
`;

const OverLay = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const modalVars = {
  invisible: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const { isLoading: movieLoading, data: movieData } = useQuery<IMovie>(["movie", "nowPlaying"], getMovies);
  const { data: popData } = useQuery<IMovie>(["popMovie", "popular"], getPopMovies);
  const { data: rateData } = useQuery<IMovie>(["rateMovie", "rate"], getRateMovies);
  const { data: comeData } = useQuery<IMovie>(["comeMovie", "come"], getComeMovies);

  const navigate = useNavigate();
  const modalMatch = useMatch(`/movie/:movieId`);

  const modalImg = modalMatch && movieData?.results.find((movieInfo) => String(movieInfo.id) === modalMatch?.params.movieId);

  return (
    <HomeWrap>
      {movieLoading ? (
        <Loader>Loading/...</Loader>
      ) : (
        <>
          <Banner bgphoto={movieImageName(movieData?.results[0].backdrop_path || "")}>
            <Title>{movieData?.results[0].title}</Title>
            <OverView>{movieData?.results[0].overview}</OverView>
          </Banner>

          <Slider data={movieData}></Slider>
          <Slider data={rateData}></Slider>
          <Slider data={popData}></Slider>
          <Slider data={comeData}></Slider>

          {modalMatch ? (
            <>
              <AnimatePresence>
                <motion.div variants={modalVars} animate="visible" initial="invisible" exit="exit">
                  <OverLay onClick={() => navigate("/")} initial={{ opacity: 0 }} animate={{ opacity: 1 }}></OverLay>
                  <Modal layoutId={modalMatch?.params.movieId}>
                    <ModalCont>
                      <img src={movieImageName(modalImg?.backdrop_path || "", "w500")} alt="" />
                      <div className="modal-text">
                        <h3>{modalImg?.title}</h3>
                        <div className="more-info">
                          <p>개봉일 : {modalImg?.release_date}</p>
                          <p>
                            <span className="stars">★</span> <span>{modalImg?.vote_average}</span>
                          </p>
                          <p>{modalImg?.overview ? modalImg?.overview : modalImg?.title}</p>
                        </div>
                      </div>
                    </ModalCont>
                  </Modal>
                </motion.div>
              </AnimatePresence>
            </>
          ) : null}
        </>
      )}
    </HomeWrap>
  );
};

export default Home;
