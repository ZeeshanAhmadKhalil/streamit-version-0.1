import React from "react";
import { Modal, Button, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function SectionHero() {
  const [modalClassic, setModalClassic] = React.useState(false);
  const toggleModalClassic = (e) => {
    e.preventDefault();
    setModalClassic(!modalClassic);
  };
  return (
    <React.Fragment>
      <section
        id="home"
        className="iq-main-slider p-0 iq-rtl-direction section-image"

      >
        <div id="home-slider" className="slider m-0 p-0">
          <div className="slide slick-bg">
            <div className="container-fluid position-relative h-100 main-section-container">
              <div className="slider-inner h-100">
                <div className="row align-items-center  iq-ltr-direction h-100 ">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-left-main">
                    <h1
                      className="slider-text big-title title text-uppercase"
                      data-animation-in="fadeInLeft"
                      data-delay-in="0.6"
                    >
                      Deathnote
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
                       
                      >
                        More details
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Modal isOpen={modalClassic} toggle={toggleModalClassic}>
         
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default SectionHero;
