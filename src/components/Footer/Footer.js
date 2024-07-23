import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">&copy; Copyright Piotr Słupski</p>

        <div>
          <p>
            Check out page author&apos;s{" "}
            <a href="https://heroic-quokka-3e69bf.netlify.app">portfolio</a> and{" "}
            <a href="https://github.com/Gr34sy">Github profile</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
