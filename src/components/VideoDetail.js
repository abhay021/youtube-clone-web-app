import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div style={{ color: "white" }}>Loading..</div>;
  }
  const videoRef = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoRef} />
      </div>
      <div
        style={{ backgroundColor: "black", color: "white" }}
        className="ui segment"
      >
        <h4 style={{ color: "white" }} className="ui header">
          {video.snippet.title}
        </h4>
        <p> {video.snippet.description} </p>
      </div>
    </div>
  );
};

export default VideoDetail;
