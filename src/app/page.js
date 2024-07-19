import dummyImg from '../assets/images/dummyDecoration.jpg';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="homepage">
      <div className='hero'>
        <h1 className="header">
          Strona w trakcie przebudowy! <br/>
          <span>Zapraszamy Niebawem</span>
        </h1>

        <div className='hero__img-container'>
          <Image src={dummyImg} fill alt="home decoration example" className='hero__img'/>
        </div>
      </div>
    </main>
  );
}
