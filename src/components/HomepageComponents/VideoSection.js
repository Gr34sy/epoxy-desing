const VideoSection = () => {
  return (
    <div className="video-section layout">
      <h2 className="header">Jak powstają obrazy</h2>

      <video className="video-section__container" controls loop>
        <source src="videos/epoxydVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
