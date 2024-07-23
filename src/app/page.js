import dummyImg from "../assets/images/dummyDecoration.jpg";
import { getMainPageDetails } from "@/lib/getMainPageDetails";

import Image from "next/image";

export default async function Home() {
  const details = await getMainPageDetails();

  console.log(details);

  return (
    <main>
      <div className="hero">
        <div className="hero__img-container">
          <Image
            src={dummyImg}
            fill
            alt="home decoration example"
            className="hero__img"
          />
        </div>
      </div>

      <div className="layout">Dupsko</div>
    </main>
  );
}
