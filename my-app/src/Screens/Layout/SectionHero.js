import React from 'react'
import MainSection from './MainSection/MainSection'

function SectionHero() {
    return (
        <section id="home" className="iq-main-slider p-0 iq-rtl-direction section-image" style={{height: "90vh"}}>
        <div id="home-slider" className="slider m-0 p-0">
           <div className="slide slick-bg">
              <div className="container position-relative h-100 main-section-container">
                 <div className="slider-inner h-100">
                    <div className="row align-items-center  iq-ltr-direction h-100 ">
                       <div className="col-xl-6 col-lg-12 col-md-12 col-left-main">
                          <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
                             data-delay-in="0.6">Deathnote</h1>

                        <div className="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in="1">
                              
                             <span className="badge badge-secondary p-2">18+</span>
                             <span className="ml-3">2 Seasons</span>
                          </div> 
                          <p data-animation-in="fadeInUp" data-delay-in="1.2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                             dummy text ever since the 1500s.
                          </p>
                          <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                           <div className="text-primary title starring">
                               Starring: <span className="text-body">Karen Gilchrist, James Earl Jones</span>
                           </div>
                           <div className="text-primary title genres">
                               Genres: <span className="text-body">Action</span>
                           </div>
                           <div className="text-primary title tag">
                               Tag: <span className="text-body">Action, Adventure, Horror</span>
                           </div>
                       </div>
                          <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                             <a href="show-details.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                aria-hidden="true"></i>Play Now</a>
                             <a href="show-details.html" className="btn btn-link">More details</a>

                             <div className="col-xl-5 col-lg-12 col-md-12 trailor-video  text-center">
                              <a href="video/trailer.mp4" className="video-open playbtn">
                                 <svg className="watch-trailer-svg">
                                    <polygon className='triangle' fill="none" stroke-width="7" stroke-linecap="round"
                                       stroke-linejoin="round" stroke-miterlimit="10"
                                       points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                                    <circle className='circle' fill="none" stroke-width="7" stroke-linecap="round"
                                       stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3" />
                                 </svg>
                                 <span className="w-trailor">Watch Trailer</span>
                              </a>
                           </div>
                          </div>
                       </div>
                     
                    </div>
                 </div>
              </div>
           </div>



           </div>
     </section>
    )
}

export default SectionHero
