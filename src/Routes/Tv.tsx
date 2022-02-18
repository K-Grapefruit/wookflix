import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { getPopularTv, getToprateTv, getTv, IgetTV } from "./api";

const Wrapper = styled.div`
  height: 100vh;
  margin-top: 70px;
  display: flex;
  flex-direction: columns;
  /* justify-content: */
  position: relative;
`;

const Gettv = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  top: 150px;
`;
const Gettoprate = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(5, 1fr);
  top: 450px;
  position: absolute;
`;
const Getpopluate = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 15px;
  top: 750px;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
`;

const Tvitem = styled(motion.div)<{ bgphoto: string }>`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  cursor: pointer;

  &:first-child {
    transform: left center;
  }
  &:last-child {
    transform: right center;
  }
`;
const Topitem = styled(motion.div)<{ bgphoto: string }>`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  cursor: pointer;
  &:first-child {
    transform: left center;
  }
  &:last-child {
    transform: right center;
  }
`;
const Popitem = styled(motion.div)<{ bgphoto: string }>`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  cursor: pointer;
  &:first-child {
    transform: left center;
  }
  &:last-child {
    transform: right center;
  }
`;

const Hovertitle = styled(motion.div)`
  width: 100%;
  position: absolute;
  background: grey;
  bottom: 0;
  padding: 10px;
  text-align: center;
  opacity: 0;
`;

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

const OverlayItemPic = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 60%;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
`;
const OverlayItemInfo = styled.div`
  width: 100%;
  height: 40%;
  padding: 10px 50px 10px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ItemInfoTitle = styled.h1`
  margin-bottom: 10px;
`;
const ItemInfoDesc = styled.p`
  margin-bottom: 30px;
`;
const ItemInfoPopularity = styled.h4`
  margin-bottom: 10px;
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 0;
  padding: 10px;
  font-size: 20px;
