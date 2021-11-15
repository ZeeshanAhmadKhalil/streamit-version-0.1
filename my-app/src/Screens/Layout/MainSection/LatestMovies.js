import React from "react";
import SeasonsCard from "../../../Crads/SeasonsCard";
import SeasonDetails from "./SeasonDetails";

function LatestMovies() {
  return (
    <div class="main-content">
    <section id="iq-favorites">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 overflow-hidden">
            <div class="iq-main-header d-flex align-items-center justify-content-between">
              <h4 class="main-title">Latest Movies</h4>
              <a class="iq-view-all" href="movie-category.html">
                View All
              </a>
            </div>
            <div class="favorites-contetns ">
              <ul class="favorites-slider list-inline  row p-0 mb-0 iq-rtl-direction">

              <li class="slide-item popular-seasons-container">
                 
                    <h3 className="popular-seasons-heading">Popular Seasons</h3>
                    <p className="popular-seasons-text">Most Watched Seasons By Day</p>
                    <a class="iq-view-all" href="movie-category.html">View All</a> 
              
                </li>

                <li></li>


                </ul>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default LatestMovies;
