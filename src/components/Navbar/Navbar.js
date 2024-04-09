"use client";
import Image from "next/image";
import Link from "next/link";
import logotype from "../../assets/images/logotype.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list_item navbar__logo">
          <Link href="/">
            <Image
              className="navbar__logotype"
              src={logotype}
              alt="Logotype of Epoxy Desing"
              width={250}
              height={50}
            />
          </Link>
        </li>

        {/* <li className="navbar__list__item navbar__logo">
                    <Link href="/">
                        Test
                    </Link>
                </li> */}
      </ul>
    </nav>
  );
}
