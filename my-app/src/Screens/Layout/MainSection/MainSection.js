import React from "react";
import SeasonDetails from "./SeasonDetails";
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
          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="text-left">
              <div class="textwidget">
                <h6 class="footer-link-title">Multitude App</h6>
                <div class="d-flex align-items-center">
                  <a
                    href="show-details.html"
                    className="btn btn-hover iq-button"
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
                <div
                  className="d-flex align-items-center"
                  data-animation-in="fadeInUp"
                  data-delay-in="1"
                >
                   <span className="ml-3">11-16-2021</span>
                  <span className="badge badge-secondary p-2">11+</span>
                  
                </div>
              </div>
            </div>
          </div>
          <ModalBody>
            <div className="btn btn-link" onClick={toggleModalClassic}>
              More details
            </div>
          </ModalBody>
        </Modal>
      </div>
      <section
        id="home"
        className="iq-main-slider p-0 iq-rtl-direction"
        style={{ height: "90vh" }}
      >
        <div id="home-slider" className="slider m-0 p-0">
          <div className="slide slick-bg">
            <div className="container position-relative h-100 main-section-container">
              <div className="slider-inner h-100">
                <div className="row align-items-center  iq-ltr-direction h-100 ">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-left-main">
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
