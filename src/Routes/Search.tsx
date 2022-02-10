import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { IGetMoviesResult, IGetMoviesSearch, searchMovie } from "./api";

const Wrapper = styled(motion.div)`
  background-color: #3d3d3d;
  background-size: cover;
`;

const ResultPage = styled(motion.div)`
  width: 100%;
  padding: 200px 60px 30px 60px;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
`;

const Loader = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultpageItem = styled(motion.div)<{ bgPhoto: string }>`
  height: 250px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  cursor: pointer;
`;

const Title = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  h4: {
    text-align: center;
    font-size: 18px;
  }
`;

const ItemVariants = {
  start: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);
`;

const OverlayItem = styled.div`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: #2f2f2f;
  display: flex;
  flex-direction: column;
`;
const overlayVariants = {
  start: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

const OverlayItemPic = styled.div<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  height: 50%;
`;
const OverlayItemInfo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 20px 0 20px 0;
  }
`;

const way = window.location.search;
const key = way.split("=");
export const sendkey = key.splice(1).toString();
console.log(sendkey);
function Search() {
  const [Movieclicked, setMovieClicked] = useState(false);
  const bigMovieaMatch = useRouteMatch<{ id: string }>(`/search/detail/:id`);
  const location = useLocation();
  const history = useHistory();
  const { scrollY } = useViewportScroll();

  const keyword = new URLSearchParams(location.search).get("keyword");
  const { isLoading, data } = useQuery<IGetMoviesSearch>(
    ["search", "movie"],
    () => searchMovie(String(keyword))
  );
  const toggleClick = (id: number) => {
    history.push(`/search/detail/${id}`);
    setMovieClicked((prev) => !prev);
  };
  const close = (keyword: string) => {
    // history.push(`/search?keyword=${keyword}`);
    history.goBack();
  };
  const match =
    bigMovieaMatch?.params.id &&
    data?.results.find((data) => String(data.id) === bigMovieaMatch.params.id);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading....</Loader>
      ) : (
        <ResultPage>
          {/* <Banner></Banner> */}
          {data?.results.map((data) => (
            <AnimatePresence>
              <ResultpageItem
                key={data.id}
                layoutId={data.id + ""}
                variants={ItemVariants}
                initial="start"
                whileHover="hover"
                bgPhoto={makeImagePath(data.backdrop_path, "w500")}
                onClick={() => toggleClick(data.id)}
              >
                <Title variants={infoVariants}>
                  <h4>{data.title}</h4>
                </Title>
              </ResultpageItem>
            </AnimatePresence>
          ))}
        </ResultPage>
      )}
      <AnimatePresence>
        {bigMovieaMatch ? (
          <Overlay
            layoutId={bigMovieaMatch.params.id}
            onClick={() => close(String(keyword))}
            variants={overlayVariants}
            initial="start"
            animate="visible"
            exit="exit"
          >
            <OverlayItem style={{ bottom: 0 }}>
              <OverlayItemPic
                bgphoto={makeImagePath(match && match.backdrop_path, "w500")}
              ></OverlayItemPic>
              <OverlayItemInfo>
                <h1>Title : {match && match.title}</h1>
                <p>Description : {match && match.overview}</p>
                <h4>popularity : {match && match.popularity}</h4>
              </OverlayItemInfo>
            </OverlayItem>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Search;
