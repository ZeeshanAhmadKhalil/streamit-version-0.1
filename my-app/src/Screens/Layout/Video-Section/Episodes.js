import React, { useRef } from "react";
import { FaPlay } from "react-icons/fa";

function Episodes() {
  const videoRef = useRef(null);
  const handlePlayVideo = () => {
    videoRef.current.play();
    console.log(videoRef);
  };
  return (
    <div className="episodes-container">
      <h1>EPISODES</h1>
      <div className="video-sections-container">
        <div className="left-video-section">
          <video
            muted=""
            loop=""
            class="w-100"
            id="modal-video"
            poster="https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ref={videoRef}
          >
            <source
              src="https://multitude.s3.wasabisys.com/money-heist/trailer/aINOB5uahg4AamDl2e1bKq5fsZev7TACImTHRxeX.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
          <div
            className="modal-video-button episode-video-button"
            onClick={handlePlayVideo}
          >
            <FaPlay />
          </div>
        </div>
        <div className="right-video-section">
          <div className="container season-episodes">
            <div className="season-episodes-upper">
              <div className="seasons-episode-img">
                <video
                  muted=""
                  loop=""
                  class="w-100"
                  id="modal-video video-placement"
                  poster="https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  ref={videoRef}
                >
                  <source
                    src="https://multitude.s3.wasabisys.com/money-heist/trailer/aINOB5uahg4AamDl2e1bKq5fsZev7TACImTHRxeX.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support HTML5 video.
                </video>

                <div
                  className="modal-video-button episode-video-button"
                  onClick={handlePlayVideo}
                >
                  <FaPlay />
                </div>
              </div>

              <h4 className="episode-heading">Episode 1</h4>
            </div>
            <div className="season-episodes-upper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ktko1j5f9gRIDnY99Zw3UPTZ2zTdhGxy-A&usqp=CAU"
                className="seasons-episode-img"
              />
              <h4 className="episode-heading">Episode 1</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episodes;
