import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { IGetMoviesResult, IGetMoviesSearch, searchMovie } from "./api";

function Tv() {
  return <span style={{ color: "black", paddingTop: 100 }}></span>;
}

export default Tv;
