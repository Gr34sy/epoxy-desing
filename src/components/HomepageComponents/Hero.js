import Image from "next/image";

const Hero = ({ title, image, subtitle }) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <Image
          src={image}
          fill
          alt="home decoration example"
          className="hero__img"
        />

        <h1 className="header hero__header">
          {title}
          <span>{subtitle}</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
