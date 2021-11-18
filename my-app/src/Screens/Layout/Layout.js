import React from "react";
import STHeader from "../Layout/Header/STHeader";
import MainSection from "./MainSection/MainSection";
import MainContent from "./MainSection/MainContent";
import LatestMovies from "./MainSection/LatestMovies";
import SectionHero from "./SectionHero";
import UpperFooter from "./Footer/UpperFooter";
import LowerFooter from "./Footer/LowerFooter";
import MultitudeCarousel from "./Carousel.js/MultitudeCarousel";
import CreateChannel from "./Form/CreateChannel";
import Trending from "../../Trending/Trending";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Layout() {
  const [toggleHeader, setToggleHeader] = React.useState(false);
  return (
    <div>
      <STHeader />
      <MainSection />
      <MainContent />

      <SectionHero />
      <MultitudeCarousel />

      <CreateChannel />

      <UpperFooter />

      <LowerFooter />

      {/* <LatestMovies/> */}

      <Router>
        <Switch>
          <Route exact path="/trending">
            <Trending />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Layout;
