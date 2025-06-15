import React from 'react';
import './BackgroundVideo.css';
import videoFile from '../../public/video.mp4'; 

const BackgroundVideo = () => {
  return (
    <video className="video-bg" autoPlay muted loop playsInline preload="auto">
      <source src={videoFile} type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  );
};

export default BackgroundVideo;
