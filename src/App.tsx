import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/tv" component={Tv}></Route>
        <Route
          exact
          path={["/search", "/search/detail/:movieId"]}
          component={Search}
        ></Route>
        {/*/경로를 제일 뒤로 놓아야 하는 이유 : /는 전체 경로에 포함이기 때문에 먼저 실행되기 때문 */}
        {/*react-router가 두 개의 path에서 같은 컴포넌트를 render하도록 할 수 있음@@*/}
        <Route exact path={["/", "/movies/:movieId"]} component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
