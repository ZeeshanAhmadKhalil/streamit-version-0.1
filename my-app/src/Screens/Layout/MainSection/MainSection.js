import React, { useRef } from "react";
import SeasonDetails from "./SeasonDetails";
import { Link } from "react-router-dom";
import trailer from "../Header/video/trailer.mp4";

import ShowMore from 'react-show-more-button/dist/module';

import { Modal, ModalBody, ModalHeader } from "reactstrap";

import { useHistory } from "react-router-dom";

import { FaPlay } from "react-icons/fa";

function MainSection() {
  const [modalClassic, setModalClassic] = React.useState(false);
  const toggleModalClassic = (e) => {
    e.preventDefault();
    setModalClassic(!modalClassic);
  };

  const videoRef = useRef(null);

  // const handlePlayVideo = () => {
  //   videoRef.current.play();
  //   console.log(videoRef);
  // };


  let history = useHistory();
  const handleVideoSection = () => {
    history.push("/videoSection");
  };
  return (
    <React.Fragment>
      <div className="modal-div">
        <Modal
          size="lg"
          isOpen={modalClassic}
          toggle={toggleModalClassic}
          className="modal-container"
        >
          <video
            muted=""
            loop=""
            controls
            autoplay=""
            class="w-100"
            id="modal-video"
          >
            <source
              src="https://multitude.s3.wasabisys.com/money-heist/trailer/aINOB5uahg4AamDl2e1bKq5fsZev7TACImTHRxeX.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>

          <ModalBody>
            <div className="container col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div className="text-left">
                <div className="textwidget">
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
              <div className="text-align-right">
                <p className="modal-p-tag">
                  <span className="span-props">Cast</span>: cast
                </p>
                <p className="modal-p-tag">
                  <span className="span-props">Genres</span>: Action
                </p>
                <p className="modal-p-tag">
                  <span className="span-props">publisher</span>: multitude
                </p>
              </div>
            </div>
            <div>
              <h2 className="episodes-heading">Episodes</h2>
            </div>

            <div className="container season-episodes">

              <div className="season-episodes-upper">
                <div className="season-episodes-upper">
                  <div
                    className="seasons-episode-img"
                  >
                    <Link to="/videoSection"
                      style={{
                        border: "3px dashed blue",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                      <div className="modal-video-button">
                        <FaPlay />
                      </div>
                    </Link>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ktko1j5f9gRIDnY99Zw3UPTZ2zTdhGxy-A&usqp=CAU"
                      className="seasons-episode-img"
                    />
                  </div>
                </div>

                <div className="d-flex flex-column align-self-start">
                  <h4 className="episode-heading">Episode 3</h4>
                  <ShowMore maxHeight={50}>
                    <p> sed quia non numquam eius modi tempora incidunt ut labore et dolore
                      numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      magnam aliquam quaerat volupta
                      numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      tem.
                    </p>

                  </ShowMore>
                </div>
              </div>
              <div className="season-episodes-upper">
                <div className="season-episodes-upper">
                  <div
                    className="seasons-episode-img"
                  >
                    <Link to="/videoSection"
                      style={{
                        border: "3px dashed blue",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                      <div className="modal-video-button">
                        <FaPlay />
                      </div>
                    </Link>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ktko1j5f9gRIDnY99Zw3UPTZ2zTdhGxy-A&usqp=CAU"
                      className="seasons-episode-img"
                    />
                  </div>
                </div>

                <div className="d-flex flex-column align-self-start">
                  <h4 className="episode-heading">Episode 3</h4>
                  <ShowMore maxHeight={50}>
                    <p> sed quia non numquam eius modi tempora incidunt ut labore et dolore
                      numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      magnam aliquam quaerat volupta
                      numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      tem.
                    </p>

                  </ShowMore>
                </div>
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
          <video autoplay="" muted="" loop="" id="myVideo">
            <source
              src="https://multitude.s3.wasabisys.com/money-heist/trailer/aINOB5uahg4AamDl2e1bKq5fsZev7TACImTHRxeX.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>

          <div className="slide slick-bg ">
            <div className="container-fluid position-relative h-100 main-section-container content">
              <div className="slider-inner h-100 ">
                <div className="row align-items-center  iq-ltr-direction h-100">
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
                    <p
                      data-animation-in="fadeInUp"
                      className="main-section-text"
                      data-delay-in="1.2"
                    >
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
