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
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  top: 150px;
`;
const Gettoprate = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(6, 1fr);
  top: 450px;
  position: absolute;
`;
const Getpopluate = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 15px;
  top: 750px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
`;

const Tvitem = styled(motion.div)<{ bgphoto: string }>`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
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
  &:first-child {
    transform: left center;
  }
  &:last-child {
    transform: right center;
  }
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
  const show = 6;
  const TvClick = () => {
    if (tvdata) {
      if (tvLeaving) return;

      const page = tvdata?.results.length;
      const tvpage = Math.floor(page / show);
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

  const Tvleaving = () => {
    setTvLeaving((prev) => !prev);
  };
  const Topleaving = () => {
    setTopLeaving((prev) => !prev);
  };
  const Popleaving = () => {
    setPopLeaving((prev) => !prev);
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
  console.log("하위");
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
                  key={item.id}
                  bgphoto={makeImagePath(item.backdrop_path, "w500")}
                >
                  {item.name}
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
                  bgphoto={makeImagePath(item.backdrop_path, "w500")}
                  key={item.id}
                >
                  {item.name}
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
                  bgphoto={makeImagePath(item.backdrop_path, "w500")}
                  key={item.id}
                >
                  {item.name}
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
    </Wrapper>
  );
}

export default Tv;
