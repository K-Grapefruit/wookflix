import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { IGetMoviesResult, IGetMoviesSearch, searchMovie } from "./api";

function Search() {
  const [Movieclicked, setMovieClicked] = useState(false);
  const bigMovieaMatch = useRouteMatch(`/search/detail/:id`);
  const location = useLocation();
  const history = useHistory();
  const { scrollY } = useViewportScroll();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);
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
  console.log(data);
  const Wrapper = styled(motion.div)`
    background-color: black;
    overflow: hidden;
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
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading....</Loader>
      ) : (
        <ResultPage>
          {data?.results.map((data) => (
            <AnimatePresence>
              <ResultpageItem
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
            onClick={() => close(String(keyword))}
            variants={overlayVariants}
            initial="start"
            animate="visible"
            exit="exit"
          >
            <OverlayItem style={{ top: scrollY.get() + 100 }}></OverlayItem>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Search;
