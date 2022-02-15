import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { IGetMoviesResult, IGetMoviesSearch, searchMovie } from "./api";

const Close = styled(motion.svg)`
  width: 50px;
  height: 50px;
  padding: 10px;
`;

const Icondiv = styled.div`
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

const Home = styled(motion.img)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Svg = styled(motion.svg)`
  width: 30px;
  height: 30px;
  background-color: transparent;

  cursor: pointer;
`;

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
      duaration: 0.1,
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duaration: 0.1,
      type: "tween",
    },
  },
};

const closeVariants = {
  start: {
    fill: "black",
  },
  hover: {
    fill: "yellow",
  },
};

const StartVariants = {
  initial: {
    fill: "black",
  },
  click: {
    fill: "yellow",
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
  position: relative;
  p {
    margin: 20px 0 20px 0;
  }
`;

const way = window.location.search;
const key = way.split("=");
export const sendkey = key.splice(1).toString();
console.log(sendkey);
function Search() {
  const [clicked, setClicked] = useState(false);
  const bigMovieaMatch = useRouteMatch<{ id: string }>(`/search/detail/:id`);
  const location = useLocation();
  const history = useHistory();

  const keyword = new URLSearchParams(location.search).get("keyword");
  const { isLoading, data } = useQuery<IGetMoviesSearch>(
    ["search", "movie"],
    () => searchMovie(String(keyword))
  );

  const starClick = () => {
    console.log("클릭");
    setClicked((prev) => !prev);
    console.log(clicked);
  };

  const toggleClick = (id: number) => {
    history.push(`/search/detail/${id}`);
  };
  const close = (keyword: string) => {
    // history.push(`/search?keyword=${keyword}`);
    history.goBack();
  };
  const match =
    bigMovieaMatch?.params.id &&
    data?.results.find((data) => String(data.id) === bigMovieaMatch.params.id);

  const goHome = () => {
    history.push("/wookflix");
  };

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
            variants={overlayVariants}
            initial="start"
            animate="visible"
            exit="exit"
          >
            <OverlayItem style={{ bottom: 0 }}>
              <OverlayItemPic
                bgphoto={makeImagePath(match && match.backdrop_path, "w500")}
              >
                <Close
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 490 490"
                  variants={closeVariants}
                  initial="start"
                  whileHover="hover"
                  exit="exit"
                  onClick={() => close(String(keyword))}
                >
                  <path
                    d="M413.476,398.302L258.215,245L413.476,91.69L324.619,0L76.524,245l248.094,245L413.476,398.302z M120.086,245L324.14,43.502
	l46.252,47.71L214.653,245l155.739,153.781l-46.252,47.717L120.086,245z"
                  />
                </Close>
              </OverlayItemPic>
              <OverlayItemInfo>
                <Icondiv>
                  <Svg
                    variants={StartVariants}
                    initial="initial"
                    whileHover="click"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    onClick={starClick}
                  >
                    {" "}
                    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                  </Svg>
                  <Home
                    onClick={goHome}
                    src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
                  ></Home>
                </Icondiv>
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
