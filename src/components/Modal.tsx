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
  const searchMatch = useMatch(`/search/:word/:id`);
  const modalImg = modalMatch
    ? movieData.find((movieInfo) => String(movieInfo.id) === modalMatch?.params.movieId)
    : searchMatch
    ? movieData.find((movieInfo) => String(movieInfo.id) === searchMatch.params.id)
    : movieData.find((movieInfo) => String(movieInfo.id) === tvMatch?.params.tvId);
  return (
    <>
      <AnimatePresence>
        <motion.div variants={modalVars} animate="visible" initial="invisible" exit="exit">
          <OverLay
            onClick={() => (modalMatch ? navigate("/") : searchMatch ? navigate(-1) : navigate("/tv"))}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></OverLay>
          <ModalBox layoutId={modalImg?.id.toString()} className={modalImg?.backdrop_path ? "" : "active"}>
            <ModalCont>
              {modalImg?.backdrop_path ? (
                <img src={movieImageName(modalImg?.backdrop_path || "")} alt="" />
              ) : (
                <img src="https://fcea.co.kr/wp-content/uploads/2020/10/placeholder-4.png" alt="" />
              )}

              <div className="content">
                <motion.div whileHover={{ y: -20 }} className="poster">
                  {modalImg?.backdrop_path ? (
                    <img src={movieImageName(modalImg?.poster_path || "", "w500")} alt="" />
                  ) : (
                    // <PlaceHolder>이미지가 없습니다.</PlaceHolder>
                    <img src="https://nicevan001.blogpay.io/img/img_noimg.png" alt="placeholder 이미지" />
                  )}
                </motion.div>
                <div className="modal-text">
                  <h3>{modalImg?.title ? modalImg?.title : modalImg?.name}</h3>
                  <div className="more-info">
                    <p>개봉일 : {modalImg?.release_date ? modalImg?.release_date : modalImg?.first_air_date}</p>
                    <p>
                      <span className="stars">★</span> <span>{modalImg?.vote_average}</span>
                    </p>
                    <p>{modalImg?.overview ? modalImg?.overview : modalImg?.title}</p>
                  </div>
                </div>
              </div>
              <ModalClose onClick={() => (modalMatch ? navigate("/") : searchMatch ? navigate(-1) : navigate("/tv"))}>X</ModalClose>
            </ModalCont>
          </ModalBox>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Modal;
