"use client";

import { useRouter } from "next/navigation";
export function Button({ action, outlined, link, children }) {
  const router = useRouter();

  function handleClick() {
    if (link) {
      router.push(link);
    } else {
      if (typeof action === "function") {
        action();
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={outlined ? "button button--outlined" : "button"}
    >
      {children}
    </button>
  );
}
