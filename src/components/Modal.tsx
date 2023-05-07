import { motion, AnimatePresence } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { movieImageName } from "../Util/util";
import { IMovieResult } from "../Util/apis";
import { OverLay, ModalBox, ModalCont, ModalClose } from "../style/ModalStyle";

const modalVars = {
  invisible: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

interface ImovieData {
  movieData: IMovieResult[];
}

const Modal = ({ movieData }: ImovieData) => {
  const navigate = useNavigate();
  // Home과 tv일때 구분
  const modalMatch = useMatch(`/movie/:movieId`);
  const tvMatch = useMatch(`/tvModal/:tvId`);
  const modalImg = modalMatch
    ? movieData.find((movieInfo) => String(movieInfo.id) === modalMatch?.params.movieId)
    : movieData.find((movieInfo) => String(movieInfo.id) === tvMatch?.params.tvId);
  return (
    <>
      <AnimatePresence>
        <motion.div variants={modalVars} animate="visible" initial="invisible" exit="exit">
          <OverLay onClick={() => (modalMatch ? navigate("/") : navigate("/tv"))} initial={{ opacity: 0 }} animate={{ opacity: 1 }}></OverLay>
          <ModalBox layoutId={modalMatch?.params.movieId}>
            <ModalCont>
              <img src={movieImageName(modalImg?.backdrop_path || "")} alt="" />
              <div className="content">
                <motion.div whileHover={{ y: -20 }} className="poster">
                  <img src={movieImageName(modalImg?.poster_path || "", "w500")} alt="" />
                </motion.div>
                <div className="modal-text">
                  <h3>{modalMatch ? modalImg?.title : modalImg?.name}</h3>
                  <div className="more-info">
                    <p>개봉일 : {modalMatch ? modalImg?.release_date : modalImg?.first_air_date}</p>
                    <p>
                      <span className="stars">★</span> <span>{modalImg?.vote_average}</span>
                    </p>
                    <p>{modalImg?.overview ? modalImg?.overview : modalImg?.title}</p>
                  </div>
                </div>
              </div>
              <ModalClose onClick={() => (modalMatch ? navigate("/") : navigate("/tv"))}>X</ModalClose>
            </ModalCont>
          </ModalBox>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Modal;
