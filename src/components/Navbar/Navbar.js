"use client";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// logotype
import logotype from "../../assets/images/logotype.png";

// components
import Image from "next/image";
import Link from "next/link";

// hooks
import { useState } from "react";

export function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="navbar">
      {!showMobileNav && (
        <FontAwesomeIcon icon={faBars} className="navbar__bars-icon" />
      )}
      {showMobileNav && (
        <FontAwesomeIcon icon={faXmark} className="navbar__x-icon" />
      )}

      <ul className="navbar__list">
        <li className="navbar__list_item ">
          <Link href="/">Strona Główna</Link>
        </li>

        <li className="navbar__list_item ">
          <Link href="/">Produkty</Link>
        </li>
      </ul>

      <Link href="/" className="navbar__logotype">
        <Image
          className="navbar__logotype_img"
          src={logotype}
          alt="Logotype of Epoxy Desing"
          width={175}
          height={35}
        />
      </Link>

      <ul className="navbar__list">
        <li className="navbar__list_item ">
          <Link href="/">Zaprojektuj</Link>
        </li>

        <li className="navbar__list_item ">
          <Link href="/">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
