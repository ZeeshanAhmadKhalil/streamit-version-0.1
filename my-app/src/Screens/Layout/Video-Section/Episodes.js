import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

function Episodes() {
  const [videoURL, setVideoURL] = useState(
    "https://multitude.s3.wasabisys.com/money-heist/trailer/aINOB5uahg4AamDl2e1bKq5fsZev7TACImTHRxeX.mp4"
  );
  const [vidUrl, setVidUrl] = useState([
    {
      id: 1,
      url: "https://multitude.s3.wasabisys.com/money-heist/trailer/aINOB5uahg4AamDl2e1bKq5fsZev7TACImTHRxeX.mp4",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ktko1j5f9gRIDnY99Zw3UPTZ2zTdhGxy-A&usqp=CAU",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=eao7ABGFUXs",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ktko1j5f9gRIDnY99Zw3UPTZ2zTdhGxy-A&usqp=CAU",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=qdCHEUaFhBk",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ktko1j5f9gRIDnY99Zw3UPTZ2zTdhGxy-A&usqp=CAU",
    },
  ]);

  const handleVideosUrl = (url) => {
    setVideoURL(url);
  };

  const RenderVideosUrls = vidUrl.map((item, key) => {
    return (
      <div
        onClick={() => setVideoURL(item.url)}
        className="season-episodes-upper "
      >
        <img
          id={item.id}
          src={item.thumbnail}
          thumbnail={item.thumbnail}
          className="seasons-episode-img episodes-thumbnail"
        />
        <div>
        <h4 className="video-episode-heading">Episode 1</h4>
        <p>Videos description goes here</p>
        </div>
        
      </div>
    );
  });

  const videoRef = useRef(null);

  const handlePlayEpisodes = () => {
    videoRef.current.play();
  };
  return (
    <div className="container episodes-container">
      <div className="container video-sections-container">
        <div className="left-video-section">
          <ReactPlayer
            // id="modal-video video-placement"
            controls
            light="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ktko1j5f9gRIDnY99Zw3UPTZ2zTdhGxy-A&usqp=CAU"
            url={videoURL}
          />
        </div>
        <div className="right-video-section">
          {RenderVideosUrls}
          </div>

        
         
      </div>
    </div>
  );
}

export default Episodes;