`;

const Home = styled(motion.img)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;

  right: 10px;
`;
function Tv() {
  const { isLoading: tvloading, data: tvdata } = useQuery<IgetTV>(
    ["tv", "get"],
    getTv
  );
  const { isLoading: toprateloading, data: topratedata } = useQuery<IgetTV>(
    ["tv", "toprate"],
    getToprateTv
  );
  const { isLoading: popluateloading, data: populatedata } = useQuery<IgetTV>(
    ["tv", "popluate"],
    getPopularTv
  );

  const [Tvindex, setTvindex] = useState(0);
  const [Topindex, setTopindex] = useState(0);
  const [Populateindex, setPopindex] = useState(0);
  const [tvLeaving, setTvLeaving] = useState(false);
  const [TopLeaving, setTopLeaving] = useState(false);
  const [PopLeaving, setPopLeaving] = useState(false);
  const show = 5;
  const OnAirRouteMatch = useRouteMatch<{ id: string }>("/tv/onair/:id");
  const TopRouteMatch = useRouteMatch<{ id: string }>("/tv/top/:id");
  const PopRouteMatch = useRouteMatch<{ id: string }>("/tv/pop/:id");
  const history = useHistory();
  const TvClick = () => {
    if (tvdata) {
      if (tvLeaving) return;

      const page = tvdata?.results.length;
      const tvpage = Math.floor(page / show) - 1;
      console.log(tvpage);
      setTvLeaving(true);
      setTvindex((prev) => (prev === tvpage ? 0 : prev + 1));
    }
  };
  const TopClick = () => {
    if (topratedata) {
      if (TopLeaving) return;

      const page = topratedata?.results.length;
      const tvpage = Math.floor(page / show);
      setTopLeaving(true);
      setTopindex((prev) => (prev === tvpage ? 0 : prev + 1));
    }
  };
  const PopClick = () => {
    if (populatedata) {
      if (PopLeaving) return;
      const page = populatedata?.results.length;
      const tvpage = Math.floor(page / show);
      setPopLeaving(true);
      setPopindex((prev) => (prev === tvpage ? 0 : prev + 1));
    }
  };

  const goHome = () => {
    history.push("/wookflix");
  };

  const goTv = () => {
    history.push("/tv");
  };
  const Tvleaving = () => {
    setTvLeaving((prev) => !prev);
  };
  const Topleaving = () => {
    setTopLeaving((prev) => !prev);
  };
  const Popleaving = () => {
    setPopLeaving((prev) => !prev);
  };

  const tvDetail = (id: string) => {
    history.push(`/tv/onair/${id}`);
  };
  const topDetail = (id: string) => {
    history.push(`/tv/top/${id}`);
  };
  const popDetail = (id: string) => {
    history.push(`/tv/pop/${id}`);
  };

  const rowVariants = {
    hidden: {
      x: window.outerWidth + 10,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.outerWidth - 10,
    },
  };

  const ItemVariants = {
    normal: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
      y: -80,
      transition: {
        delay: 0.5,
        duration: 0.3,
        type: "tween",
      },
    },
  };
  const HoverVariants = {
    hover: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
        type: "tween",
      },
    },
  };

  const tvMatch = tvdata?.results.find(
    (data) => data.id + "" === OnAirRouteMatch?.params.id
  );

  const topMatch = topratedata?.results.find(
    (data) => data.id + "" === TopRouteMatch?.params.id
  );

  const popMatch = populatedata?.results.find(
    (data) => data.id + "" === PopRouteMatch?.params.id
  );

  console.log(tvMatch);

  return (
    <Wrapper>
      {tvloading ? (
        <span>...</span>
      ) : (
        <AnimatePresence onExitComplete={Tvleaving}>
          <Gettv
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={Tvindex}
            transition={{ type: "tween", duration: 2 }}
          >
            {tvdata?.results
              .slice(show * Tvindex, show * Tvindex + show)
              .map((item) => (
                <Tvitem
                  onClick={() => tvDetail(item.id + "")}
                  variants={ItemVariants}
                  initial="normal"
                  whileHover="hover"
                  key={item.id}
                  bgphoto={makeImagePath(item.backdrop_path, "w500")}
                >
                  <Hovertitle variants={HoverVariants}>{item.name}</Hovertitle>
                </Tvitem>
              ))}
            <button
              style={{
                position: "absolute",
                top: "-35px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "35px",
                cursor: "pointer",
              }}
              onClick={TvClick}
            >
              Tv-OnAir
            </button>
          </Gettv>
        </AnimatePresence>
      )}
      {toprateloading ? null : (
        <AnimatePresence onExitComplete={Topleaving}>
          <Gettoprate
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 2 }}
            key={Topindex}
          >
            {topratedata?.results
              .slice(show * Topindex, show * Topindex + show)
              .map((item) => (
                <Topitem
                  onClick={() => topDetail(item.id + "")}
                  variants={ItemVariants}
                  initial="normal"
                  whileHover="hover"
                  bgphoto={makeImagePath(item.backdrop_path, "w500")}
                  key={item.id}
                >
                  <Hovertitle variants={HoverVariants}>{item.name}</Hovertitle>
                </Topitem>
              ))}
            <button
              style={{
                position: "absolute",
                top: "-37px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "35px",
                cursor: "pointer",
              }}
              onClick={TopClick}
            >
              Tv-Top
            </button>
          </Gettoprate>
        </AnimatePresence>
      )}
      {popluateloading ? null : (
        <AnimatePresence onExitComplete={Popleaving}>
          <Getpopluate
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 2 }}
            key={Populateindex}
          >
            {populatedata?.results
              .slice(show * Populateindex, show * Populateindex + show)
              .map((item) => (
                <Popitem
                  onClick={() => popDetail(item.id + "")}
                  variants={ItemVariants}
                  initial="normal"
                  whileHover="hover"
                  bgphoto={makeImagePath(item.backdrop_path, "w500")}
                  key={item.id}
                >
                  <Hovertitle variants={HoverVariants}>{item.name}</Hovertitle>
                </Popitem>
              ))}
            <button
              style={{
                position: "absolute",
                top: "-37px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "35px",
                cursor: "pointer",
              }}
              onClick={PopClick}
            >
              Tv-Populate
            </button>
          </Getpopluate>
        </AnimatePresence>
      )}
      {OnAirRouteMatch ? (
        <Overlay>
          <OverlayItem style={{ bottom: "10%" }}>
            <OverlayItemPic
              bgphoto={makeImagePath(tvMatch?.backdrop_path, "w500")}
            >
              <CloseBtn onClick={goTv}>❌</CloseBtn>
            </OverlayItemPic>
            <OverlayItemInfo>
              <Home
                onClick={goHome}
                src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
              ></Home>
              <ItemInfoTitle>TITLE : {tvMatch?.name}</ItemInfoTitle>
              <ItemInfoDesc>
                STORY:
                <br />
                {tvMatch?.overview}
              </ItemInfoDesc>
              <ItemInfoPopularity>
                POPULARITY
                <br />
                <br />
                {tvMatch?.popularity} SCORE
              </ItemInfoPopularity>
            </OverlayItemInfo>
          </OverlayItem>
        </Overlay>
      ) : null}
      {TopRouteMatch ? (
        <Overlay>
          <OverlayItem style={{ bottom: "10%" }}>
            <OverlayItemPic
              bgphoto={makeImagePath(topMatch?.backdrop_path, "w500")}
            >
              <CloseBtn onClick={goTv}>❌</CloseBtn>
            </OverlayItemPic>
            <OverlayItemInfo>
              <Home
                onClick={goHome}
                src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
              ></Home>
              <ItemInfoTitle>TITLE : {topMatch?.name}</ItemInfoTitle>
              <ItemInfoDesc>
                STORY:
                <br />
                {topMatch?.overview}
              </ItemInfoDesc>
              <ItemInfoPopularity>
                POPULARITY
                <br />
                <br />
                {topMatch?.popularity} SCORE
              </ItemInfoPopularity>
            </OverlayItemInfo>
          </OverlayItem>
        </Overlay>
      ) : null}
      {PopRouteMatch ? (
        <Overlay>
          <OverlayItem style={{ bottom: "10%" }}>
            <OverlayItemPic
              bgphoto={makeImagePath(popMatch?.backdrop_path, "w500")}
            >
              <CloseBtn onClick={goTv}>❌</CloseBtn>
            </OverlayItemPic>
            <OverlayItemInfo>
              <Home
                onClick={goHome}
                src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
              ></Home>
              <ItemInfoTitle>TITLE : {popMatch?.name}</ItemInfoTitle>
              <ItemInfoDesc>
                STORY:
                <br />
                {popMatch?.overview}
              </ItemInfoDesc>
              <ItemInfoPopularity>
                POPULARITY
                <br />
                <br />
                {popMatch?.popularity} SCORE
              </ItemInfoPopularity>
            </OverlayItemInfo>
          </OverlayItem>
        </Overlay>
      ) : null}
    </Wrapper>
  );
}

export default Tv;
