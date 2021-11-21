import React from "react";
import STHeader from "../Layout/Header/STHeader";
import MainSection from "./MainSection/MainSection";
import MainContent from "./MainSection/MainContent";
import LatestMovies from "./MainSection/LatestMovies";
import SectionHero from "./SectionHero";
import UpperFooter from "./Footer/UpperFooter";
import LowerFooter from "./Footer/LowerFooter";
import Following from "./Following/Following";
import MultitudeCarousel from "./Carousel.js/MultitudeCarousel";
import CreateChannel from "./Form/CreateChannel";

import New from './New/New'
import Trending from "./Trending/Trending";
import HorrorSeasons from "./PopularHorrorSeasons/HorrorSeasons";
import Comedy from "./Comedy-section/Comedy";
// import Trending from "../../Trending/Trending";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Layout() {
  const [toggleHeader, setToggleHeader] = React.useState(false);
  return (
    <div>
      <STHeader />
      <MainSection />
      <MainContent />

      <SectionHero />

      {/* <HorrorSeasons/>

      <Comedy/>

      <CreateChannel />

      <Trending />

      <New/> 

     <Following/> */}

     <MultitudeCarousel/>

<Following/>
      <UpperFooter />

      <LowerFooter />

      {/* <LatestMovies/> */}

      {/* <Router>
        
          <Route exact path="/trending">
            <Trending />
          </Route>
       
      </Router>  */}
    </div>
  );
}

export default Layout;
