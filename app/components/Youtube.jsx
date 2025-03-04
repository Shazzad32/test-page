import React from "react";
import ReactPlayer from "react-player";

const Youtube = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <iframe
        className="w-full h-64 md:h-96 rounded-lg"
        src="https://www.youtube.com/embed/M5zOesnmGQs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
