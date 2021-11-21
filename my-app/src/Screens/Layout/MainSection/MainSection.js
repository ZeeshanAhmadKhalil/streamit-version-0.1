import React from "react";
import SeasonDetails from "./SeasonDetails";
import trailer from "../Header/video/trailer.mp4";
import { Modal, ModalBody } from "reactstrap";

function MainSection() {
  const [modalClassic, setModalClassic] = React.useState(false);
  const toggleModalClassic = (e) => {
    e.preventDefault();
    setModalClassic(!modalClassic);
  };
  return (
    <React.Fragment>
      <div className="modal-div">
        <Modal size="lg" isOpen={modalClassic} toggle={toggleModalClassic}>
          <img src="https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg" />
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="text-left">
              <div className="textwidget">
                <h6 className="footer-link-title">Multitude App</h6>
                <div className="d-flex align-items-center season-button">
                  <a
                    href="show-details.html"
                    className="btn btn-hover iq-button button-season"
                  >
                    Season 1
                  </a>
                  <br />
                  <a
                    href="show-details.html"
                    className="btn btn-hover iq-button"
                  >
                    Season 2
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalBody>
            <div
              className="container span-tags"
              data-animation-in="fadeInUp"
              data-delay-in="1"
            >
              <span className="ml-3">11-16-2021</span>
              <span className="badge badge-secondary p-2">11+</span>
            </div>
            <div className="modal-text">
              <div className="text-left">
                A criminal mastermind who goes by "The Professor" has a plan to
                pull off the biggest heist in recorded history -- to print
                billions of euros in the Royal Mint of Spain. To help him carry
                out the ambitious plan, he recruits eight people with certain
                abilities and who have nothing to lose. The group of thieves
                take hostages to aid in their negotiations with the authorities,
                who strategize to come up with a way to capture The Professor.
                As more time elapses, the robbers prepare for a showdown with
                the police
              </div>
              <div className="text-right">
                <p>Cast: cast</p>
                <p>Genres: Action</p>
                <p>publisher: multitude</p>
              </div>
            </div>
            <div>
              <h2 className="episodes-heading">Episodes</h2>
            </div>

            <div className="container season-episodes">
              <div className="season-episodes-upper">
                <img src="	https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1508919801845-fc2ae1bc2a28%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%253D%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&tbnid=QbKX_KCUbjkZ4M&vet=12ahUKEwj3mobT0KH0AhX_AmMBHXPADiIQMygBegUIARDMAQ..i&docid=f3riLA-4-1potM&w=1000&h=637&itg=1&q=img&ved=2ahUKEwj3mobT0KH0AhX_AmMBHXPADiIQMygBegUIARDMAQ" />
                <h4 className="episode-heading">Episode 1</h4>
              </div>
              <div className="season-episodes-upper">
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1508919801845-fc2ae1bc2a28%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%253D%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&tbnid=QbKX_KCUbjkZ4M&vet=12ahUKEwj3mobT0KH0AhX_AmMBHXPADiIQMygBegUIARDMAQ..i&docid=f3riLA-4-1potM&w=1000&h=637&itg=1&q=img&ved=2ahUKEwj3mobT0KH0AhX_AmMBHXPADiIQMygBegUIARDMAQ" />
                <h5 className="episode-heading">Episode 1</h5>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
      <section
        id="home"
        className="iq-main-slider p-0 iq-rtl-direction"
        style={{ height: "90vh" }}
      >
        <div id="home-slider" className="slider m-0 p-0 slider-video">
          <video autoplay="" muted="" loop id="myVideo" class="w-100">
            <source
              src="https://multitude.s3.wasabisys.com/money-heist/trailer/aINOB5uahg4AamDl2e1bKq5fsZev7TACImTHRxeX.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>



          <div className="slide slick-bg ">
            <div className="container-fluid position-relative h-100 main-section-container content">
              <div className="slider-inner h-100 ">
                <div className="row align-items-center  iq-ltr-direction h-100 content">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-left-main ">
                    <h1
                      className="slider-text big-title title text-uppercase"
                      data-animation-in="fadeInLeft"
                      data-delay-in="0.6"
                    >
                      bushland
                    </h1>

                    <div
                      className="d-flex align-items-center"
                      data-animation-in="fadeInUp"
                      data-delay-in="1"
                    >
                      <span className="badge badge-secondary p-2">18+</span>
                      <span className="ml-3">2 Seasons</span>
                    </div>
                    <p data-animation-in="fadeInUp" data-delay-in="1.2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <div
                      className="trending-list"
                      data-wp_object-in="fadeInUp"
                      data-delay-in="1.2"
                    >
                      <div className="text-primary title starring">
                        Starring:{" "}
                        <span className="text-body">
                          Karen Gilchrist, James Earl Jones
                        </span>
                      </div>
                      <div className="text-primary title genres">
                        Genres: <span className="text-body">Action</span>
                      </div>
                      <div className="text-primary title tag">
                        Tag:{" "}
                        <span className="text-body">
                          Action, Adventure, Horror
                        </span>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center r-mb-23"
                      data-animation-in="fadeInUp"
                      data-delay-in="1.2"
                    >
                      <a
                        href="show-details.html"
                        className="btn btn-hover iq-button"
                      >
                        <i className="fa fa-play mr-2" aria-hidden="true"></i>
                        Play Now
                      </a>

                      <div
                        className="btn btn-link"
                        onClick={toggleModalClassic}
                      >
                        More details
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12 col-left-main">
                    <SeasonDetails />
                    <SeasonDetails />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default MainSection;
