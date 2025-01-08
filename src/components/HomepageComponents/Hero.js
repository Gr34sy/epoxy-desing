import Image from 'next/image';

const Hero = ({ title, image, subtitle }) => {
  return (
    <div className="hero">
      <h1 className="header hero__header">
        {title}
        <span>{subtitle}</span>
      </h1>
    </div>
  );
};

export default Hero;
