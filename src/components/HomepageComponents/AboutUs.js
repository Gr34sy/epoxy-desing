const AboutUs = ({ description }) => {
  return (
    <div className="about-us">
      <div className="about-us__description">
        <h2 className="header">O nas</h2>
        <p>{description}</p>
      </div>
      <div className="about-us__gif">GIF</div>
    </div>
  );
};

export default AboutUs;
