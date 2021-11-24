import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";

function MultitudeCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },  
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (

<>
    <div className="container iq-main-header d-flex align-items-center justify-content-between">
    <h4 className="main-title-carousal">Latest Seasons</h4>
  </div>
    <div className="">
      <section id="iq-favorites">
        <div className="container-fluid">
          <div className="container">
            <div className="col-sm-12">
              <div className="favorites-content d-flex w-100 CarouselSplit">
                <div className="CarouselContainer">
                  <Carousel responsive={responsive}>
                  

                    <div>
                      <ul className="favorites-slider list-inline  p-0 mb-0 iq-rtl-direction ">
                        <li className="slide-item" style={{ width: "100%", marginRight: "40px !important" }}>
                          <div className="block-images position-relative img-box-horizontal">
                            <div className="img-box" style={{ width: "19rem" }}>
                              <img
                                src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="img-fluid img-box-horizontal"
                                alt=""
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <a href="movie-details.html">Sand Dust</a>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                <div className="badge badge-secondary p-1 mr-2">
                                  13+
                                </div>
                                <span className="text-white">2h 30m</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="movie-details.html"
                                  role="button"
                                  className="btn btn-hover iq-button"
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  ></i>
                                  Play Now
                                </a>
                              </div>
                            </div>

                            <div className="block-social-info">
                              <ul className="list-inline p-0 m-0 music-play-lists">
                                <li className="share">
                                  <span>
                                    <i className="ri-share-fill"></i>
                                  </span>
                                  <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-facebook-fill"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-twitter-fill"></i>
                                      </a>
                                      <a
                                        href="#"
                                        data-link="https://images.pexels.com/photos/716733/pexels-photo-716733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        className="share-ico iq-copy-link"
                                        tabindex="0"
                                      >
                                        <i className="ri-links-fill"></i>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-add-line"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="favorites-slider list-inline  p-0 mb-0 iq-rtl-direction ">
                        <li className="slide-item" style={{ width: "100%" }}>
                          <div className="block-images position-relative img-box-horizontal">
                            <div className="img-box" style={{ width: "19rem" }}>
                              <img
                                src="https://images.pexels.com/photos/288100/pexels-photo-288100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="img-fluid img-box-horizontal"
                                alt=""
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <a href="movie-details.html">Sand Dust</a>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                <div className="badge badge-secondary p-1 mr-2">
                                  13+
                                </div>
                                <span className="text-white">2h 30m</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="movie-details.html"
                                  role="button"
                                  className="btn btn-hover iq-button"
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  ></i>
                                  Play Now
                                </a>
                              </div>
                            </div>

                            <div className="block-social-info">
                              <ul className="list-inline p-0 m-0 music-play-lists">
                                <li className="share">
                                  <span>
                                    <i className="ri-share-fill"></i>
                                  </span>
                                  <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-facebook-fill"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-twitter-fill"></i>
                                      </a>
                                      <a
                                        href="#"
                                        data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        className="share-ico iq-copy-link"
                                        tabindex="0"
                                      >
                                        <i className="ri-links-fill"></i>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-add-line"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="favorites-slider list-inline  p-0 mb-0 iq-rtl-direction ">
                        <li className="slide-item" style={{ width: "100%" }}>
                          <div className="block-images position-relative img-box-horizontal">
                            <div className="img-box" style={{ width: "19rem" }}>
                              <img
                                src="https://images.pexels.com/photos/1704119/pexels-photo-1704119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="img-fluid img-box-horizontal"
                                alt=""
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <a href="movie-details.html">Sand Dust</a>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                <div className="badge badge-secondary p-1 mr-2">
                                  13+
                                </div>
                                <span className="text-white">2h 30m</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="movie-details.html"
                                  role="button"
                                  className="btn btn-hover iq-button"
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  ></i>
                                  Play Now
                                </a>
                              </div>
                            </div>

                            <div className="block-social-info">
                              <ul className="list-inline p-0 m-0 music-play-lists">
                                <li className="share">
                                  <span>
                                    <i className="ri-share-fill"></i>
                                  </span>
                                  <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-facebook-fill"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-twitter-fill"></i>
                                      </a>
                                      <a
                                        href="#"
                                        data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        className="share-ico iq-copy-link"
                                        tabindex="0"
                                      >
                                        <i className="ri-links-fill"></i>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-add-line"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="favorites-slider list-inline  p-0 mb-0 iq-rtl-direction ">
                        <li className="slide-item" style={{ width: "100%" }}>
                          <div className="block-images position-relative img-box-horizontal">
                            <div className="img-box" style={{ width: "19rem" }}>
                              <img
                                src="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="img-fluid img-box-horizontal"
                                alt=""
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <a href="movie-details.html">Sand Dust</a>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                <div className="badge badge-secondary p-1 mr-2">
                                  13+
                                </div>
                                <span className="text-white">2h 30m</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="movie-details.html"
                                  role="button"
                                  className="btn btn-hover iq-button"
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  ></i>
                                  Play Now
                                </a>
                              </div>
                            </div>

                            <div className="block-social-info">
                              <ul className="list-inline p-0 m-0 music-play-lists">
                                <li className="share">
                                  <span>
                                    <i className="ri-share-fill"></i>
                                  </span>
                                  <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-facebook-fill"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-twitter-fill"></i>
                                      </a>
                                      <a
                                        href="#"
                                        data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        className="share-ico iq-copy-link"
                                        tabindex="0"
                                      >
                                        <i className="ri-links-fill"></i>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-add-line"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="favorites-slider list-inline  p-0 mb-0 iq-rtl-direction ">
                        <li className="slide-item" style={{ width: "100%" }}>
                          <div className="block-images position-relative img-box-horizontal">
                            <div className="img-box" style={{ width: "19rem" }}>
                              <img
                                src="https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8="
                                className="img-fluid img-box-horizontal"
                                alt=""
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <a href="movie-details.html">Sand Dust</a>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                <div className="badge badge-secondary p-1 mr-2">
                                  13+
                                </div>
                                <span className="text-white">2h 30m</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="movie-details.html"
                                  role="button"
                                  className="btn btn-hover iq-button"
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  ></i>
                                  Play Now
                                </a>
                              </div>
                            </div>

                            <div className="block-social-info">
                              <ul className="list-inline p-0 m-0 music-play-lists">
                                <li className="share">
                                  <span>
                                    <i className="ri-share-fill"></i>
                                  </span>
                                  <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-facebook-fill"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-twitter-fill"></i>
                                      </a>
                                      <a
                                        href="#"
                                        data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        className="share-ico iq-copy-link"
                                        tabindex="0"
                                      >
                                        <i className="ri-links-fill"></i>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-add-line"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>



                    <div>
                      <ul className="favorites-slider list-inline  p-0 mb-0 iq-rtl-direction ">
                        <li className="slide-item" style={{ width: "100%" }}>
                          <div className="block-images position-relative img-box-horizontal">
                            <div className="img-box" style={{ width: "19rem" }}>
                              <img
                                src="https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="img-fluid img-box-horizontal"
                                alt=""
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <a href="movie-details.html">Sand Dust</a>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                <div className="badge badge-secondary p-1 mr-2">
                                  13+
                                </div>
                                <span className="text-white">2h 30m</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="movie-details.html"
                                  role="button"
                                  className="btn btn-hover iq-button"
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  ></i>
                                  Play Now
                                </a>
                              </div>
                            </div>

                            <div className="block-social-info">
                              <ul className="list-inline p-0 m-0 music-play-lists">
                                <li className="share">
                                  <span>
                                    <i className="ri-share-fill"></i>
                                  </span>
                                  <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-facebook-fill"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-twitter-fill"></i>
                                      </a>
                                      <a
                                        href="#"
                                        data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        className="share-ico iq-copy-link"
                                        tabindex="0"
                                      >
                                        <i className="ri-links-fill"></i>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-add-line"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="favorites-slider list-inline  p-0 mb-0 iq-rtl-direction ">
                        <li className="slide-item" style={{ width: "100%" }}>
                          <div className="block-images position-relative img-box-horizontal">
                            <div className="img-box" style={{ width: "19rem" }}>
                              <img
                                src="https://images.pexels.com/photos/1149022/pexels-photo-1149022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="img-fluid img-box-horizontal"
                                alt=""
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <a href="movie-details.html">Sand Dust</a>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                <div className="badge badge-secondary p-1 mr-2">
                                  13+
                                </div>
                                <span className="text-white">2h 30m</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="movie-details.html"
                                  role="button"
                                  className="btn btn-hover iq-button"
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  ></i>
                                  Play Now
                                </a>
                              </div>
                            </div>

                            <div className="block-social-info">
                              <ul className="list-inline p-0 m-0 music-play-lists">
                                <li className="share">
                                  <span>
                                    <i className="ri-share-fill"></i>
                                  </span>
                                  <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-facebook-fill"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-twitter-fill"></i>
                                      </a>
                                      <a
                                        href="#"
                                        data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        className="share-ico iq-copy-link"
                                        tabindex="0"
                                      >
                                        <i className="ri-links-fill"></i>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-add-line"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>


                    <div>
                      <ul className="favorites-slider list-inline  p-0 mb-0 iq-rtl-direction ">
                        <li className="slide-item" style={{ width: "100%" }}>
                          <div className="block-images position-relative img-box-horizontal">
                            <div className="img-box" style={{ width: "19rem" }}>
                              <img
                                src="https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8="
                                className="img-fluid img-box-horizontal"
                                alt=""
                              />
                            </div>
                            <div className="block-description">
                              <h6 className="iq-title">
                                <a href="movie-details.html">Sand Dust</a>
                              </h6>
                              <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                                <div className="badge badge-secondary p-1 mr-2">
                                  13+
                                </div>
                                <span className="text-white">2h 30m</span>
                              </div>
                              <div className="hover-buttons">
                                <a
                                  href="movie-details.html"
                                  role="button"
                                  className="btn btn-hover iq-button"
                                >
                                  <i
                                    className="fa fa-play mr-1"
                                    aria-hidden="true"
                                  ></i>
                                  Play Now
                                </a>
                              </div>
                            </div>

                            <div className="block-social-info">
                              <ul className="list-inline p-0 m-0 music-play-lists">
                                <li className="share">
                                  <span>
                                    <i className="ri-share-fill"></i>
                                  </span>
                                  <div className="share-box">
                                    <div className="d-flex align-items-center">
                                      <a
                                        href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-facebook-fill"></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-ico"
                                        tabindex="0"
                                      >
                                        <i className="ri-twitter-fill"></i>
                                      </a>
                                      <a
                                        href="#"
                                        data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                        className="share-ico iq-copy-link"
                                        tabindex="0"
                                      >
                                        <i className="ri-links-fill"></i>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-heart-fill"></i>
                                  </span>
                                  <span className="count-box">19+</span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ri-add-line"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                  
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


    </>
  );
}

export default MultitudeCarousel;
